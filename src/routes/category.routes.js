import { Router } from "express";
import { getCategories } from "../controllers/category.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", getCategories);

export default router;
