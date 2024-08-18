"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Products.hasMany(models.orderproductitem)
      Products.hasOne(models.OrderProductItem);
      Products.belongsTo(models.Lojas, {
        foreignKey: "lojaId",
        onDelete: "CASCADE",
      });
    }
  }
  Products.init(
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
      discount: DataTypes.FLOAT,
      lojadId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
