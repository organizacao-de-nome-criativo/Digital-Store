"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "levi",
        cpf: "1223419129934",
        email: "levi@gmail",
        address: "fortaleza",
        phone: "203401234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "lucas",
        cpf: "1223419129934",
        email: "lucas@gmail",
        address: "fortaleza",
        phone: "203401234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
