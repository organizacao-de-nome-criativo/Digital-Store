const { users } = require("../models");
const Getusers = async (req, res) => {
  console.log(1234);
  const todosusuarios = await users.findAll();

  res.json(todosusuarios);
};
const register = async (req, res) => {
  try {
    const { name, email, cpf, phone, address, password, cep } = req.body;
    console.log(name);
    const cadatro = users.create({
      name,
      email,
      cpf,
      phone,
      address,
      password,
      cep,
    });
    res.json({ message: "cadastro realizado com sucesso" });
  } catch (err) {
    res.status(500).send("não foi possivel cadastrar o usuário " + err.message);
  }
};
const login = async (req, res) => {
  try {
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
