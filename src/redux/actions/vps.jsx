import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_VPSDATA,
  EDIT_VPSDATA,
  FETCH_VPSDATA,
  FETCH_VPSSELECTOPTIONS,
  GET_VPS,
} from "./types";

const autoClose = 3000;

export const get_vps = (vps) => (dispatch) => {
  dispatch({
    type: GET_VPS,
    payload: vps,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/vps/");
    dispatch({
      type: FETCH_VPSSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_vps = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/vps/", filter);
    await dispatch({
      type: FETCH_VPSDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_vps = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/vps/add", data);
    dispatch({
      type: ADD_VPSDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_vps = (vps) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/vps/edit/${vps._id}`, { vps });

    dispatch({
      type: EDIT_VPSDATA,
      payload: { id: vps._id, vps },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
