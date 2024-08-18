import { useState } from "react";
import { API } from "../ui/api.fetch";

export const LoginUser = () => {
  const [error, seterror] = useState(null);

  const FetchLogin = async (evento) => {
    evento.preventDefault();

    const body = Object.fromEntries(new FormData(evento.target).entries());

    try {
      const response = await API("users/login", "POST", body);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  return {
    error,
    FetchLogin,
  };
};
