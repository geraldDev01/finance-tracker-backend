import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", verifyToken, userController.getUsers);

export default router;
