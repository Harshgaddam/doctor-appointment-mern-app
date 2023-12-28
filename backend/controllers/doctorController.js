import Doctor from "../models/doctorModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

const getDoctor = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({});
  res.json(doctors);
});

const getDoctorById = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (doctor) return res.json(doctor);
  return res.status(404).json({ message: "Doctor not found" });
});

export { getDoctor, getDoctorById };
