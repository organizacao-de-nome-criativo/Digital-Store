'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Orders', 'amount', {
      type: Sequelize.INTEGER,
      allowNull: true 
    }
  )},
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Orders', 'amount');
  }
}