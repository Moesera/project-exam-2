import { configureStore } from "@reduxjs/toolkit";
import loginModalSlice from "./js/hooks/loginModal";
import userAuthSlice from "./js/hooks/userAuth";
import bookingSlice from "./js/hooks/bookingModal";
import searchSlice from "./js/hooks/search/search";
import modalSlice from "./js/hooks/modal";

export const store = configureStore({
  reducer: {
    // Handles the open and closing of the modal
    loginModal: loginModalSlice,

    // modal for bookings
    booking: bookingSlice,

    // checks if the user is logged inn or not.
    userAuth: userAuthSlice,

    // search functionality
    search: searchSlice,

    modal: modalSlice,
  },
});
