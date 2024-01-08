import {createSlice} from "@reduxjs/toolkit";

const initialState = true;

const splashSlice = createSlice({
  name: "splash",
  initialState: initialState,
  reducers: {
    toggle: (state) => !state,
  },
});


export default splashSlice.reducer;
export const { toggle } = splashSlice.actions;
