import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_SMTPDATA,
  EDIT_SMTPDATA,
  FETCH_SMTPDATA,
  FETCH_SMTPSELECTOPTIONS,
  GET_SMTP,
} from "./types";

const autoClose = 3000;

export const get_smtp = (smtp) => (dispatch) => {
  dispatch({
    type: GET_SMTP,
    payload: smtp,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/smtp/");
    dispatch({
      type: FETCH_SMTPSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_smtps = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/smtp/", filter);
    await dispatch({
      type: FETCH_SMTPDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_smtp = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/smtp/add", data);
    dispatch({
      type: ADD_SMTPDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_smtp = (smtp) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/smtp/edit/${smtp._id}`, { smtp });

    dispatch({
      type: EDIT_SMTPDATA,
      payload: { id: smtp._id, smtp },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
