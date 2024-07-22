import { Header } from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import json from "../../../public/produtos.json";

export const Products = () => {
  // const { produto, Setproduto } = useState("");
  // useEffect(() => {
  //   try {
  //     async function Produtos() {
  //       const response = await fetch("produtos.json");
  //       console.log(response);
  //       const data = await response.json();
  //       console.log(data);
  //     }

  //     Produtos();
  //     Setproduto(Produtos());
  //   } catch (error) {
  //     console.error(
  //       "infelizmente, não foi possivel acessar os dados vindo do json",
  //       error
  //     );
  //   }
  // }, []);

  return (
    <>
      <Header />
      <h1>
        {json.map((text) => (
          <p>{text.custo}</p>
        ))}{" "}
      </h1>
    </>
  );
};
