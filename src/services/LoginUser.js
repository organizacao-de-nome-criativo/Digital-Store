import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const LoginUser = async (auth) => {
  const { error, seterror } = useState(null);

  try {
  } catch (error) {
    seterror(error);
  }
  auth(token);

  return {
    error,
  };
};
