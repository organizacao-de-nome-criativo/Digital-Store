import "./Products.css";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import produtos from "../../json/produtos.json"
import setinha from "../../assets/setinha2.svg";
import { ConsumoJson } from "./ConsumoJson";
import { AsideSection } from "../../Components/AsideSection/AsideSection";
export const Products = () => {
  let qntd = 0;
  produtos.produtos.forEach((item) => {
    if (item.cuso) {
      qntd += 1;
    }
  });
  return (
    <>
      <Header style={"shadow"} />
      <main>
        <div className="first-div-main">
          <p>
            <span className="span-paragraph-1">Resultado para "Tênis"</span> -{" "}
            {""}
            {qntd} produtos
          </p>
          <div>
            <p>
              <span className="span-2-paragraph">Ordenado por:</span> mais
              relevantes
            </p>
            <img className="setinha" src={setinha} alt="" />
          </div>
        </div>
        <section>
          <AsideSection/>
            <ConsumoJson />

        </section>
      </main>
      <Footer />
    </>
  );
};
