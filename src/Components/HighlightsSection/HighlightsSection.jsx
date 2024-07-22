import { PromoCard } from "../PromoCard/PromoCard"
import "./highlights.css"

export const HighlightsSection = () => {

  return (
    <section className="highlights-flex-section">
      <div className="highlights-cards-content">
        <div className="content-text">
          <span className="subtitle">Coleções em destaque</span>
        </div>
        <div className="position-cards">
          <PromoCard mods={"promoCard"} 
          promoValue={"30% OFF"} 
          promoName={"Novo drop Supreme"}
          imgSrc={"src/assets/collection-1.png"}

          />
          <PromoCard mods={"promoCard"}
          promoValue={"30% OFF"} 
          promoName={"Coleção Adidas"}
          imgSrc={"src/assets/collection-2.png"}
          />
          <PromoCard mods={"promoCard"} 
          promoValue={"30% OFF"} 
          promoName={"Novo Beat Bass"}
          imgSrc={"src/assets/collection-3.png"}
          imgDetails={"headset-img"}
          />
        </div>
      </div>
      <div className="highlights-icons">
          
      </div>
    </section>
  )
}