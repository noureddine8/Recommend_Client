import * as ActionTypes from "../actionTypes";
const userReducer = (state = { user: null, error: null }, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_USER:
      return { ...state, user: action.payload, error: null };

    case ActionTypes.LOAD_ERROR:
      return { ...state, user: null, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
