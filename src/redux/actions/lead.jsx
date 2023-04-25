import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_LEADDATA,
  EDIT_LEADDATA,
  FETCH_LEADDATA,
  FETCH_LEADSELECTOPTIONS,
  GET_LEAD,
} from "./types";

const autoClose = 3000;

export const get_lead = (lead) => (dispatch) => {
  dispatch({
    type: GET_LEAD,
    payload: lead,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/lead/");
    dispatch({
      type: FETCH_LEADSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_leads = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/lead/", filter);
    await dispatch({
      type: FETCH_LEADDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_lead = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/lead/add", data);
    dispatch({
      type: ADD_LEADDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_lead = (lead) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/lead/edit/${lead._id}`, { lead });

    dispatch({
      type: EDIT_LEADDATA,
      payload: { id: lead._id, lead },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
