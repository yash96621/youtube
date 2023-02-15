import { combineReducers } from "redux";
import reducers from "./reducers";

const reduce = combineReducers({
  state: reducers,
});

export default reduce;
