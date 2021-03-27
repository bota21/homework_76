import {
  FETCH_DATA,
  FETCH_ERROR,
  FETCH_SUCCESS,
  POST_DATA,
} from "./actionTypes";
const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_ERROR:
      return { ...state, error: action.error, loading: false };
    case FETCH_SUCCESS:
      return { ...state, messages: action.data, loading: false };
    case POST_DATA:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;