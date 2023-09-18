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
router.post("/", verifyToken, createTransaction);
router.patch("/:id", verifyToken, updateTransaction);
router.delete("/:id", verifyToken, deleteTransaction);

export default router;
