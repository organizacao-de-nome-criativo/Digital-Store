import { useState } from "react";
import { ConsumoJson } from "../../src/Pages/Products/ConsumoJson";

export const validation = () => {
  const [errorName, Seterro] = useState();
  const [errorSenha, SeterrorSenha] = useState();
  const [errorEmail, SetErrorEmail] = useState();
  const [errorCpf, SetErrorCpf] = useState();

  const name = (evento) => {
    if (evento.target.value.length < 5) {
      return Seterro("o campo deve ter pelo menos 5 caracters ");
    }
    Seterro();
  };
  const senha = (evento) => {
    const password = evento.target.value;
    console.log(password);
    const regex = /[\A-Z]/;
    const Reg = /[\$#!%\*]/;

    const index = password.search(regex);
    const indexCaractEspecial = password.search(Reg);
    console.log(index, indexCaractEspecial);

    if (index === -1 || indexCaractEspecial === -1) {
      return SeterrorSenha(
        "sua senha deve ter pelo menos 1 letra maiúscula e uma caracter especial. exemplo :#,%,$"
      );
    }
    SeterrorSenha();
  };
  const cpf = (evento) => {
    const regexCpf = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/;
    const regex = /[\.,\-]/gi;
    let cpf = evento.target.value.replace(regex, "");
    let number = Number(cpf);

    if (number) {
      cpf = cpf.toString();

      if (cpf.length === 11) {
        return SetErrorCpf();
      } else {
        return SetErrorCpf("o máximo é 11 digito,");
      }
    }
    SetErrorCpf("cpf invalido,use somente numeros");
  };
  const email = (evento) => {
    const index = evento.target.value.search("@");
    if (index >= 0) {
      const servidorDoEmail = evento.target.value.slice(index);
      if (
        servidorDoEmail === "@gmail.com" ||
        servidorDoEmail === "@outlook.com"
      ) {
        return SetErrorEmail();
      } else {
        return SetErrorEmail(
          "utilize um dos servidores , gmail ou outlook para se registrar"
        );
      }
    }
    SetErrorEmail("email invalido");
  };
  return {
    regraDeNegocio: { errorName, errorSenha, errorCpf, errorSenha, errorEmail },
    name,
    cpf,
    email,
    senha,
  };
};
