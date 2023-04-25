import {
  FETCH_USERS,
  RESET_PASSWORD,
  USER_CHANGE_STATUS,
} from "../actions/types";

const initialState = {
  users: [],
  user: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === payload.userid ? payload.user : user
        ),
      };
    case USER_CHANGE_STATUS:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === payload.userid ? payload.user : user
        ),
      };
    default:
      return state;
  }
};

export default userReducer
