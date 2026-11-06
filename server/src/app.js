import express from "express";
import router from "./routes/organizationAuth.route.js";

const app = express();

app.use(express.json());
app.use("/api/orgAuth", router);

export default app;
