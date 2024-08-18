var express = require("express");
const router = express.Router();
const controllers = require("../controllers/order.js");
const { json } = require("sequelize");

router.get("/:id", controllers.getOrders);
router.post("/:id", controllers.createOrder);

module.exports = router;
