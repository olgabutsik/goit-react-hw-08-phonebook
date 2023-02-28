import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const spinnerSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, actions) {
      return { ...state, filter: actions.payload };
    },
  },
});

export const { setFilter } = spinnerSlice.actions;
export default spinnerSlice.reducer;
