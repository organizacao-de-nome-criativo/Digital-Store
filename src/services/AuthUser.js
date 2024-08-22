import { useState } from "react";
import { API } from "../ui/api.fetch";
import { redirect, useNavigate } from "react-router-dom";

export const RotaSegura = () => {
  const [error, Serror] = useState();
  const redirecit = useNavigate();
  const [userName, SetUsername] = useState();
  const Auth = async (Logout = false) => {
    if (Logout) {
      return;
    }
    try {
      const meuvalor = localStorage.getItem("auth");

      const response = await API("users/profile", "GET", undefined, meuvalor);

      const data = await response.json();
      console.log(data);
      if (data.message) {
        throw new Error(data.message);
      }
      console.log("essa é a mensagem vindo de uma rota segura", data);
      const indexSpace = data.name.indexOf(" ");

      SetUsername(data.name.slice(0, indexSpace));
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        // redirecit("login");
      }, 2000);
      Serror(error.name);
    }
  };

  return {
    Auth,
    error,
    userName,
  };
};
