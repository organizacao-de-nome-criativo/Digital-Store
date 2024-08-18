"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`UPDATE Users SET CPF = NULL`);
  },

  async down(queryInterface, Sequelize) {},
};
