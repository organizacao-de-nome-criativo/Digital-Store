"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Lojas", [
      {
        name: "puma",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nike",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "adiddas",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lojas");
  },
};
