import { createSlice } from "@reduxjs/toolkit";
// import { getItem } from "../../localStorage/getItem";

const initialState = {
  isLoggedIn: !!localStorage.getItem("token"),
};

const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = userAuthSlice.actions;

export default userAuthSlice.reducer;