import express from "express";
import { getDoctor, getDoctorById } from "../controllers/doctorController.js";
const router = express.Router();

router.get("/", getDoctor);
router.get("/:id", getDoctorById);

export default router;
