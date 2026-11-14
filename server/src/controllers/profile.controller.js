export const profile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      name: user.name,
      email: user.email,
      location: user.location,
    });
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
