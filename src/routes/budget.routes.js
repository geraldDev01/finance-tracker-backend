import { Router } from "express";
import { getAllBudgets, createBudget } from "../controllers/budget.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

/**
 * @swagger
 * /budgets:
 *   post:
 *     description: Create a new budget
 *     tags:
 *       - Budget
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: integer
 *                 description: The ID of the category associated with the budget.
 *               active:
 *                 type: boolean
 *                 description: Indicates if the budget is active or not.
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The start date of the budget.
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The end date of the budget.
 *               budgetAmount:
 *                 type: number
 *                 format: decimal
 *                 description: The budget amount with two decimal places.
 *             required:
 *               - category
 *               - active
 *               - startDate
 *               - endDate
 *               - budgetAmount
 *     responses:
 *       201:
 *         description: Successfully created a budget
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the created budget.
 *                 category:
 *                   type: integer
 *                   description: The ID of the category associated with the budget.
 *                 active:
 *                   type: boolean
 *                   description: Indicates if the budget is active or not.
 *                 startDate:
 *                   type: string
 *                   format: date
 *                   description: The start date of the budget.
 *                 endDate:
 *                   type: string
 *                   format: date
 *                   description: The end date of the budget.
 *                 budgetAmount:
 *                   type: number
 *                   format: decimal
 *                   description: The budget amount with two decimal places.
 *       500:
 *         description: Internal Server Error
 */
 router.post("/", verifyToken, createBudget);
 
 /**
 * @swagger
 * /budgets/{page}/{limit}:
 *   get:
 *     description: Get a list of budgets with pagination
 *     tags:
 *       - Budget
 *     parameters:
 *       - in: path
 *         name: page
 *         required: false
 *         description: Page number (default: 1)
 *         schema:
 *           type: integer
 *       - in: path
 *         name: limit
 *         required: false
 *         description: Number of items per page (default: 10)
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved budgets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID of the budget.
 *                   category:
 *                     type: integer
 *                     description: The ID of the category associated with the budget.
 *                   active:
 *                     type: boolean
 *                     description: Indicates if the budget is active or not.
 *                   startDate:
 *                     type: string
 *                     format: date
 *                     description: The start date of the budget.
 *                   endDate:
 *                     type: string
 *                     format: date
 *                     description: The end date of the budget.
 *                   budgetAmount:
 *                     type: number
 *                     format: decimal
 *                     description: The budget amount with two decimal places.
 *       500:
 *         description: Internal Server Error
 */
router.get("/", verifyToken, getAllBudgets);

export default router;
