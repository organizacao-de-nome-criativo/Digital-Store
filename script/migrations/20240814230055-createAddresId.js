"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "AddressId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Addresses", // Nome da tabela referenciada
        key: "id", // Nome da coluna na tabela referenciada
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", // Define o comportamento ao deletar o registro referenciado
      allowNull: true,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "AddressId");
  },
};
