'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'addresID');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'addresID', {
      type: Sequelize.INTEGER, // Ajuste o tipo conforme necessário
      allowNull: true, // Defina conforme necessário
    });
  }
};
