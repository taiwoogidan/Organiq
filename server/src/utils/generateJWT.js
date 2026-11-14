import jwt from "jsonwebtoken";
import env from "../config/env.js";

const generateJWT = async (id) => {
  try {
    const accessToken = jwt.sign({ userId: id }, env.JWT_ACCESS_SECRET, {
      expiresIn: "10m",
    });
    const refreshToken = jwt.sign({ userId: id }, env.JWT_REFRESH_SECRET, {
      expiresIn: "10m",
    });
    return { accessToken, refreshToken };
  } catch (error) {
    console.error(error);
  }
};
export default generateJWT;
