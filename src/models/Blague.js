const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Blague = sequelize.define("Blague", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  reponse: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "blagues"
});

module.exports = Blague;
