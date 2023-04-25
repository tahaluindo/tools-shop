import {
  ADD_PROGRAMSCRIPTDATA,
  EDIT_PROGRAMSCRIPTDATA,
  FETCH_PROGRAMSCRIPTDATA,
  FETCH_PROGRAMSCRIPTSELECTOPTIONS,
  GET_PROGRAMSCRIPT,
} from "../actions/types";

const initialState = {
  programScriptOptionValue: {},
  cnt: 0,
  programScripts: [],
  selected_programScript: {},
};

const programScriptReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PROGRAMSCRIPTSELECTOPTIONS:
      return {
        ...state,
        programScriptOptionValue: payload,
      };
    case GET_PROGRAMSCRIPT:
      return {
        ...state,
        selected_programScript: payload,
      };
    case FETCH_PROGRAMSCRIPTDATA:
      return {
        ...state,
        cnt: payload.cnt,
        programScripts: payload.data,
      };
    case ADD_PROGRAMSCRIPTDATA:
      return {
        ...state,
        programScripts: [payload, ...state.programScripts],
      };
    case EDIT_PROGRAMSCRIPTDATA:
      return {
        ...state,
        programScripts: state.programScripts.map((programScript) =>
          programScript._id === payload.id ? payload.programScript : programScript
        ),
      };
    default:
      return state;
  }
};

export default programScriptReducer;
