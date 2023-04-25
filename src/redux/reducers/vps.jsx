import {
  ADD_VPSDATA,
  EDIT_VPSDATA,
  FETCH_VPSDATA,
  FETCH_VPSSELECTOPTIONS,
  GET_VPS,
} from "../actions/types";

const initialState = {
  vpsOptionValue: {},
  cnt: 0,
  vps: [],
  selected_vps: {},
  loading: false,
};

const vpsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_VPSSELECTOPTIONS:
      return {
        ...state,
        vpsOptionValue: payload,
        loading: false,
      };
    case GET_VPS:
      return {
        ...state,
        selected_vps: payload,
      };
    case FETCH_VPSDATA:
      return {
        ...state,
        cnt: payload.cnt,
        vps: payload.data,
        loading: false,
      };
    case ADD_VPSDATA:
      return {
        ...state,
        vps: [payload, ...state.vps],
        loading: false,
      };
    case EDIT_VPSDATA:
      return {
        ...state,
        vps: state.vps.map((vps) =>
          vps._id === payload.id ? payload.vps : vps
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export default vpsReducer;
