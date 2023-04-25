import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_CPANELDATA,
  EDIT_CPANELDATA,
  FETCH_CPANELDATA,
  FETCH_CPANELSELECTOPTIONS,
  GET_CPANEL,
} from "./types";

const autoClose = 3000;

export const get_cpanel = (cpanel) => (dispatch) => {
  dispatch({
    type: GET_CPANEL,
    payload: cpanel,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/cpanel/");
    dispatch({
      type: FETCH_CPANELSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_cpanels = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/cpanel/", filter);
    await dispatch({
      type: FETCH_CPANELDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_cpanel = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/cpanel/add", data);
    dispatch({
      type: ADD_CPANELDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_cpanel = (cpanel) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/cpanel/edit/${cpanel._id}`, { cpanel });

    dispatch({
      type: EDIT_CPANELDATA,
      payload: { id: cpanel._id, cpanel },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
