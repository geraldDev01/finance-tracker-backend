import { Router } from "express";
import { getAllBudgets, createBudget } from "../controllers/budget.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", verifyToken, getAllBudgets);

export default router;
