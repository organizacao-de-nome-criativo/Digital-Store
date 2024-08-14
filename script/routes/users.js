var express = require("express");
var router = express.Router();
const controllers = require("../controllers/users");
const { ConnectionTimedOutError } = require("sequelize");

/* GET users listing. */

router.get("/", controllers.Getusers);
router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.get(
  "/register/profile",
  (req, res, next) => {
    next();
  },
  controllers.profile
);

module.exports = router;
