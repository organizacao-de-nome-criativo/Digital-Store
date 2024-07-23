import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import produtos from "../../../public/produtos.json";
import setinha from "../../assets/setinha2.svg";
import "./Products.css";
import { ConsumoJson } from "./ConsumoJson";

export const Products = () => {
  let qntd = 0;
  produtos.produtos.forEach((item) => {
    if (item.cuso) {
      qntd += 1;
    }
  });
  return (
    <>
      <Header />

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
          <aside>
            <div>
              <div className="div-h2">
                <h2>Filtro por</h2>
              </div>
              <form action="">
                <div>
                  <h3>Marca</h3>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Adidas</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> calenciaga</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> k-swiss</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> nike</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">puma</label>
                  </div>
                </div>
                <div>
                  <h3>categoria</h3>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> esporte e lazer</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> casual</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> utilitário</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> corrida</label>
                  </div>
                </div>
                <div>
                  <h3>genero</h3>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> masculino</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">femino</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor=""> unisex</label>
                  </div>
                </div>
                <div>
                  <h3>estado</h3>
                  <div>
                    <div>
                      <input type="radio" />
                      <label htmlFor="">novo</label>
                    </div>
                    <input type="radio" />
                    <label htmlFor="">usuário</label>
                  </div>
                </div>
              </form>
            </div>
          </aside>
          <div className="componente-json">
            <ConsumoJson />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
