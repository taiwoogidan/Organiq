import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      select: false,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Organization = mongoose.model("Organization", organizationSchema);
export default Organization;
