import { useParams } from "react-router-dom";
import json from "../../json/produtos.json";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { useState } from "react";
import "./Details.css";
import { Slider } from "./Slider";
import imagem from "../../json/shoes.json";

export const Details = ({ props }) => {
  const id = useParams();
  const [div1, setDiv] = useState();
  console.log(id);
  const [Clase, Setclasse] = useState([
    "color-ciano",
    "color-salmon",
    "color-gray",
    "color-blue",
  ]);

  const ItemEscolhido = json.produtos.find((item) => item.id === id.id);
  console.log(ItemEscolhido);
  const [id_atual, setId] = useState(0);

  return (
    <div>
      <Header />
      <main>
        <section>
          <div className="contanier">
            <div className="carrosel">
              <div> clique aqui</div>
              <div>clique aqui</div>
              <div className="imagens">
                <Slider
                  images={[
                    "src/assets/produc-image-2.png",
                    "src/assets/produc-image-2.png",
                    "src/assets/produc-image-2.png",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="contanier"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
