import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLink: '',
};

const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {
    setSelectedLink: (state,action) => {
      state.selectedLink = action.payload;
    },
  },
});

export const { setSelectedLink } = linkSlice.actions
export default linkSlice.reducer;