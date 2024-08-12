const Sequelize = require("sequelize");
const db = require("./connection");
const produto = db.define("produtos", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
});
module.exports = produto;
