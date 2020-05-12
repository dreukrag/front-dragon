import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DragonReducer from "./DragonReducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  dragon: DragonReducer,
});

export default RootReducer;
