import { configureStore } from "@reduxjs/toolkit";
import helperReducer from "./helper/slice";

const store = configureStore({
  reducer: {
    helper: helperReducer,
  },
});

export default store;
