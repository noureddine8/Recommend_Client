import * as api from "../../api/index";
import {
  SERIES_ERROR,
  SERIES_LOADED,
  SERIES_LOADING,
  ADD_SERIES_LOADING,
  ADD_SERIES_ERROR,
  ADD_SERIES_LOADED,
  DELETE_SERIES_ERROR,
  DELETE_SERIES_LOADED,
  DELETE_SERIES_LOADING,
} from "../actionTypes";

export const fetchSeries = () => async (dispatch) => {
  dispatch({ type: SERIES_LOADING });
  try {
    const { data } = await api.getAllSeries();
    dispatch({ type: SERIES_LOADED, payload: data.rec });
  } catch (error) {
    dispatch({ type: SERIES_ERROR, payload: error.response.data.message });
  }
};

export const postSeries = (formData, history) => async (dispatch) => {
  dispatch({ type: ADD_SERIES_LOADING });
  try {
    const { data } = await api.postRecommendation(formData);
    dispatch({ type: ADD_SERIES_LOADED, payload: data.result });
    history.push("/");
  } catch (error) {
    dispatch({ type: ADD_SERIES_ERROR, payload: error.response.data.message });
  }
};

export const deleteSeries = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SERIES_LOADING });
  try {
    const { data } = await api.deleteRecommendation(id);
    dispatch({
      type: DELETE_SERIES_LOADED,
      payload: { message: data.message, id },
    });
  } catch (error) {
    dispatch({
      type: DELETE_SERIES_ERROR,
      payload: error.response.data.message,
    });
  }
};
