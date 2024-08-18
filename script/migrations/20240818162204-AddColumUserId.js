"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DELETE FROM  Users
      `);
  },

  async down(queryInterface, Sequelize) {},
};
