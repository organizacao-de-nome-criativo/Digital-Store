import React, { useState, useEffect, children } from "react";
import "./carousel.css";
import { OffersSection } from "../OffersSection/OffersSection";

export const Carousel = ({children}) => {
    //! NÃO FUI EU QUEM FIZ, FOI O CHATGPT (não to nem zuando)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "src/assets/slide-1-tenis-version1.png",
    "src/assets/produc-image.png", 
    "src/assets/produc-image-2.png",
    "src/assets/produc-image-3.png",
    "src/assets/produc-image-4.png",
    "src/assets/produc-image-5.png",
  ];

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
       <OffersSection/>
      <div className="slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
            <img src={slide} alt={`Slide ${index + 1}`} className="slider-image"/>
          </div>
        ))}
      </div>
      <img src="src/assets/Ornament 11.png" alt="" className="pointer-background"></img>
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
