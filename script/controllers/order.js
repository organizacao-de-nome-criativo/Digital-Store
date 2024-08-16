const { Order } = require('../models')

const createOrder = async (request, response) => {
    const { items } = request.body
    const { idInsert } = await Order.create(1)
    console.log(idInsert)
    await Order.addItems(idInsert, items)
    response.status(201).json(idInsert)
} 

module.exports = {
    createOrder,
}