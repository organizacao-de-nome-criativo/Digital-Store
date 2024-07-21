import { PromoCard } from "../PromoCard/PromoCard"
import "./highlights.css"

export const HighlightsSection = () => {

  return (
    <section className="highlights-flex-section">
      <div className="highlights-cards-content">
        <div className="content-text">
          <span className="subtitle">Coleções em destaque</span>
        </div>
        <div className="content-cards">
          <PromoCard mods={"promoCard"}/>
          <PromoCard mods={"promoCard"}/>
          <PromoCard mods={"promoCard"}/>

        </div>
      </div>
      <div className="highlights-icons">
          
      </div>
    </section>
  )
}