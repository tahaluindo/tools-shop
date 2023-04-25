import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_METHODDATA,
  EDIT_METHODDATA,
  FETCH_METHODDATA,
  FETCH_METHODSELECTOPTIONS,
  GET_METHOD,
} from "./types";

const autoClose = 3000;

export const get_method = (method) => (dispatch) => {
  dispatch({
    type: GET_METHOD,
    payload: method,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/method/");
    dispatch({
      type: FETCH_METHODSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_methods = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/method/", filter);
    await dispatch({
      type: FETCH_METHODDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    dispatch(releaseLoading());
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_method = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/method/add", data);
    dispatch({
      type: ADD_METHODDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_method = (method) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/method/edit/${method._id}`, { method });

    dispatch({
      type: EDIT_METHODDATA,
      payload: { id: method._id, method },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
