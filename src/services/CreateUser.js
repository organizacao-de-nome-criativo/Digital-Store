import { useState } from "react";
import { API } from "../ui/api.fetch";

export const CreateUser = async (evento) => {
  evento.preventDefault();
  const form = evento.target;
  const body = Object.fromEntries(new FormData(form).entries());

  // const [error, Seterror] = useState(null);
  // const [loadig, Setloading] = useState(false);
  // const [cadastroRealizado, setCadastroRealizado] = useState();

  // Seterror(null);

  // Setloading(true);

  try {
    console.log(12345);
    const response = await API("users/register", "POST", body);
    console.log(123456);
    const data = await response.json();
    console.log(data);
    // setCadastroRealizado(data.message);
  } catch (error) {
    // Seterror(error);
  }
  // Setloading(false);
  return {
    error: "ta chetgando aqui",
    // error,
    // loadig,
    // cadastroRealizado,
  };
};
