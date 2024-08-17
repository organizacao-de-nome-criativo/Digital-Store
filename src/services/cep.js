import { useState } from "react";
import { ApiCep } from "../ui/apiCep";

export const CepAutomatico = () => {
  const [cep, Setcep] = useState();
  const [error, Seterror] = useState();
  const [address, Setaddres] = useState({
    rua: "",
    bairro: "",
    city: "",
    estado: "",
  });
  const mudarValorCep = (evento) => {
    Setcep(evento.target.value);
    console.log(cep);
  };
  const ValidatoCep = (evento) => {
    const regex = /[\s\-]/gi;

    const cep = evento.target.value.replace(regex, "");
    console.log(cep);
    if (cep.length === 8) {
      Seterror(false);

      fetchAddress(cep);
    } else {
      Seterror("o campo deve conter 8 digitos");
    }
  };

  const fetchAddress = async (cep) => {
    try {
      const response = await ApiCep(cep);
      const data = await response.json();
      console.log(data);
      if (data.erro) {
        throw new Error("Cep invalido");
      }
      Seterror("o cep foi buscado da maneira certa");
      Setaddres({
        rua: data.logradouro,
        bairro: data.bairro,
        city: data.localidade,
        estado: data.uf,
      });
    } catch (error) {
      if (error.message == "Cep invalido") {
        return Seterror("cep invalido");
      }
      console.log(error);
      Seterror("não foi possivel buscar o cep");
    }
  };

  return {
    cep,
    errorCep: error,
    ValidatoCep,
    mudarValorCep,
    address,
    Setaddres,
  };
};
