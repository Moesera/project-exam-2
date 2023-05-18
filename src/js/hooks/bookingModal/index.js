import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    openBooking: (state) => {
      state.isOpen = true;
    },
    closeBooking: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openBooking, closeBooking } = bookingSlice.actions;

export default bookingSlice.reducer;