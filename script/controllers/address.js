const { Address } = require("../models");

const CreateAddres = async (req, response) => {
  try {
    console.log(req.body);
    const { street, number, CEP, bairro, city, complement, estado } = req.body;
    console.log(complement);

    console.log(street);
    await Address.create({
      street,
      number,
      CEP,
      bairro,
      city,
      complement,
      estado,
    });
    console.log("inserção realizada com sucesso na tabela de endereõ");
  } catch (error) {
    throw new Error("inserção errada em endere~po");
  }
};

module.exports = CreateAddres;
