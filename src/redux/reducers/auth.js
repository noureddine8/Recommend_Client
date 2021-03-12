import * as ActionTypes from "../actionTypes";

const authReducer = (state = { authData: null, error: null }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH:
      console.log(action.payload);
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...state, authData: action.payload };
    case ActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };
    case ActionTypes.LOGOUT:
      localStorage.clear();
      return { ...state };
    default:
      return state;
  }
};
export default authReducer;
