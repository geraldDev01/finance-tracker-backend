import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth";
const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - User
 *     summary: Retrieve Users
 *     description: Retrieve a list of users.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized
 *     security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Retrieve a User by ID
 *     description: Retrieve a user by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 *       '401':
 *         description: Unauthorized
 *     security:
 *       - bearerAuth: []
 */

router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUser);

export default router;
