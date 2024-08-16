export const API = async (path, metodh = "get", body = undefined) => {
  if (body) {
    return await fetch(`http://localhost:3000/${path}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: metodh,
      body: JSON.stringify(body),
    });
  }

  return await fetch("http:/localhost:3000/" + path);
};

async function casa() {
  try {
    const resopnse = await API("users/register", "POST", {
      name: "fransico da silva costa",
      email: "fransiquinho@gmail",
      CPF: "52000202002",
      phone: "123450",
      password: "40405000",
    });

    const data = await resopnse.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
casa();
