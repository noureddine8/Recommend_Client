import * as api from "../../api/index";
import { AUTH, AUTH_ERROR } from "../actionTypes";
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error);
    dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, payload: error.response.data.message });
  }
};
