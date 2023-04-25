import {
  ADD_LEADDATA,
  EDIT_LEADDATA,
  FETCH_LEADDATA,
  FETCH_LEADSELECTOPTIONS,
  GET_LEAD,
} from "../actions/types";

const initialState = {
  leadOptionValue: {},
  cnt: 0,
  leads: [],
  selected_lead: {},
};

const leadReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_LEADSELECTOPTIONS:
      return {
        ...state,
        leadOptionValue: payload,
      };
    case GET_LEAD:
      return {
        ...state,
        selected_lead: payload,
      };
    case FETCH_LEADDATA:
      return {
        ...state,
        cnt: payload.cnt,
        leads: payload.data,
      };
    case ADD_LEADDATA:
      return {
        ...state,
        leads: [payload, ...state.leads],
      };
    case EDIT_LEADDATA:
      return {
        ...state,
        leads: state.leads.map((lead) =>
          lead._id === payload.id ? payload.lead : lead
        ),
      };
    default:
      return state;
  }
};

export default leadReducer;
