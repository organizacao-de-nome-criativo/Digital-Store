const { users } = require("../models");
const Getusers = async (req, res) => {
  console.log(1234);
  const todosusuarios = await users.findAll();

  res.json(todosusuarios);
};
const register = async (req, res) => {
  try {
    const { name, email, cpf, phone, address, password } = req.body;
    console.log(name);
    const cadatro = users.create({
      name,
      email,
      cpf,
      phone,
      address,
      password,
    });
    res.json({ message: "cadastro realizado com sucesso" });
  } catch (err) {
    throw new Error("não foi possivel acessar");
  }
};

module.exports = {
  Getusers,
  register,
};
