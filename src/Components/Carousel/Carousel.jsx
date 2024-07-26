import React, { useState, useEffect, children } from "react";
import "./carousel.css";
import { OffersSection } from "../OffersSection/OffersSection";
import slides from '../../json/slides.json'
export const Carousel = ({children}) => {
    //! NÃO FUI EU QUEM FIZ, FOI O CHATGPT (não to nem zuando)
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel">
      <OffersSection />
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </div>
      <img
        src="src/assets/Ornament 11.png"
        alt=""
        className="pointer-background"
      ></img>
      <div className="indicators">
        {slides.map((_, index) => (
          <label
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          ></label>
        ))}
      </div>
    </section>
  );
};
