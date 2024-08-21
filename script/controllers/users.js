require("dotenv").config();
const { User } = require("../models");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysecretpassword = "mysecretpassword";

const ControllersAddres = require("../controllers/address");
const { Error } = require("sequelize");

console.log("ola");
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
    console.log("ola mundo");

    if (!passwordMatch) {
      console.log(12346);
      throw new Error("senhas não compatíveis");
    }

    console.log(dataValues);
    const token = jwt.sign(dataValues, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    // console.log(token);
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

    const token = authorization && authorization.split(" ")[1];

    if (token == null) {
      throw new Error("se cadastre primeiro ou acesse no modo anonimo");
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err) {
        if (err.name === jwt.TokenExpiredError) {
          res.redirect("futura rota de restauração de token");
        }
        throw new Error("não foi possivel validar o token");
      }
      req.user = payload;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }

  // abordagem com o cookie sendo enviado pelo navegador
  // const token = req.cookie.authorization;
  // console.log(token);
  // if (!token) {
  //   res.json("cookie não encontrado tente novamente");
  // }

  next();
};
const profile = async (req, res) => {
  const user = req.user;
  res.json(user);
};

module.exports = {
  Getusers,
  register,
  profile,
  login,
  auth,
};
