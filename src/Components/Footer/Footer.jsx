import "./Footer.css";

import { FooterUl } from "./FooterUl";

export const Footer = () => {
  return (
    <footer>
      <section className="section-footer">
        <div className="first-div-footer">
          <div className="div-interna-1">
            <div className="footer-img"> 
              <img src="src/assets/logo-footer.svg" alt=""/>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.  
            </p>
          </div>
          <div className="icons">
           <a href=""><img src="src/assets/facebook.svg" alt=""/> </a> 
            <a href="https://www.instagram.com/digitalcollegebr/"><img src="src/assets/instagram.svg" alt=""/></a>
            <a href=""><img src="src/assets/twitter.svg" alt=""/></a>
          </div>
        </div>
        <div className="second-div-footer">
          <div className="div-h2-footer">
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
      <p className="copy" >@ 2022 Digital College</p>
    </footer>
  );
};
