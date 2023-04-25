import axios from "axios";
import { SERVICE } from "./types";
import { releaseLoading, setLoading } from "./app";

export const service = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get("/api/service/");
    dispatch({
      type: SERVICE,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    dispatch(releaseLoading());
  }
};
