import { SERVICE } from "../actions/types";

const initialState = {
  counters: {}
};

const serviceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SERVICE:
      return {
        ...state,
        counters: payload,
      };
    default:
      return state;
  }
};

export default serviceReducer;
