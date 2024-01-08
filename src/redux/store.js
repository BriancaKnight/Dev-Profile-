import { configureStore } from "@reduxjs/toolkit";
import splashReducer from './splashSlice';
import linkReducer from './linkSlice';
import headerReducer from './headerSlice';

export const store = configureStore({
  reducer: {
    splash: splashReducer,
    link: linkReducer,
    headerVisible: headerReducer,
  },
});