import * as ActionTypes from "../actionTypes";

const movieReducer = (
  state = {
    movie: [],
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.MOVIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.MOVIES_LOADING:
      return { ...state, isLoading: true, error: null };
    case ActionTypes.MOVIES_LOADED:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};
export default movieReducer;
