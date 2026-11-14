import env from "../config/env.js";
import {
  signinService,
  signupService,
} from "../services/organizationAuth.service.js";
import { generateRefreshToken } from "../utils/generateRefreshToken.js";

export const signup = async (req, res) => {
  try {
    const user = await signupService(req.body);
    // console.log(user);
    res.status(200).json({
      success: true,
      message: "Signup successful",
    });
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
  // throw error;
};

export const signin = async (req, res) => {
  try {
    const isProduction = env.NODE_ENV;
    const { accessToken, refreshToken, userId } = await signinService(req.body);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 7 * 24 * 15 * 60 * 1000,
    });
    const runRefreshToken = await generateRefreshToken(refreshToken, userId);
    console.log(userId);
    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
  // throw error;
};
