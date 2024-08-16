var express = require('express')
const router = express.Router()
const controllers = require('../controllers/order.js')
const { json } = require("sequelize")



router.post("/", controllers.createOrder)

module.exports = router