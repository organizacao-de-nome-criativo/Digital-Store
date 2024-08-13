'use strict';
const {
  Model
} = require('sequelize');
const products = require('./products');
module.exports = (sequelize, DataTypes) => {
  class OrderProductItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderProductItem.hasMany(products)
    }
  }
  OrderProductItem.init({
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderProductItem',
  });
  return OrderProductItem;
};