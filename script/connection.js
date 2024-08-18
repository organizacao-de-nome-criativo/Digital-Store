require("dotenv").config(); // Carrega variáveis de ambiente do arquivo .env
const Sequelize = require("sequelize");
const config = require("./config/config.js");

const env = process.env.NODE_ENV;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

    process.exit(0); // Sair do processo após a verificação da conexão
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1); // Sair do processo com erro
  });

module.exports = sequelize;
