import { Router } from "express";
import { getCategories } from "../controllers/category.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();


router.get("/", verifyToken, getCategories);

export default router;
