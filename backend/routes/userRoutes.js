import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  logoutUser,
  bookAppointment,
  myAppointments,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers);
router.post("/register", registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).put(updateUser);
router.post("/book-appointment", protect, bookAppointment);
router.post("/my-appointments", protect, myAppointments);

export default router;
