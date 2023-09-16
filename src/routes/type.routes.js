import { Router } from "express";
import { getTypes } from "../controllers/type.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", verifyToken, getTypes);

export default router;
