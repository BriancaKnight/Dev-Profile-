import { configureStore } from "@reduxjs/toolkit";
import splashReducer from './splashSlice'
import linkReducer from './linkSlice'

export const store = configureStore({
  reducer: {
    splash: splashReducer,
    link: linkReducer,
  },
});