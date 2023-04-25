import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_RDPSDATA,
  EDIT_RDPSDATA,
  FETCH_RDPSDATA,
  FETCH_RDPSSELECTOPTIONS,
  GET_RDP,
} from "./types";

const autoClose = 3000;

export const get_rdp = (rdp) => (dispatch) => {
  dispatch({
    type: GET_RDP,
    payload: rdp,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/rdps/");
    dispatch({
      type: FETCH_RDPSSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_rdps = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/rdps/", filter);
    await dispatch({
      type: FETCH_RDPSDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_rdp = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/rdps/add", data);
    dispatch({
      type: ADD_RDPSDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_rdp = (rdp) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/rdps/edit/${rdp._id}`, { rdp });

    dispatch({
      type: EDIT_RDPSDATA,
      payload: { id: rdp._id, rdp },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
