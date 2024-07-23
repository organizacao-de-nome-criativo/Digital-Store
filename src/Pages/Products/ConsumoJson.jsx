import produtos from "../../json/produtos.json"
import "./Products.css";

// export const ConsumoJson = () => {
//   return (
//     <>
//       {produtos.produtos.map((produto, index) => (
//         <p key={index}> {produto}</p>
//       ))}
//     </>
//   );
// };
import foto from "../../assets/produc-image-3.png";
import { Link } from "react-router-dom";
export const ConsumoJson = () => {
  return (
    <>
     {produtos.produtos.map((elemento) => (
        <div className="div-card">
          <div className="div-imagem">
            <Link to={`/Detalhes/${elemento.id}`} className="link-imagem">
              <img src={ `src/assets/${elemento.img}`} alt={`um sapato do tipo ${elemento.name}`} />
            </Link>
          </div>
          <div className="paragraph">
            <p>{elemento.categoria}</p>
            <p>{elemento.name}</p>
            <p>
              <span className="span-paragrah">{`$${elemento.valorAntigo}`}</span>{" "}
              {`$${elemento.cuso}`}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
