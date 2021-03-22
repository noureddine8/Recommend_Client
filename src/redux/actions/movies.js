import * as api from "../../api/index";
import {
  MOVIES_ERROR,
  MOVIES_LOADED,
  MOVIES_LOADING,
  ADD_MOVIE_LOADING,
  ADD_MOVIE_ERROR,
  ADD_MOVIE_LOADED,
  DELETE_MOVIE_ERROR,
  DELETE_MOVIE_LOADED,
  DELETE_MOVIE_LOADING,
} from "../actionTypes";

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: MOVIES_LOADING });
  try {
    const { data } = await api.getAllMovies();
    dispatch({ type: MOVIES_LOADED, payload: data.rec });
  } catch (error) {
    dispatch({ type: MOVIES_ERROR, payload: error.response?.data.message });
  }
};

export const postMovies = (formData, history) => async (dispatch) => {
  dispatch({ type: ADD_MOVIE_LOADING });
  try {
    const { data } = await api.postRecommendation(formData);
    dispatch({ type: ADD_MOVIE_LOADED, payload: data.result });
    history.push("/");
  } catch (error) {
    dispatch({ type: ADD_MOVIE_ERROR, payload: error.response.data.message });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  dispatch({ type: DELETE_MOVIE_LOADING });
  try {
    const { data } = await api.deleteRecommendation(id);
    dispatch({
      type: DELETE_MOVIE_LOADED,
      payload: { message: data.message, id },
    });
  } catch (error) {
    dispatch({
      type: DELETE_MOVIE_ERROR,
      payload: error.response.data.message,
    });
  }
};
