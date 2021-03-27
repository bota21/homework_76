import axios from "../axiosMessage";
import {
  FETCH_DATA,
  FETCH_ERROR,
  FETCH_SUCCESS,
  POST_DATA,
} from "./actionTypes";

const fetchData = () => {
  return { type: FETCH_DATA };
};
const fetchError = (error) => {
  return { type: FETCH_ERROR, error };
};
const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, data };
};
const postData = () => {
  return { ytpe: POST_DATA };
};

export const fetchRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());
      const response = await axios.get("/messages");
      dispatch(fetchSuccess(response.data));
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const sendRequest = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());
      await axios.post("/messages", data);
      dispatch(postData());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
