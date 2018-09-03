import { combineReducers } from "redux";
import LevelReducer from "./reducer_memberLevel";
import MemberReducer from "./reducer_member";

const rootReducer = combineReducers({
  levels: LevelReducer,
  membersIndex: MemberReducer,

});

export default rootReducer;
