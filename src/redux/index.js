import { combineReducers } from "redux";

import auth from "./reducers/auth";
import user from "./reducers/user";

export const reducers = combineReducers({ auth, user });
