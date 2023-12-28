import mongoose from "mongoose";

const doctorSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      defualt: "",
    },
    speciality: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const DoctorDB = mongoose.model("DoctorDB", doctorSchema);

export default DoctorDB;
