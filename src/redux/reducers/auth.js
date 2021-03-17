import * as ActionTypes from "../actionTypes";

const authReducer = (
  state = {
    token: JSON.parse(localStorage.getItem("profile")),
    error: null,
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.AUTH:
      localStorage.setItem(
        "profile",
        JSON.stringify({ token: action.payload.token })
      );
      return {
        ...state,
        token: action.payload.token,
        error: null,
        isLoading: false,
      };

    case ActionTypes.AUTH_LOADING:
      return { ...state, isLoading: true, error: null };

    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case ActionTypes.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: JSON.parse(localStorage.getItem("profile")),
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};
export default authReducer;
