import api from '../../utils/api';
import { toast } from "react-toastify";
import { FETCH_USERS, RESET_PASSWORD, USER_CHANGE_STATUS } from "./types";
import { releaseLoading, setLoading } from "./app";

export const fetch_users = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await api.get("/users/");

    await dispatch({
      type: FETCH_USERS,
      payload: res.data,
    });
    dispatch(releaseLoading());
  } catch (err) {
    console.error(err);
    toast.error(err.response.data.msg);
  }
};

export const change_password = (data) => async (dispatch) => {
    try {
        const res = await api.post(`/users/changePassword`, data);
        toast.success(res.data.msg);
    } catch (err) {
        toast.error(err.response.data.msg);
        console.error(err);
    }
}

export const reset_password = (userid, name) => async (dispatch) => {
    try {
        const res = await api.get(`/users/resetPassword/${userid}`);
        dispatch({
            type: RESET_PASSWORD,
            payload: { userid, user: res.data }
        })
        toast.success(`${name}'s password has been reset into 00000000`)
    } catch (err) {
        toast.error(err.response.data.msg);
        console.error(err);
    }
}

export const change_user_status = (userid) => async (dispatch) => {
    try {
        const res = await api.get(`/users/changeStatus/${userid}`);
        dispatch({
            type: USER_CHANGE_STATUS,
            payload: {userid, user: res.data}
        })
        toast.success("User status changed successfully!");
    } catch (err) {
        toast.error(err.response.data.msg);
        console.error(err);
    }
}
