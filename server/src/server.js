import app from "./app.js";
import { connectDB } from "./config/db.js";
import env from "./config/env.js";

const startServer = async (req, res) => {
  try {
    await connectDB();
    app.listen(env.PORT, () =>
      console.log("Server is running on PORT: " + env.PORT),
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

startServer();
