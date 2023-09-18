import { Router } from "express";
import { getTypes } from "../controllers/type.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Types
 *     description: Operations related to transaction types
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Type:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier for a transaction type.
 *         name:
 *           type: string
 *           description: The name of the transaction type (e.g., "Income" or "Expense").
 */

/**
 * @swagger
 * /types:
 *   get:
 *     summary: Get All Transaction Types
 *     description: Retrieve a list of all available transaction types.
 *     tags:
 *       - Types
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Type'
 *       '500':
 *         description: Internal Server Error
 */
router.get("/", verifyToken, getTypes);

export default router;
