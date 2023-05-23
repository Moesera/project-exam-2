import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isOpen = true;
    },
    closeLoginModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;

export default loginModalSlice.reducer;
