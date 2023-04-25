import {
  ADD_SMTPDATA,
  EDIT_SMTPDATA,
  FETCH_SMTPDATA,
  FETCH_SMTPSELECTOPTIONS,
  GET_SMTP,
} from "../actions/types";

const initialState = {
  smtpOptionValue: {},
  cnt: 0,
  smtps: [],
  selected_smtp: {},
};

const smtpReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SMTPSELECTOPTIONS:
      return {
        ...state,
        smtpOptionValue: payload,
      };
    case GET_SMTP:
      return {
        ...state,
        selected_smtp: payload,
      };
    case FETCH_SMTPDATA:
      return {
        ...state,
        cnt: payload.cnt,
        smtps: payload.data,
      };
    case ADD_SMTPDATA:
      return {
        ...state,
        smtps: [payload, ...state.smtps],
      };
    case EDIT_SMTPDATA:
      return {
        ...state,
        smtps: state.smtps.map((smtp) =>
          smtp._id === payload.id ? payload.smtp : smtp
        ),
      };
    default:
      return state;
  }
};

export default smtpReducer;
