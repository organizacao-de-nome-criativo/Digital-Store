const { where } = require('sequelize')
const { Products } = require('../models')


const getAllProducts = async (request, response) => {
    const allProducts = await Products.findAll()
    console.log(allProducts)
    response.json(allProducts)
}

const getOneProduct = async (request, response) => {
  const oneProduct = parseInt(request.params.id);
  const findProduct = await Products.findByPk(oneProduct);
  response.json(findProduct);
};

const createProduct = async (request, response) => {
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

    const createOne = await Products.create({
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

const deleteProduct = async (request, response) => {
    const deleteItem = parseInt(request.params.id)
    const dropItem = await Products.destroy({
        where: {id : deleteItem}
})
    response.json({message:"item deletado com sucesso"})
}


module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    deleteProduct,
}
