import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_PROGRAMSCRIPTDATA,
  EDIT_PROGRAMSCRIPTDATA,
  FETCH_PROGRAMSCRIPTDATA,
  FETCH_PROGRAMSCRIPTSELECTOPTIONS,
  GET_PROGRAMSCRIPT,
} from "./types";

const autoClose = 3000;

export const get_programScript = (programScript) => (dispatch) => {
  dispatch({
    type: GET_PROGRAMSCRIPT,
    payload: programScript,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/programScript/");
    dispatch({
      type: FETCH_PROGRAMSCRIPTSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_programScripts = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/programScript/", filter);
    await dispatch({
      type: FETCH_PROGRAMSCRIPTDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_programScript = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/programScript/add", data);
    dispatch({
      type: ADD_PROGRAMSCRIPTDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_programScript = (programScript) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/programScript/edit/${programScript._id}`, { programScript });

    dispatch({
      type: EDIT_PROGRAMSCRIPTDATA,
      payload: { id: programScript._id, programScript },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
