import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_PHPMAILERDATA,
  EDIT_PHPMAILERDATA,
  FETCH_PHPMAILERDATA,
  FETCH_PHPMAILERSELECTOPTIONS,
  GET_PHPMAILER,
} from "./types";

const autoClose = 3000;

export const get_phpmailer = (phpmailer) => (dispatch) => {
  dispatch({
    type: GET_PHPMAILER,
    payload: phpmailer,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/phpmailer/");
    dispatch({
      type: FETCH_PHPMAILERSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_phpmailers = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/phpmailer/", filter);
    await dispatch({
      type: FETCH_PHPMAILERDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_phpmailer = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/phpmailer/add", data);
    dispatch({
      type: ADD_PHPMAILERDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_phpmailer = (phpmailer) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/phpmailer/edit/${phpmailer._id}`, { phpmailer });

    dispatch({
      type: EDIT_PHPMAILERDATA,
      payload: { id: phpmailer._id, phpmailer },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
