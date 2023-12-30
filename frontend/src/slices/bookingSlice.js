import { createSlice } from "@reduxjs/toolkit";

const initialState =
  localStorage.getItem("booking") &&
  JSON.parse(localStorage.getItem("booking"));

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    saveBooking: (state, action) => {
      state.booking = action.payload;
      localStorage.setItem("booking", JSON.stringify(state.booking));
    },
    clearBooking: (state) => {
      state.booking = [];
      localStorage.removeItem("booking");
    },
  },
});

export const { saveBooking, clearBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
