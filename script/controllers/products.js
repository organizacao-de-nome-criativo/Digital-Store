const { Products } = require('../models')


const getAllProducts = async (request, response) => {
    const allProducts = await Products.findAll()
    response.json(allProducts)
}

const getOneProduct = async (request, response) => {
    const oneProduct = parseInt(request.params.id)
    const findProduct = await Products.findByPk(oneProduct)
    response.json(findProduct)
}

const createProducts = async (request, response) => {
  const {
    name,
    imageUrl,
    price,
    description,
    category,
    color,
    size,
    discount,
  } = await request.body;

    const createOne = await products.create({
        name, 
        imageUrl, 
        price, 
        description, 
        category, 
        color, 
        size, 
        discount
    })
    response.send(createOne)
}   
module.exports = {
    getAllProducts,
    getOneProduct,
    createProducts,
}