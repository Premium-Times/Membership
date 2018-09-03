import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import LevelReducer from "./reducer_memberLevel";
import MemberReducer from "./reducer_member";

const rootReducer = combineReducers({
  levels: LevelReducer,
  membersIndex: MemberReducer,
  form: formReducer,

});

export default rootReducer;
