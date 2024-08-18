// import produtos from "../../json/produtos.json"
import "./Products.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../../ui/api.fetch";


export const ConsumoJson = () => {
  const [products, setProduct] = useState([])
  
  
  useEffect( () =>{
    const ApiProducts = async() =>{
        const resp = await API('product')
        const data = await resp.json()
        setProduct(data)
    }
    ApiProducts()
  }, [])
  
  console.log(products)

  return (
    <section className="componente-json" >
    {products.map((product) => (
      console.log(product.imageUrl),
      <div className="div-card"  key={product.id}>
          <div className="div-imagem">
            <Link to={`/Detalhes/${product.id}`} className="link-imagem">
              <img src={ `${product.imageUrl}`} alt={`um sapato do tipo ${product.name}`} />
            </Link>
          </div>
          <div className="paragraph">
            <p>{product.category}</p>
            <p>{product.name}</p>
            <p>
              {/* <span className="span-paragrah">{`$${product.valorAntigo}`}</span>{" "} */}
              {`$${product.price}`}
            </p>
          </div>
        </div>
        
      ))}
      </section>
  );
};
