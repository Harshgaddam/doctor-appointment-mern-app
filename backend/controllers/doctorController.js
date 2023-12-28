import Doctor from "../models/doctorModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

const getDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({});
  res.json(doctors);
});

const getDoctorById = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (doctor) res.json(doctor);
  else res.status(404).json({ message: "Doctor not found" });
});

export { getDoctors, getDoctorById };
