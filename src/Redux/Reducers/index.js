import { combineReducers } from "redux";
import authReducer from "./Auth";
import userReducer from './User'

const reducers = combineReducers({
  admin: authReducer,
  users:userReducer
});

export default reducers;
