var express = require("express");
var router = express.Router();
const controllers = require("../controllers/users");
console.log("ola");
const bycript = require("bcrypt");
const { json } = require("sequelize");
/* GET users listing. */


router.get("/", controllers.Getusers);
router.post("/register", controllers.register);
router.get("/register/profile");

module.exports = router;
