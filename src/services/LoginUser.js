import { useState } from "react";
import { API } from "../ui/api.fetch";
import { useNavigate } from "react-router-dom";

export const LoginUser = () => {
  const redirect = useNavigate();
  const [errorLogin, seterror] = useState();

  const FetchLogin = async (evento) => {
    evento.preventDefault();

    const body = Object.fromEntries(new FormData(evento.target).entries());

    try {
      const response = await API("users/login", "POST", body);
      const data = await response.json();
      console.log(data)
      const { token } = data;
      console.log(token);
      if (!token) {
        throw new Error("usuário não autenticado, se cadastre primeiro");
      }

      localStorage.setItem("auth", token);
      console.log("12345");
      redirect("/");
    } catch (error) {
      seterror(error.message);
    }
  };

  return {
    errorLogin,
    FetchLogin,
  };
};
