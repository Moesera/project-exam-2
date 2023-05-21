import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const filteringSlice = createSlice({
  name: "filtering",
  initialState,
  reducers: {
    openFiltering: (state) => {
      state.isOpen = true;
    },
    closeFiltering: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openFiltering, closeFiltering } = filteringSlice.actions;

export default filteringSlice.reducer;