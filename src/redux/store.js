import { configureStore } from "@reduxjs/toolkit";
import splashReducer from './splashSlice'

export const store = configureStore({
  reducer: {
    splash: splashReducer,
  },
});