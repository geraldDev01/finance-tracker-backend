import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "../package.json";
// import userRoutes from "./routes/user.routes";

const app = express();
dotenv.config();

//Settings
const port = process.env.APP_PORT;
app.set("port", port);
app.set("pkg", pkg);

const packageInfo = {
  name: app.get("pkg").name,
  author: app.get("pkg").author,
  description: app.get("pkg").description,
  version: app.get("pkg").version,
};

app.get("/", (req, res) => {
  res.json(packageInfo);
});

//body parser
app.use(express.json());

//middleware
app.use(morgan("dev"));
app.use(cors());

//routes
// app.use("/api/users", userRoutes);

export default app;
