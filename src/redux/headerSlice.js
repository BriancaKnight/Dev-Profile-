import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: true,
};

const headerSlice = createSlice({
  name: 'headerVisible',
  initialState,
  reducers: {
    toggleHeaderVisibility(state)  {
      state.isVisible = !state.isVisible;
    },
    setHeaderVisibility(state, action) {
      state.isVisible = action.payload;
    },
  },
});

export const { toggleHeaderVisibility, setHeaderVisibility } = headerSlice.actions
export default headerSlice.reducer