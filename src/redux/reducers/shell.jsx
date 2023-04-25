import {
  ADD_SHELLDATA,
  EDIT_SHELLDATA,
  FETCH_SHELLDATA,
  FETCH_SHELLSELECTOPTIONS,
  GET_SHELL,
} from "../actions/types";

const initialState = {
  shellOptionValue: {},
  cnt: 0,
  shells: [],
  selected_shell: {},
};

const shellReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SHELLSELECTOPTIONS:
      return {
        ...state,
        shellOptionValue: payload,
      };
    case GET_SHELL:
      return {
        ...state,
        selected_shell: payload,
      };
    case FETCH_SHELLDATA:
      return {
        ...state,
        cnt: payload.cnt,
        shells: payload.data,
      };
    case ADD_SHELLDATA:
      return {
        ...state,
        shells: [payload, ...state.shells],
      };
    case EDIT_SHELLDATA:
      return {
        ...state,
        shells: state.shells.map((shell) =>
          shell._id === payload.id ? payload.shell : shell
        ),
      };
    default:
      return state;
  }
};

export default shellReducer;
