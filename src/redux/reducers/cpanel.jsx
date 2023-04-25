import {
  ADD_CPANELDATA,
  EDIT_CPANELDATA,
  FETCH_CPANELDATA,
  FETCH_CPANELSELECTOPTIONS,
  GET_CPANEL,
} from "../actions/types";

const initialState = {
  cpanelOptionValue: {},
  cnt: 0,
  cpanels: [],
  selected_cpanel: {},
};

const cpanelReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CPANELSELECTOPTIONS:
      return {
        ...state,
        cpanelOptionValue: payload,
      };
    case GET_CPANEL:
      return {
        ...state,
        selected_cpanel: payload,
      };
    case FETCH_CPANELDATA:
      return {
        ...state,
        cnt: payload.cnt,
        cpanels: payload.data,
      };
    case ADD_CPANELDATA:
      return {
        ...state,
        cpanels: [payload, ...state.cpanels],
      };
    case EDIT_CPANELDATA:
      return {
        ...state,
        cpanels: state.cpanels.map((cpanel) =>
          cpanel._id === payload.id ? payload.cpanel : cpanel
        ),
      };
    default:
      return state;
  }
};

export default cpanelReducer;
