import { createSlice } from "@reduxjs/toolkit";

const offsetSlice = createSlice({
  name: 'offset',
  initialState: 100,
  reducers: {
    incrementOffset: (state, action) => state + action.payload,
    decrementOffset: (state, action) => state - action.payload,
    resetOffset: () => 100,
  },
});

export const { incrementOffset,decrementOffset, resetOffset } = offsetSlice.actions;
export default offsetSlice.reducer;