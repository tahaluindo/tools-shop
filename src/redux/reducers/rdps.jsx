import {
  ADD_RDPSDATA,
  EDIT_RDPSDATA,
  FETCH_RDPSDATA,
  FETCH_RDPSSELECTOPTIONS,
  GET_RDP,
} from "../actions/types";

const initialState = {
  rdpsOptionValue: {},
  cnt: 0,
  rdpsTotalCnt: 0,
  rdps: [],
  rdp: {},
  loading: false,
};

const rdpsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RDPSSELECTOPTIONS:
      return {
        ...state,
        rdpsOptionValue: payload,
        loading: false,
      };
    case GET_RDP:
      return {
        ...state,
        rdp: payload,
      };
    case FETCH_RDPSDATA:
      return {
        ...state,
        cnt: payload.cnt,
        rdpsTotalCnt: payload.totalCnt,
        rdps: payload.data,
        loading: false,
      };
    case ADD_RDPSDATA:
      return {
        ...state,
        rdps: [payload, ...state.rdps],
        loading: false,
      };
    case EDIT_RDPSDATA:
      return {
        ...state,
        rdps: state.rdps.map((rdp) =>
          rdp._id === payload.id ? payload.rdp : rdp
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default rdpsReducer;
