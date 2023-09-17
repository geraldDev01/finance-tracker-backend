import request from "supertest";
import app from "../src/app";

// Save session token
let authToken;

beforeAll(async () => {
  // create user for test.
  const newUser = {
    fullName: "tester transaction",
    email: "tester@transaction.com",
    password: "password123",
  };

  const response = await request(app).post("/api/auth/register").send(newUser);
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty("token");

  authToken = response.body.token;
});

describe("Transaction Routes", () => {
  describe("GET /api/transactions", () => {
    test("should retrieve 200 status code and all transactions when authenticated", async () => {
      const response = await request(app)
        .get("/api/transactions")
        .set("x-access-token", authToken);

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe("POST /api/transactions", () => {
    const newTransaction = {
      type: 1,
      category: 1,
      description: "payment",
      amount: 200,
    };

    test("should retrieve 403 status code without authentication", async () => {
      const response = await request(app)
        .post("/api/transactions")
        .send(newTransaction);

      expect(response.statusCode).toBe(403);
    });

    test("should retrieve 201 status code and create a new transaction when authenticated", async () => {
      const response = await request(app)
        .post("/api/transactions")
        .set("x-access-token", authToken)
        .send(newTransaction);
 
      expect(response.statusCode).toBe(201);
    });
  });

  describe("PATCH /api/transactions/:id", () => {
    test("should retrieve 200 status code and update a transaction when authenticated", async () => {
      const transactionId = 1;
      const updatedTransaction = {
        type: 1,
        category: 1,
        description: "payment 2",
        amount: 800,
      };

      const response = await request(app)
        .patch(`/api/transactions/${transactionId}`)
        .set("x-access-token", authToken)
        .send(updatedTransaction);

      
      expect(response.statusCode).toBe(200);
    });
  });

  describe("DELETE /api/transactions/:id", () => {
    test("should retrieve 200 status code and delete a transaction when authenticated", async () => {
      const transactionId = 1; 

      const response = await request(app)
        .delete(`/api/transactions/${transactionId}`)
        .set("x-access-token", authToken);

      expect(response.statusCode).toBe(204);
    });
  });
});
