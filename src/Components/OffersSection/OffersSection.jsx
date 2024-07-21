import "./offersSection.css";
import { Button } from "../Button/Button";
export const OffersSection = () => {
  return (
    <section className="slide-content">
      <div className="slide-content-text">
        <span className="subtitle">Melhores ofertas personalizadas</span>
        <h1 className="title">Queima de stoque Nike 🔥</h1>
        <span className="paragraph">
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </span>
        <div className="slide-content-button">
          <Button nome={"Ver Ofertas"} link={"#"} style={"offers-button"}/>
        </div>
      </div>
    </section>
  );
};
