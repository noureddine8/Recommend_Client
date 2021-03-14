import * as api from "../../api/index";
import { MOVIES_ERROR, MOVIES_LOADED, MOVIES_LOADING } from "../actionTypes";

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: MOVIES_LOADING });
  try {
    const { data } = await api.getAllMovies();
    dispatch({ type: MOVIES_LOADED, payload: data.rec });
  } catch (error) {
    dispatch({ type: MOVIES_ERROR, payload: error.response.data.message });
  }
};
