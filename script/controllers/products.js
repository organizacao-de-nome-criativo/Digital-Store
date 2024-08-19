
const { Product } = require('../models')


const getAllProducts = async (request, response) => {
    const allProducts = await Product.findAll()
    response.json(allProducts)
}

const getOneProduct = async (request, response) => {
  const oneProduct = parseInt(request.params.id);
  console.log(oneProduct)
  const findProduct = await Product.findByPk(oneProduct);
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

    const createOne = await Product.create({
        name, 
        imageUrl, 
        price, 
        description, 
        category, 
        color, 
        size, 
        discount
    })
    response.json(createOne)
}   

const deleteProduct = async (request, response) => {
    const deleteItem = parseInt(request.params.id)
    const dropItem = await Product.destroy({
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
