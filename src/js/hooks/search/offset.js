import { createSlice } from "@reduxjs/toolkit";

const offsetSlice = createSlice({
  name: "offset",
  initialState: 0,
  reducers: {
    incrementOffset: (state, action) => state + action.payload,
    decrementOffset: (state, action) => state - action.payload,
    resetOffset: () => 0,
    updateOffset: (state, action) => {
      const filters = action.payload;
      if (Object.values(filters).some((value) => value)) {
        return state + 20;
      } else {
        return 0;
      }
    },
  },
});

export const { incrementOffset, decrementOffset, resetOffset, updateOffset, updateOffsetSearch } = offsetSlice.actions;
export default offsetSlice.reducer;
