import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import doctors from "./data/doctors.js";
import User from "./models/userModel.js";
import Doctor from "./models/doctorModel.js";
import colors from "colors";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Doctor.deleteMany();
    await User.deleteMany();

    await User.insertMany(users);

    await Doctor.insertMany(doctors);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Doctor.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
