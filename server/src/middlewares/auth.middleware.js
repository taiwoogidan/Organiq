import jwt from "jsonwebtoken";
import env from "../config/env.js";
import Organization from "../models/Organization.js";
export const authMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      const error = new Error("Authorization error, missing access Token");
      error.statusCode = 401;
      throw error;
    }
    const decoded = jwt.verify(accessToken, env.JWT_ACCESS_SECRET);
    if (!decoded) {
      const error = new Error("Authorization error, wrong access Token");
      error.statusCode = 401;
      throw error;
    }
    const user = await Organization.findById(decoded.userId);
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Authorization error",
    });
  }
};
