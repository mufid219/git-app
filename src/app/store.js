import { combineReducers, legacy_createStore as createStore } from "redux";
import gridReducer from "../features/grid/reducer";

let rootReducer = combineReducers({
  grid: gridReducer,
});
let store = createStore(rootReducer);

export default store;
