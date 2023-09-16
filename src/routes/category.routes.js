import { Router } from "express";
import * as categoryController from "../controllers/category.controller";
// import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", categoryController.getCategories);

export default router;
