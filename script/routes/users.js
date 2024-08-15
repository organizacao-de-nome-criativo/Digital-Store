var express = require("express");
var router = express.Router();
const controllers = require("../controllers/users");

/* GET users listing. */

router.get("/", controllers.Getusers);
router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.get("/register/profile", controllers.auth, controllers.profile);

module.exports = router;
