import React, { useState } from "react";
import "./slider.css"; // Estilo CSS para o carrossel (pode ser personalizado)

export const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={prevSlide}>
        Prev
      </button>
      <div className="carousel-slide">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex ? "slide active" : "slide inactive"
            }
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};
