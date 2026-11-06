import {
  signinService,
  signupService,
} from "../services/organizationAuth.service.js";

export const signup = async (req, res) => {
  try {
    const user = await signupService(req.body);
    console.log(user);
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
};

export const signin = async (req, res) => {
  try {
    const user = await signinService(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
