const { Products } = require('../models')


const getAllProducts = async (request, response) => {
    const allProducts = await Products.findAll()
    response,json(allProducts)
}

const getOneProduct = async (request, response) => {
    const oneProduct = parseInt(request.params.id)
    const findProduct = await Products.findByPk(oneProduct)
    response.json(findProduct)
}

module.exports = {
    getAllProducts,
    getOneProduct,
}