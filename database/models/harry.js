'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Harry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Harry.init({
    name: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cas: DataTypes.STRING,
    materia: DataTypes.STRING,
    patronus: DataTypes.STRING,
    edad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Harry',
  });
  return Harry;
};