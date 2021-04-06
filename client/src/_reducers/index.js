import { combineReducers } from "redux";
import user from "./user_reducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;

// 여러 가지의 Reducer를 rootReducer로 하나로 combine해줌
