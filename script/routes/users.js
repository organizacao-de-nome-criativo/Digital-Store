var express = require("express");
const { User, Address } = require("../models");

const FunctionAddress = require("../controllers/address");
var router = express.Router();
const controllers = require("../controllers/users");
const controllersAddres = require("../controllers/address");
const address = require("../models/address");

/* GET users listing. */

router.get("/", controllers.Getusers);
router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.get("/profile", controllers.auth, (req, res) => {
 res.json('ola lucas')
});
router.get("/:id/address", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: { id },
    include: {
      model: Address,
      as: "addresses",
    },
  });
  if (!user) {
    res.send("usuário não encontrado");
  }
  res.json(user);
});
router.post("/CriarAddres/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = await User.findOne({
    where: { id },
  });
  if (!user) {
    res.json("usuário nõa encontrado");
  }
  await FunctionAddress(req, res, id);
  res.json("deu tudo certo , a inserção no mesmo usuário");
});

module.exports = router;
