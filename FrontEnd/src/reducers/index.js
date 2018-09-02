import { combineReducers } from "redux";
import LevelReducer from "./reducer_memberLevel";

const rootReducer = combineReducers({
  levels: LevelReducer,

});

export default rootReducer;
