const { Order, OrderProductItem } = require('../models')

const createOrder = async (request, response) => {
    
    const items = request.body
    console.log(items)
    const currentOrder = await Order.create(2)
    const orderItems = items.map((item) => ({
        ...item,
        orderId: currentOrder.id
    }))
    const createOrderItems = await OrderProductItem.bulkCreate(orderItems)
    response.status(201).json({
        ...currentOrder.toJSON(),
        items : createOrderItems
    })
}

    const getOrders = async(req,res) => {
        const orders = await Order.findAll()
        res.json(orders)
    }

module.exports = {
    createOrder,
    getOrders,
}


