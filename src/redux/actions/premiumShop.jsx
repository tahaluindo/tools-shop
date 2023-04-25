import axios from "axios";
import { releaseLoading, setLoading } from "./app";
import { toast } from "react-toastify";
import {
  ADD_PREMIUMSHOPDATA,
  EDIT_PREMIUMSHOPDATA,
  FETCH_PREMIUMSHOPDATA,
  FETCH_PREMIUMSHOPSELECTOPTIONS,
  GET_PREMIUMSHOP,
} from "./types";

const autoClose = 3000;

export const get_premiumShop = (premiumShop) => (dispatch) => {
  dispatch({
    type: GET_PREMIUMSHOP,
    payload: premiumShop,
  });
};

export const fetch_select_options = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/premiumShop/");
    dispatch({
      type: FETCH_PREMIUMSHOPSELECTOPTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetch_premiumShops = (filter) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/premiumShop/", filter);
    await dispatch({
      type: FETCH_PREMIUMSHOPDATA,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    // toast.error(err.response.data.msg, { autoClose });
  }
};

export const add_premiumShop = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.post("/api/premiumShop/add", data);
    dispatch({
      type: ADD_PREMIUMSHOPDATA,
      payload: res.data,
    });
    toast.success("Added successfully!", { autoClose });
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};

export const edit_premiumShop = (premiumShop) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    await axios.post(`/api/premiumShop/edit/${premiumShop._id}`, { premiumShop });

    dispatch({
      type: EDIT_PREMIUMSHOPDATA,
      payload: { id: premiumShop._id, premiumShop },
    });

    // dispatch(releaseLoading());
    toast.success("Updated successfully!");
  } catch (err) {
    toast.error(err.response.data.msg, { autoClose });
  }
};
