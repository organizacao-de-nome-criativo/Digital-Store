import { useState } from "react";

export const CreateUser = async (path) => {
  const { error, Seterror } = useState(null);
  const { loadig, Setloading } = useState(false);
  const { cadastroRealizado, setCadastroRealizado } = useState();

  Seterror(null);
  Setloading(true);

  try {
    const response = await fetch(`http://localhost:3000/${path}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
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
