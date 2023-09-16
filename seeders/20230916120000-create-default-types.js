"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const defaultTypes = [
      {
        typeName: "Income",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeName: "Expense",
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
