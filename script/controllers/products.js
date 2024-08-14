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

// const createProducts = async (request, response) => {

// }
module.exports = {
    getAllProducts,
    getOneProduct,
}