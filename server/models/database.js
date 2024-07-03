const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(() => {
    console.error("Unable to connect to the database");
  });

module.exports = db;
