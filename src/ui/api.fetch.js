export const API = async (path, method = "GET", body = undefined, token1) => {
  console.log(token1);

  if (body) {
    return await fetch(`http://localhost:3000/${path}`, {
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      method: method,
      body: JSON.stringify(body),
    });
  }

  if (token1) {
    return await fetch(`http://localhost:3000/${path}`, {
      headers: {
        "Content-type": "application/json",
        authorization: `${token1}`,
      },
      credentials: "include",
      method,
    });
  }
  return await fetch(`http://localhost:3000/${path}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
async function casa() {
  try {
    const resopnse = await API("users/register", "POST", {
      number: "1",
      complement: "casa",
      bairro: "lagoa redonda",
      city: "fortaleza",
      street: "rua ferreira",
      name: "gleici",
      email: "gleici@gmail",
      CPF: "103040",
      phone: "1520120",
      password: "41004050",
    });

    const data = await resopnse.json();
  } catch (error) {
    console.log(error);
  }
}
