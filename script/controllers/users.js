const { where } = require("sequelize");
const { users } = require("../models");
const bycript = require("bcrypt");
const Getusers = async (req, res) => {
  console.log(1234);
  const todosusuarios = await users.findAll();

  res.json(todosusuarios);
};
const register = async (req, res) => {
  try {
    const { name, email, cpf, phone, address, password, cep } = req.body;
    console.log(name);
    const camada_cripotografia = 10;
    const password_has = bycript.hash(password, camada_cripotografia);
    const cadatro = users.create({
      name,
      email,
      cpf,
      phone,
      address,
      password_has,
      cep,
    });
    console.log(cadatro);
    res.json({ message: "cadastro realizado com sucesso" });
  } catch (err) {
    res.status(500).send("não foi possivel cadastrar o usuário " + err.message);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.findOne({ where: { email } });

    console.log(user);
  } catch (error) {}
};
const profile = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = {
  Getusers,
  register,
  profile,
};
