import * as api from "../../api/index";
import { LOAD_USER, LOAD_ERROR } from "../actionTypes";

export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await api.loadUser();
    dispatch({ type: LOAD_USER, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_ERROR, payload: error.response.data.message });
  }
};
