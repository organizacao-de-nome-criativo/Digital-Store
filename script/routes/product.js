var express = require("express");
var router = express.Router();
const controllers = require("../controllers/products");
const { json } = require("sequelize");



/* GET users listing. */
router.get('/products', controllers.getAllProducts)
router.get('/products/:id', controllers.getOneProduct)
router.post('/products', controllers.createProducts)


module.exports = router;
