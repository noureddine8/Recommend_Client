import * as ActionTypes from "../actionTypes";

const seriesReducer = (
  state = {
    series: [],
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SERIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ActionTypes.SERIES_LOADING:
      return { ...state, isLoading: true, error: null };
    case ActionTypes.SERIES_LOADED:
      return {
        ...state,
        series: action.payload,
        isLoading: false,
        error: null,
      };
    case ActionTypes.ADD_SERIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.ADD_SERIES_LOADED:
      return {
        ...state,
        series: [...state.series, action.payload],
        isLoading: false,
        error: null,
      };

    case ActionTypes.ADD_SERIES_LOADING:
      return { ...state, isLoading: true, error: null };

    case ActionTypes.DELETE_SERIES_LOADED:
      return {
        ...state,
        isLoading: false,
        error: null,
        series: state.series.filter((item) => item._id !== action.payload.id),
      };

    case ActionTypes.DELETE_SERIES_LOADING:
      return { ...state, isLoading: true, error: null };

    case ActionTypes.DELETE_SERIES_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
export default seriesReducer;
