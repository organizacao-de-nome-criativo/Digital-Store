const { renderFile } = require("jade");
const { Order, Product } = require("../models");
const order = require("../models/order");
const { production } = require("../config/config");
const { where, Model } = require("sequelize");

const createOrder = async (request, response) => {
  //   const items = request.body;
  //  passar o produto
  const { id } = request.params;
  const { ProdutoA } = request.body;

  const { dataValues } = await Order.create({ User_id: id });

  const produto = await Product.findOne({
    where: {
      id: ProdutoA,
    },
  });
  const pedido = await Order.findOne({
    where: {
      User_id: id,
    },
  });
  console.log(pedido);
  await pedido.addProduct(produto);
  const ALLPediddos = await pedido.getProducts();
  console.log(ALLPediddos);
  // const orderItems = items.map((item) => ({
  //   ...item,
  //   orderId: dataValues.User_id,
  // }));

  response.json(ALLPediddos);
  //   response.status(201).json({
  //     ...currentOrder.toJSON(),
  //     items: createOrderItems,
  //   });
};

const getOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
};

module.exports = {
  createOrder,
  getOrders,
};
