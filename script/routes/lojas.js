const express = require("express");
const { Lojas } = require("../models");
const rota = express.Router();
rota.get("/lojas", async (req, res) => {
  const GetAllStores = await Lojas.findAll();
  res.json(GetAllStores);
});
module.exports = rota;
