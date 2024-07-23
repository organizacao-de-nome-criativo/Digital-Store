import "./featured.css"
import {Button} from "../Button/Button"
export const Featureds = () => {
AnimationEffect
  return (
    <section className="featured-flex-section"> 
        <div className="featured-product">
          <div className="featured-product-image">
            <img src="src/assets/special-product.png" alt=""/>
            <div className="featured-background"> </div>
          </div>
        </div>
        <div className="featured-content-text">
          <span className="subtitle">Oferta especial</span>
          <span className="title">Air Jordan edição de colecionador</span>
          <span className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
          <div className="featured-button">
            <Button nome={'Ver Oferta'}/>
          </div>
        </div>
    </section>
  )
}