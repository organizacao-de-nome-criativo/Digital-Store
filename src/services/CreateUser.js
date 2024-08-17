import { useState } from "react";
import { API } from "../ui/api.fetch";

export const CreateUser = () => {
  const [error, Seterror] = useState();
  const [loadig, Setloading] = useState(null);
  const fetcha = async (e) => {
    Setloading(true);
    e.preventDefault();
    const form = e.target;
    const body = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await API("users/register", "POST", body);

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      Seterror(error);
    }
    Setloading(false);
  };

  return { error, loadig, fetcha };
};
