import { Link } from "react-router-dom"
import "./cardSection.css"
import { ConsumoJson } from "../../Pages/Products/ConsumoJson"
export const CardSection = () => {

  return (
    <>
    <section className="flex-card-section">
      <div className="card-position">
        <div className="card-section-content-text">
          <span className="subtitle">Produtos em alta</span>
         <span className="link-products"><Link to={'/Products'}> Ver todos ➜</Link></span> 
        </div>
        <ConsumoJson/>
      </div>
    </section>
    </>
  )
}