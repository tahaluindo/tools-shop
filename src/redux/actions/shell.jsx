import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_SHELLDATA,
  EDIT_SHELLDATA,
  FETCH_SHELLDATA,
  FETCH_SHELLSELECTOPTIONS,
  GET_SHELL,
} from "./types";

const autoClose = 3000;

export const get_shell = (shell) => (dispatch) => {
  dispatch({
    type: GET_SHELL,
    payload: shell,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/shell/");
    dispatch({
      type: FETCH_SHELLSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_shells = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/shell/", filter);
    await dispatch({
      type: FETCH_SHELLDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    dispatch(releaseLoading());
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_shell = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/shell/add", data);
    dispatch({
      type: ADD_SHELLDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
    dispatch(releaseLoading());
  } catch (err) {
    dispatch(releaseLoading());
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_shell = (shell) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/shell/edit/${shell._id}`, { shell });

    dispatch({
      type: EDIT_SHELLDATA,
      payload: { id: shell._id, shell },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
    dispatch(releaseLoading());
  }
};
