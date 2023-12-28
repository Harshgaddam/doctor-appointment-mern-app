import express from "express";
import doctors from "./data/doctors.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

import doctorRoutes from "./routes/doctorRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/api/doctor", doctorRoutes);
app.use("/api/users", userRoutes);

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
