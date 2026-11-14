import Organization from "../models/Organization.js";
import generateJWT from "../utils/generateJWT.js";
import { hashData } from "../utils/hashData.js";
import verifyHashedData from "../utils/verifyHashedData.js";

export const signupService = async (data) => {
  let { name, phone, email, location, password } = data;
  if (!name || !phone || !email || !location || !password) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    throw error;
  }
  name = name.trim();
  phone = phone.trim();
  email = email.trim().toLowerCase();
  location = location.trim();
  password = password.trim();
  // console.log(email);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    const error = new Error("Invalid email address");
    error.statusCode = 400;
    throw error;
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=])[A-Za-z\d@$!%*?&#^()_+\-=]{8,}$/;
  if (!passwordRegex.test(password)) {
    const error = new Error("Password does not meet requiremnt");
    error.statusCode = 400;
    throw error;
  }
  const organizationExist = await Organization.findOne({
    $or: [{ email }, { phone }],
  });

  if (organizationExist) {
    const error = new Error("Organization already exists, please login");

    error.statusCode = 409;
    throw error;
  }
  const hashedPassword = await hashData(password);
  const organization = await Organization.create({
    name,
    phone,
    email,
    location,
    password: hashedPassword,
  });
  return organization;
};

export const signinService = async (data) => {
  let { email, password } = data;
  if (!email || !password) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    throw error;
  }
  email = email.trim().toLowerCase();
  password = password.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    const error = new Error("Invalid email or password");
    error.statusCode = 400;
    throw error;
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=])[A-Za-z\d@$!%*?&#^()_+\-=]{8,}$/;
  if (!passwordRegex.test(password)) {
    const error = new Error("Invalid email or password");
    error.statusCode = 400;
    throw error;
  }
  const user = await Organization.findOne({ email }).select("+password");
  console.log(user);
  const userId = user._id;
  console.log(user._id);
  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 404;
    throw error;
  }
  const verifyPassword = await verifyHashedData(user.password, password);
  if (!verifyPassword) {
    const error = new Error("Invalid email or password");
    error.statusCode = 400;
    throw error;
  }
  const { accessToken, refreshToken } = await generateJWT(user._id);
  return { accessToken, refreshToken, userId };
};
