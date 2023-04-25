import {
  ADD_PHPMAILERDATA,
  EDIT_PHPMAILERDATA,
  FETCH_PHPMAILERDATA,
  FETCH_PHPMAILERSELECTOPTIONS,
  GET_PHPMAILER,
} from "../actions/types";

const initialState = {
  phpmailerOptionValue: {},
  cnt: 0,
  phpmailers: [],
  selected_phpmailer: {},
};

const phpmailerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PHPMAILERSELECTOPTIONS:
      return {
        ...state,
        phpmailerOptionValue: payload,
      };
    case GET_PHPMAILER:
      return {
        ...state,
        selected_phpmailer: payload,
      };
    case FETCH_PHPMAILERDATA:
      return {
        ...state,
        cnt: payload.cnt,
        phpmailers: payload.data,
      };
    case ADD_PHPMAILERDATA:
      return {
        ...state,
        phpmailers: [payload, ...state.phpmailers],
      };
    case EDIT_PHPMAILERDATA:
      return {
        ...state,
        phpmailers: state.phpmailers.map((phpmailer) =>
          phpmailer._id === payload.id ? payload.phpmailer : phpmailer
        ),
      };
    default:
      return state;
  }
};

export default phpmailerReducer;
