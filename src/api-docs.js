import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DOC Tracker API",
      version: "1.0.0",
      description: "Documentation for API",
    },
  },
  basePath: "/",
  apis: ["src/routes/*.routes.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec };
