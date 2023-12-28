import express from "express";
import products from "./data/doctors.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/api/doctors", (req, res) => {
  res.json(products);
});

app.get("/api/doctor/:id", (req, res) => {
  const product = products.find((p) => p._id === Number(req.params.id));
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
