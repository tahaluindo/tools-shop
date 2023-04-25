import {
  ADD_METHODDATA,
  EDIT_METHODDATA,
  FETCH_METHODDATA,
  FETCH_METHODSELECTOPTIONS,
  GET_METHOD,
} from "../actions/types";

const initialState = {
  methodOptionValue: {},
  cnt: 0,
  methods: [],
  selected_method: {},
};

const methodReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_METHODSELECTOPTIONS:
      return {
        ...state,
        methodOptionValue: payload,
      };
    case GET_METHOD:
      return {
        ...state,
        selected_method: payload,
      };
    case FETCH_METHODDATA:
      return {
        ...state,
        cnt: payload.cnt,
        methods: payload.data,
      };
    case ADD_METHODDATA:
      return {
        ...state,
        methods: [payload, ...state.methods],
      };
    case EDIT_METHODDATA:
      return {
        ...state,
        methods: state.methods.map((method) =>
          method._id === payload.id ? payload.method : method
        ),
      };
    default:
      return state;
  }
};

export default methodReducer;
