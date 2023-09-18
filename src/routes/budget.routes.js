import { Router } from "express";
import { getAllBudgets, createBudget } from "../controllers/budget.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", verifyToken, getAllBudgets);
router.post("/", verifyToken, createBudget);

export default router;
