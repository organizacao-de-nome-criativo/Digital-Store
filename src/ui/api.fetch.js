export const API = async (path, method = "GET", body = undefined) => {
  if (body) {
    return await fetch(`http://localhost:3000/${path}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: method,
      body: JSON.stringify(body),
    });
  }

  return await fetch(`http://localhost:3000/${path}/` , {
    headers: {
      'Content-Type': 'application/json'
    },
    method: method
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
