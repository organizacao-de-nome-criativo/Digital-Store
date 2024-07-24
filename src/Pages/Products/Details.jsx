import { useParams } from "react-router-dom";
import json from "../../json/produtos.json";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { useState } from "react";
import "./Details.css";

export const Details = ({ props }) => {
  const id = useParams();
  const [div1, setDiv] = useState();
  console.log(id);
  const [Clase, Setclasse] = useState(["color-"]);

  const ItemEscolhido = json.produtos.find((item) => item.id === id.id);
  console.log(ItemEscolhido);

  return (
    <>
      <Header />
      <main>
        <p></p>
        <section>
          <div className="slider">
            <div className="button left"></div>
            <div className="button rigth"></div>
            <div className="imagem"></div>
          </div>
        </section>
        <section></section>
      </main>

      <Footer />
    </>
  );
};
