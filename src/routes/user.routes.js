import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUser);

export default router;
