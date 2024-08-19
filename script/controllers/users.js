const { User } = require("../models");
require("dotenv").config();
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("sequelize");
const ControllersAddres = require("../controllers/address");

const Getusers = async (req, res) => {
  const todosusuarios = await User.findAll();

  res.json(todosusuarios);
};
const register = async (req, res) => {
  try {
    const { name, email, CPF, phone, password } = req.body;

    console.log(name);
    const camada_cripotografia = 10;
    console.log(password);
    const password_has = await bycript.hash(password, camada_cripotografia);
    console.log(password_has);

    const cadatro = await User.create({
      name,
      email,
      CPF,
      phone,

      password: password_has,
    });
    const { dataValues } = cadatro;
    await ControllersAddres(req, res, dataValues.id);

    res.json({ message: "cadastro realizado com sucesso" });
  } catch (err) {
    // res.json("não foi possivel carregar  o usuer");
    res
      .status(500)
      .json({ error: "não foi possivel carregar o usuário " + err.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

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
    console.log(dataValues);

    const token = jwt.sign({ dataValues }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status("200").json({ token });
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const auth = (req, res, next) => {
  const { Authorization } = req.headers;
  const token = Authorization && Authorization.split("")[1];
  if (token == null) {
    res.status(404).send("token não encontrado");
  }
  jwt.verify(token, process.env.SECRET_KEY, (error, payload) => {
    console.log(error);
    if (error) {
      res.send("token invalido");
    }
    console.log(payload);
    next();
  });
};
const profile = async (req, res) => {
  try {
    res.send(
      "bem vindo usuário autenticado, sinta-se avontade na sua nova casa"
    );
  } catch (err) {}
};

module.exports = {
  Getusers,
  register,
  profile,
  login,
  auth,
};
