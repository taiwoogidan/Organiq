import RefreshToken from "../models/RefreshToken.js";
import { hashData } from "./hashData.js";

export const generateRefreshToken = async (refreshToken, userId) => {
  try {
    const refreshHash = await hashData(refreshToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    console.log(expiresAt);
    await RefreshToken.create({ refreshHash, user: userId, expiresAt });
    console.log("Refresh token done");
  } catch (error) {
    console.error(error.message);
  }
};
