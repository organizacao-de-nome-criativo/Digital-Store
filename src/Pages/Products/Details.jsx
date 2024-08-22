import { useLinkClickHandler, useParams } from "react-router-dom";
import json from "../../json/produtos.json";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { useCallback, useEffect, useState } from "react";
import "./Details.css";
import shoes from "../../../public/shoes.json";
import { Div, Slider } from "./Slider";
import estrela from "/public/estrela.svg";
import React from "react";
import { Slider2 } from "./Slider2";
import { Link } from "react-router-dom";
import { API } from "../../ui/api.fetch";

export const Details = React.memo(() => {
  const { id } = useParams();
  console.log(id);

  const valor = id;
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const getProductById = async (valor) => {
      const resp = await API(`product/${valor}`);
      const data = await resp.json();
      setSingleProduct(data);
      // console.log(setSingleProduct)
    };
    getProductById(valor);
  }, []);

  // const [current, Setcurrent] = useState(0);
  const clase = ["color-white", "green", "color-red", "color-blue"];

  // const ItemEscolhido = json.produtos.find((item) => item.id === id);
  // console.log(ItemEscolhido);
  // const image = [
  //   ItemEscolhido.img,
  //   ItemEscolhido.img,
  //   ItemEscolhido.img,
  //   ItemEscolhido.img,
  // ];
  // console.log(shoes);

  const renderiza = useCallback(() => {
    return (
      <div>
        {ArraySapatos.map((imagem) => (
          <img src={`/${imagem}`} alt="" />
        ))}
      </div>
    );
  });

  console.log(singleProduct);

  return (
    <>
      <Header />
      <main>
        <section className="section-bloco-principal">
          <div className="contanier-section-detalhes-1">
            <div className="carrosel">
              {/* <Slider imagem={image}  /> */}
              <img src={singleProduct.imageUrl} className="slid3r" alt="" />
            </div>
          </div>
          <div className="second-div-section-detalhes">
            {" "}
            <div className="bloco-detalhes-h2">
              <div className="second-div-section-detalhes-1">
                <h2>{singleProduct.name}</h2>
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
                r$ <span> {singleProduct.price}</span> ,00
              </h3>
              <div className="paragraph-div-detalhes">
                <p>descrição do produto</p>
                <p>{singleProduct.description}</p>
              </div>
              <div className="tamanhos">
                <div className=" div-geral-tamanhos">
                  <div className="div-tamanhos-1">
                    <p> tamanho</p>
                    <div className="div-tamanhos">
                      <Div />
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
                <Link to="/cart">
                  <button className="button-comprar-section-detalhes">comprar</button>
                </Link>
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
