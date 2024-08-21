const { User } = require("../models");
require("dotenv").config();
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const { json } = require("sequelize");
const ControllersAddres = require("../controllers/address");
const chavescrreta = 12345;
console.log(process.env.SECRET_KEY);

const Getusers = async (req, res) => {
  const todosusuarios = await User.findAll();

  res.json(todosusuarios);
};
const register = async (req, res) => {
  try {
    const { name, email, CPF, phone, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });
    console.log(user);
    if (user) {
      throw new Error("email ja cadastrado");
    }

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
      .json({ error: "não foi possivel cadastrar o usuário " + err.message });
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

    const token = jwt.sign(
      { id: dataValues.id, username: dataValues.name },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
        algorithm: "HS256",
      }
    );
    // res.cookie("authorization", token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "lax",
    //   maxAge: "3600000",
    // });
    res.status("200").json({ token });
  } catch (error) {
    res.status(404).json(error.message);
  }
};


const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    console.log(12245);
    const token = authorization && authorization.split("")[1];
    console.log(token);
    if (token == null) {
      throw new Error("se cadastre primeiro ou acesse no modo anonimo");
    }
    jwt.verify(token, process.env.SECRET_KEY, (error, payload) => {
      console.log(error);
      if (error) {
        throw new Error("token invalido");
      }
      console.log(payload);
      next();
    });
  } catch (error) {
    res.status(500).json(error.message);
  }

  // abordagem com o cookie sendo enviado pelo navegador
  // const token = req.cookie.authorization;
  // console.log(token);
  // if (!token) {
  //   res.json("cookie não encontrado tente novamente");
  // }

  // next();
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
