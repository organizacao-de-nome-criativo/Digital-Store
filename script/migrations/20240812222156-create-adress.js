'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      adress: {
        type: Sequelize.STRING
      },
      CEP: {
        type: Sequelize.FLOAT
      },
      bairro: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      housenumber: {
        type: Sequelize.STRING
      },
      complement: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Adresses');
  }
};