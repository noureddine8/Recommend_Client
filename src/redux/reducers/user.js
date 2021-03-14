import * as ActionTypes from "../actionTypes";
const userReducer = (
  state = { user: null, error: null, isLoading: false },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOAD_USER:
      return { ...state, user: action.payload, isLoading: false };

    case ActionTypes.LOAD_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default userReducer;
