import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import slice from "./slices/slice";

const reducer = combineReducers({
  slice: slice,
});

const store = configureStore({
  reducer,
});

export default store;
