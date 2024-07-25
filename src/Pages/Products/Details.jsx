import { useParams } from "react-router-dom";
import json from "../../json/produtos.json";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { useState } from "react";
import "./Details.css";
import { Slider } from "./Slider";



export const Details = ({ props }) => {
  const id = useParams();
  const [div1, setDiv] = useState();
  console.log(id);
  const [Clase, Setclasse] = useState(["color-white","green ",'color-red','color-blue']);
  

  const ItemEscolhido = json.produtos.find((item) => item.id === id.id);
  console.log(ItemEscolhido);
  const image = [ItemEscolhido.img,ItemEscolhido.img,ItemEscolhido.img,ItemEscolhido.img]
  const classe = ['color-blue']
  return (
    <>
    <Header/>
    <main>
      <p> caminho da url.</p>
      <section>
        <div className="contanier-section-detalhes-1">
          <div className="carrosel">
            <Slider imagem={image} classe={Clase}/>
        
          </div>
        </div>
      </section>
    </main>
  
    <Footer/>
    </>
  );
};
