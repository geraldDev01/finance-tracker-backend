import request from "supertest";
import app from "../src/app";

describe("Authentication Routes", () => {
  const userData = {
    fullName: "dummy test",
    email: "test@test.com",
    password: "123ss45",
  };

  describe("POST /api/auth/register", () => {
    describe("Successful User Registration", () => {
      test("should respond with a 201 status code when registering a new user", async () => {
        // Make HTTP request.
        const response = await request(app)
          .post("/api/auth/register")
          .send(userData);

        expect(response.statusCode).toBe(201);

        // Verify if the response contains token and user data
        expect(response.body).toHaveProperty("token");
        expect(response.body).toHaveProperty("user");
      });
    });

    describe("User Registration Validation", () => {
      test("should prevent registering a user with the empty data.", async () => {
        const emptyUser = {
          fullName: "",
          email: "",
          password: "",
        };
        // Make HTTP request.
        const response = await request(app)
          .post("/api/auth/register")
          .send(emptyUser);

        // Check that the HTTP request returns a 400 (Bad Request) status
        expect(response.status).toBe(400);
      });

      test("should prevent registering a user with bad email.", async () => {
        const badUser = {
          fullName: "tester",
          email: "no-email",
          password: "12345",
        };
        // Make HTTP request.
        const response = await request(app)
          .post("/api/auth/register")
          .send(badUser);

        // Check that the HTTP request returns a 400 (Bad Request) status
        expect(response.status).toBe(400);
      });

      test("should prevent registering a user with the same email", async () => {
        // Make HTTP request.
        const response = await request(app)
          .post("/api/auth/register")
          .send(userData);

        // Check that the HTTP request returns a 400 (Bad Request) status
        expect(response.status).toBe(400);
      });
    });
  });

  describe("POST /api/auth/login", () => {
    describe("Successful Authentication", () => {
      test("should respond with a 401 status code when user not valid", async () => {
        const invalidUser = {
          email: "notexist@test.com",
          password: "1234",
        };
        // Make HTTP request.
        const response = await request(app)
          .post("/api/auth/login")
          .send(invalidUser);

        expect(response.statusCode).toBe(401);
      });

      test("should return session token and 200 status code when user is valid", async () => {
        const validUser = {
          email: userData.email,
          password: userData.password,
        };
        // Make HTTP request.
        const response = await request(app)
          .post("/api/auth/login")
          .send(validUser);

        expect(response.statusCode).toBe(200);
        expect(response.body.token).not.toBeNull();
      });
    });
  });
});
