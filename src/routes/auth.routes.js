import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { checkDuplicateUser } from "../middlewares/auth";

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with a unique email address.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: The full name of the user.
 *               email:
 *                 type: string
 *                 description: The email address of the user (must be unique).
 *               password:
 *                 type: string
 *                 description: The user's password.
 *             example:
 *               fullName: John Doe
 *               email: john@example.com
 *               password: securePassword123
 *     responses:
 *       201:
 *         description: User registration successful. Returns a token and user data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for the newly registered user.
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique identifier of the user.
 *                     fullName:
 *                       type: string
 *                       description: The full name of the user.
 *                     email:
 *                       type: string
 *                       description: The email address of the user.
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: The date and time when the user was created.
 *                 description: User registration successful response example.
 *                 example:
 *                   token: your-jwt-token
 *                   user:
 *                     _id: user-id
 *                     fullName: John Doe
 *                     email: john@example.com
 *                     createdAt: 2023-09-17T12:00:00Z
 *       400:
 *         description: Bad request. Registration failed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message describing the registration failure.
 *                 description: Registration error response example.
 *                 example:
 *                   message: Registration failed. Email already in use.
 */
router.post("/register", checkDuplicateUser, register);

/**
 * @swagger
 * /login:
 *   post:
 *     description: User login
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     fullName:
 *                       type: string
 *       401:
 *         description: Unauthorized - Invalid credentials
 */
router.post("/login", login);

export default router;
