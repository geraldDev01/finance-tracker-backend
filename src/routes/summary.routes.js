import { Router } from "express";
import { getSummary } from "../controllers/summary.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", getSummary);

export default router;
