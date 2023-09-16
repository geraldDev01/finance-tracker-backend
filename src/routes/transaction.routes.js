import { Router } from "express";
import {
  getAllTransactions,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "../controllers/transaction.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

router.get("/", verifyToken, getAllTransactions);
router.post("/add", verifyToken, createTransaction);
router.patch("/update", verifyToken, updateTransaction);
router.delete("/delete", verifyToken, deleteTransaction);

export default router;
