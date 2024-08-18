"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: "User_id",
        as: "ClientOrder",
      });
      Order.belongsToMany(models.Products, {
        through: "OrderProductItem",
        foreignKey: "orderId",
        as: "CLientOrdErs",
      });
    }
  }
  Order.init(
    {
      User_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
