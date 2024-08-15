"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "levi",
        cpf: "1010",
        email: "levi@gmail",

        phone: "203401234",
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "234567",
      },
      {
        name: "lucas",
        cpf: "12234191299346",
        email: "lucas@gmail",

        phone: "2034012342",
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "12345678",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");
  },
};
