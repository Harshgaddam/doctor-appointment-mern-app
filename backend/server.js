import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

import doctorRoutes from "./routes/doctorRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/api/doctor", doctorRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
