import Organization from "../models/Organization.js";
import { hashData } from "../utils/hashData.js";

export const signupService = async (data) => {
  let { name, email, password, location } = data;
  if (!name || !email || !location || !password) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    throw error;
  }
  name = name.trim();
  email = email.trim().toLowerCase();
  location = location.trim();
  password = password.trim();
  console.log(email);
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
  const organizationExist = await Organization.findOne({ email });
  if (organizationExist) {
    const error = new Error("Organization already exist, please login");
    error.statusCode = 409;
    throw error;
  }
  const hashedPassword = await hashData(password);
  const organization = await Organization.create({
    name,
    email,
    location,
    password,
  });
  return organization;
};
