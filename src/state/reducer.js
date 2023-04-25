import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import slice from "./slices/slice";
import data from "./slices/data";

const reducer = combineReducers({
  slice: slice,
  data: data,
});

const store = configureStore({
  reducer,
});

export default store;
