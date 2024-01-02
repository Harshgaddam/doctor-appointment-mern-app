import { DOCTOR_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import { createSlice } from "@reduxjs/toolkit";

const doctor = createSlice({
  name: "doctor",
  initialState: {
    doctor: {},
  },
  reducers: {
    setDoctor: (state, action) => {
      state.doctor = action.payload;
    },
  },
});

export const { setDoctor } = doctor.actions;
export default doctor.reducer;

export const doctorSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDoctor: builder.query({
      query: () => ({
        url: DOCTOR_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getDoctorDetails: builder.query({
      query: (doctorId) => ({
        url: `${DOCTOR_URL}/${doctorId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetDoctorQuery, useGetDoctorDetailsQuery } = doctorSlice;
