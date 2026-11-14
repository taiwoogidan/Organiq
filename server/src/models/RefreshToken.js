import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    refreshHash: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);
export default RefreshToken;
