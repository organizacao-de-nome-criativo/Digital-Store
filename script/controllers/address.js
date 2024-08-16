const { Address } = require("../models");

const CreateAddres = async (req, response) => {
  try {
    console.log(req.body);
    const { street, number, CEP, bairro, city, complement } = req.body;
    console.log(complement);

    console.log(street);
    await Address.create({
      street,
      number,
      CEP,
      bairro,
      city,
      complement,
    });
    console.log("inserção realizada com sucesso na tabela de endereõ");
  } catch (error) {
    throw new Error("inserção errada em endere~po");
  }
};

module.exports = CreateAddres;
