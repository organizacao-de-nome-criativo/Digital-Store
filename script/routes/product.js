var express = require("express");
var router = express.Router();
const controllers = require("../controllers/products");
const { json } = require("sequelize");

/* GET users listing. */
router.get("/", controllers.getAllProducts);
router.get("/:id", controllers.getOneProduct);
router.post("/", controllers.createProduct);
router.delete("/:id", controllers.deleteProduct)

module.exports = router;
