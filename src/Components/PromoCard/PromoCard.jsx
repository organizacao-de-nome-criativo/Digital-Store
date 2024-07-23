import "./promoCard.css"
import {Button} from "../Button/Button"
export const PromoCard = ({mods, promoValue, promoName, imgSrc, imgAltText, imgDetails}) => {

  return (
    <div className={"promo-card-body " + mods}>
     <div className="promo-card-content">
      <div className="promo-card-content-text">
        <span className="promo-value">{promoValue}</span>
        <span className="promo-name">{promoName}</span>
      </div>
      <div className="promo-button-position">
        <Button nome={"Comprar"} style={"promo-button"}/>
      </div>
      <img src={imgSrc} alt={imgAltText} className={imgDetails}/>
     </div>
    </div>
  )
}