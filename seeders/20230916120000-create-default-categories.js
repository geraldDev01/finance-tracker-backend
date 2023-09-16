"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const defaultCategories = [
      {
        name: "Education",
        description: "Education related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Food",
        description: "Food related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gas",
        description: "Gas related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Car",
        description: "Card related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "General",
        description: "General related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shopping",
        description: "Shopping related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vacations",
        description: "Vacations related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Clothes",
        description: "Clothes related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Health",
        description: "Health related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Health",
        description: "Health related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Entertainment",
        description: "Entertainment related items",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Savings",
        description: "Savings",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Salary",
        description: "Salary",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Deposit",
        description: "Deposit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Categories", defaultCategories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
