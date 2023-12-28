import { DOCTOR_URL } from "../constants";
import { apiSlice } from "./apiSlice";

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
