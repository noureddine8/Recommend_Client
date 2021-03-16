import { combineReducers } from "redux";

import auth from "./reducers/auth";
import user from "./reducers/user";
import movies from "./reducers/movies";
import series from "./reducers/series";

export const reducers = combineReducers({ auth, user, movies, series });
