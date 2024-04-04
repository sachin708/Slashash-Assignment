const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('day1', 'root', 'mysql123', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports={
    sequelize
}