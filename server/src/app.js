import express from "express";
import router from "./routes/organizationAuth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from "./config/env.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use("/api/auth", router);

export default app;
