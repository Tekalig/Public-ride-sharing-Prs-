const { Sequelize } = require("sequelize");

require("dotenv").config();

// Option 1: Passing parameters separately

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT, // Choose 'mysql' | 'mariadb' | 'postgres' | 'mssql'
    port: process.env.DB_PORT,
    logging: false,
  }
);

module.exports = sequelize;
