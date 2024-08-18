"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`UPDATE Users SET
       CPF = NULL,
       email = NULL,
       name = NULL,
       password = NULL,
       phone = NULL`);
  },

  async down(queryInterface, Sequelize) {},
};
