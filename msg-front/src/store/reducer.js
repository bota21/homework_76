import {
  FETCH_DATA,
  FETCH_ERROR,
  FETCH_SUCCESS,
  POST_DATA,
  FORM_ERROR,
} from "./actionTypes";
const initialState = {
  messages: [],
  loading: false,
  error: null,
  formError: null,
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
      return { ...state, loading: false, formError: null };
    case FORM_ERROR:
      return { ...state, formError: action.error };
    default:
      return state;
  }
};

export default reducer;
