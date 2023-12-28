import express from "express";
import doctors from "./data/doctors.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

connectDB();

app.get("/api/doctors", (req, res) => {
  res.json(doctors);
});

app.get("/api/doctor/:id", (req, res) => {
  const doctor = doctors.find((p) => p._id === Number(req.params.id));
  res.json(doctor);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
