const { User } = require("../models");
require("dotenv").config();
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("sequelize");

const Getusers = async (req, res) => {
  console.log(1234);
  console.log;
  const todosusuarios = await User.findAll();

  res.json(todosusuarios);
};
const register = async (req, res) => {
  try {
    const { name, email, CPF, phone, password } = req.body;
    console.log(name);
    const camada_cripotografia = 10;
    const password_has = await bycript.hash(password, camada_cripotografia);
    console.log(password_has);

    const cadatro = await User.create({
      name,
      email,
      CPF,
      phone,

      password: password_has,
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
    console.log(email);
    const usuario = await User.findOne({ where: { email } });
    if (!usuario) {
      throw new Error("não foi possivel encontrar o usuário");
    }
    const { dataValues } = usuario;
    console.log(dataValues);
    console.log(dataValues.password);
    const passwordMatch = await bycript.compare(password, dataValues.password);
    console.log(passwordMatch);

    if (!passwordMatch) {
      throw new Error("senhas não compatíveis");
    }

    const token = jwt.sign({ dataValues }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    console.log(token);
    res.status("200").json("token gerado com sucesso");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const profile = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = {
  Getusers,
  register,
  profile,
  login,
};
