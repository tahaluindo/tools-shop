import { APP_LOADING, APP_LOADING_END } from "../actions/types";

const initialState = {
  loading: false
}

const appReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true
      }
    case APP_LOADING_END:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default appReducer;
