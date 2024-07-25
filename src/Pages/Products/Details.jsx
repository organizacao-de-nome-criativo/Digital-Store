import { useParams } from "react-router-dom";
import json from "../../json/produtos.json";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { useState } from "react";
import "./Details.css";
import { Slider } from "./Slider";

export const Details = () => {
  const { id } = useParams();  // Correção: use desestruturação para obter o ID
  const [current, Setcurrent] = useState(0);
  const [Clase, Setclasse] = useState(["color-white", "green", "color-red", "color-blue"]);

  const ItemEscolhido = json.produtos.find((item) => item.id === id);
  console.log(ItemEscolhido);
  const image = [ItemEscolhido.img, ItemEscolhido.img, ItemEscolhido.img, ItemEscolhido.img];

  function buttonRight() {
    Setcurrent(prev => (prev + 1) % image.length);
    <Slider imagem ={image} classe={Clase} mudança =" direita"/>

  }

  function buttonLeft() {
    Setcurrent(prev => (prev - 1 + image.length) % image.length);
  }

  return (
    <>
      <Header />
      <main>
        <p>caminho da url.</p>
        <section>
          <div className="contanier-section-detalhes-1">
            <div className="carrosel">
              <div className="button-right button" onClick={buttonRight}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 23L12 12L0.999999 1" stroke="#474747" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="button-left button" onClick={buttonLeft}>
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L2 12L13 23" stroke="#474747" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <Slider imagem={image} classe={Clase} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
