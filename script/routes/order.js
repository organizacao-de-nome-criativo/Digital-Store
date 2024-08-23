var express = require("express");
const router = express.Router();
const controllers = require("../controllers/order.js");
const { json } = require("sequelize");

router.get("/create", controllers.createOrder, controllers.getOrders);
router.get("/replace", controllers.replaceAmount);

module.exports = router;
