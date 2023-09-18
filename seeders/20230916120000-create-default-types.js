"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const defaultTypes = [
      {
        name: "Income",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Expense",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Types", defaultTypes, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Types", null, {});
  },
};
