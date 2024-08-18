const { Order, OrderProductItem } = require("../models");

const createOrder = async (request, response) => {
  const items = request.body;
  //  passar o produto
  const { id } = req.params;
  console.log(items);
  const currentOrder = await Order.create({ User_id: id });
  const { dataValues } = currentOrder;
  const orderItems = items.map((item) => ({
    ...item,
    orderId: dataValues.User_id,
  }));
  const createOrderItems = await OrderProductItem.bulkCreate(orderItems);
  response.status(201).json({
    ...currentOrder.toJSON(),
    items: createOrderItems,
  });
};

const getOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
};

module.exports = {
  createOrder,
  getOrders,
};
