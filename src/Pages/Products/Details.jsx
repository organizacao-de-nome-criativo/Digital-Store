import { useLinkClickHandler, useParams } from "react-router-dom";
import json from "../../json/produtos.json";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { useCallback, useEffect, useState } from "react";
import "./Details.css";
import shoes from "../../../public/shoes.json";
import { Slider } from "./Slider";
import estrela from "/public/estrela.svg";
import React from "react";
import { Slider2 } from "./Slider2";
import { Link } from "react-router-dom";

export const Details = React.memo(() => {
  const { id } = useParams();
  const [current, Setcurrent] = useState(0);
  const clase = ["color-white", "green", "color-red", "color-blue"];

  const ItemEscolhido = json.produtos.find((item) => item.id === id);
  console.log(ItemEscolhido);
  const image = [
    ItemEscolhido.img,
    ItemEscolhido.img,
    ItemEscolhido.img,
    ItemEscolhido.img,
  ];
  console.log(shoes);

  const renderiza = useCallback(() => {
    return (
      <div>
        {ArraySapatos.map((imagem) => (
          <img src={`/${imagem}`} alt="" />
        ))}
      </div>
    );
  });

  return (
    <>
      <Header />
      <main>
        <p>caminho da url.</p>
        <section className="section-bloco-principal">
          <div className="contanier-section-detalhes-1">
            <div className="carrosel">
              <Slider imagem={image} classe={clase} />
            </div>
          </div>
          <div className="second-div-section-detalhes">
            {" "}
            <div className="bloco-detalhes-h2">
              <div className="second-div-section-detalhes-1">
                <h2>{`tenis ${ItemEscolhido.name} revolution 6 next nature masculino`}</h2>
                <p>
                  casual <span>|</span> nike <span>|</span> ref:38416711
                </p>
              </div>
              <div className="div-logo-estrelas">
                <img src="/estrelinhas.svg" alt="" />
                <div className="bloco-estrelinha">
                  4,7 <img src={estrela} alt="" />
                </div>
                <p>{"(0 avaliações)"}</p>
              </div>
            </div>
            <div className="bloco-h3-detalhes">
              <h3>
                r$ <span> {ItemEscolhido.cuso}</span> ,00
              </h3>
              <div className="paragraph-div-detalhes">
                <p>descrição do produto</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div className="tamanhos">
                <div className=" div-geral-tamanhos">
                  <div className="div-tamanhos-1">
                    <p> tamanho</p>
                    <div className="div-tamanhos">
                      <div>39</div>
                      <div>40</div>
                      <div>41</div>
                      <div>42</div>
                      <div>43 </div>
                    </div>
                  </div>
                  <div className="div-tamanhos-1">
                    <p>tamanho</p>
                    <div className="div-tamanhos-2">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
                <button className="button-comprar-section-detalhes">
                  {" "}
                  comprar
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="section-parte-2-detalhes">
          <div className="lua">
            <h2> relacionados</h2>
            <Link className="link-detalis" to="/products">
              <p>ver todos &#8594;</p>
            </Link>
          </div>
          <div className="sapatos">
            <Slider2 array={shoes} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
});
