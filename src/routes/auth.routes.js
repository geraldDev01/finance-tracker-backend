import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { checkDuplicateUser } from "../middlewares/auth";

const router = Router();

router.post("/register", checkDuplicateUser, register);
router.post("/login", login);

export default router;
