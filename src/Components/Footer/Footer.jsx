import "./Footer.css";

import { Digital } from "./Digital";
import { Is } from "./Is";
import { Tw } from "./TW";
import { Fc } from "./Fc";
import { FooterUl } from "./FooterUl";

export const Footer = () => {
  return (
    <footer>
      <section className="section-footer">
        <div className="first-div-footer">
          <div className="div-interna-1">
            <Digital />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
              maximus lorem. Ut laoreet leo eu ex ullamcorper,
            </p>
          </div>
          <div className="icons">
            <Fc width={1} />
            <Is color={"white"} width={1} />
            <Tw color={"white"} />
          </div>
        </div>
        <div className="second-div-footer">
          <div className="div-h2">
            <FooterUl
              lista={[
                "sobre drip store",
                "segurança",
                "wishlist",
                "blog",
                "trabalhe conosco",
                "meus pedidos",
              ]}
              titulo={"informações"}
              classe={"div-footer-titulo"}
            />
            <FooterUl
              lista={["camisetas", "calças", "bonés", "headphones", "tênis"]}
              titulo={"categorias"}
              classe={"div-footer-titulo"}
            />
          </div>
          <FooterUl
            address={
              "av. Santos dumont,1510-1 andar-aldeota, fortaleza-ce, 60150-161"
            }
            contato={"(85) 3051-3411"}
            lista={[""]}
            titulo={"contato"}
            classe={"div-footer-grand"}
          />
        </div>
      </section>
      <p> @ 2022 Digital College</p>
    </footer>
  );
};
