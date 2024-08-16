import { useState } from "react";
import { API } from "../ui/api.fetch";

export const CreateUser = async (evento) => {
  const { error, Seterror } = useState(null);
  const { loadig, Setloading } = useState(false);
  const { cadastroRealizado, setCadastroRealizado } = useState();

  Seterror(null);
  Setloading(true);

  try {
    const response = await API(
      "users/register",
      "POST ",
      "um objeto que compoe o corpo dessa requisiçaõ"
    );
    const data = await response.json();
    setCadastroRealizado(data.message);
  } catch (error) {
    Seterror(error);
  }
  Setloading(false);
  return {
    error,
    loadig,
    cadastroRealizado,
  };
};
