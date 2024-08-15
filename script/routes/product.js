var express = require("express");
var router = express.Router();
const controllers = require("../controllers/products");
const { json } = require("sequelize");

/* GET users listing. */
router.get("/", controllers.getAllProducts);
router.get("/products/:id", controllers.getOneProduct);
router.post("/", controllers.createProducts);

module.exports = router;
