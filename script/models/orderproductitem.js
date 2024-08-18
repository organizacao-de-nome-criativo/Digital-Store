"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProductItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // OrderProductItem.belongsTo(models.Products, {foreignKey: 'productId'})
      // OrderProductItem.belongsTo(models.Order, {foreignKey: 'orderId'})
    }
  }
  OrderProductItem.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderProductItem",
    }
  );
  return OrderProductItem;
};
