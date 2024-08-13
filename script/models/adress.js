'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Adress.init({
    adress: DataTypes.STRING,
    CEP: DataTypes.FLOAT,
    bairro: DataTypes.STRING,
    city: DataTypes.STRING,
    houseNumber: DataTypes.STRING,
    complement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adress',
  });
  return Adress;
};