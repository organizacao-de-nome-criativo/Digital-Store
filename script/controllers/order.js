const { Order, Product, OrderProductItem } = require("../models");
const order = require("../models/order");
const { production } = require("../config/config");
const { where, Model } = require("sequelize");

const createOrder = async (request, response) => {
  try {
    const { UserID, produtoa } = request.query;

    // await Order.create({ User_id: id });

    const isOldOrder = await Order.findOne({
      where: {
        User_id: UserID,
      },
    });
    console.log(isOldOrder);

    if (isOldOrder) {
      const { dataValues } = isOldOrder;
      console.log(dataValues);

      const carrinho = await OrderProductItem.findOne({
        where: {
          orderId: dataValues.id,
          productId: produtoa,
        },
      });
      if (carrinho) {
        // update no carriunho, atualizando o seu valor
        let { amount } = carrinho;
        console.log("ola mundo");
        const ValorNovo = amount + 1;
        await OrderProductItem.update(
          { amount: ValorNovo },
          { where: { productId: produtoa, orderId: dataValues.id } }
        );
        const carinhoAtualizado = await OrderProductItem.findOne({
          where: {
            orderId: dataValues.id,
            productId: produtoa,
          },
        });

        const allProducts = await isOldOrder.getProducts();
        response.json(allProducts);
        return;
      }
      console.log("estou chegando aqui");
      await OrderProductItem.create({
        orderId: isOldOrder.id,
        productId: produtoa,
        amount: 1,
        status: true,
      });

      await isOldOrder.addProduct(produtoa);

      const allProducts = await isOldOrder.getProducts();
      response.json(allProducts);
      return;
    }
    console.log("ola estou chegando aqui tbm");
    await Order.create({ User_id: UserID });
    const newOrder = await Order.findOne({
      where: { User_id: UserID },
    });
    console.log(newOrder);
    await OrderProductItem.create({
      orderId: newOrder.id,
      productId: produtoa,
      amount: 1,
      status: true,
    });
    await newOrder.addProduct(produtoa);
    const allpedidos = await newOrder.getProducts();
    response.json(allpedidos);
    return;
    // request.user = newOrder;
  } catch (error) {
    response.status(500).json(error);
  }
  //   const items = request.body;
  //  passar o produto
  // const { UserID, ProductId } = request.query;
};

const getOrders = async (req, res) => {
  const orders = req.user;
  const allProducts = await orders.getProducts();
  res.json(allProducts);
};
const replaceAmount = async (req, res) => {
  const { NewCount, ProductId, UserId } = req.query;
  console.log(`meu valores ${NewCount} ${ProductId}`);

  console.log(UserId);
  const pedidoUser = await Order.findOne({
    where: {
      User_id: UserId,
    },
  });
  console.log(pedidoUser);
  if (!pedidoUser) {
    return res.json("não foi possivel fazer nada");
  }
  await OrderProductItem.update(
    { amount: NewCount },
    { where: { productId: ProductId, orderId: pedidoUser.id } }
  );
  res.json("item adicionado ou removido com sucesso");
};
module.exports = {
  createOrder,
  getOrders,
  replaceAmount,
};
