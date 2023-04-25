import { APP_LOADING, APP_LOADING_END } from "./types";

export const setLoading = () => dispatch => {
  dispatch({
    type: APP_LOADING
  })
}

export const releaseLoading = () => dispatch => {
  dispatch({
    type: APP_LOADING_END
  })
}
