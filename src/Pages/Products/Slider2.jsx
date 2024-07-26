import React from "react";
import "./slider2.css";

export const Slider2 = React.memo(({ array, style }) => {
  const { sapatos } = array;
  return (
    <div className="sapato">
      {sapatos.map((sapato, index) => (
        <>
          <div className="div-sapatos-section-2">
            <div className="div-imagem-slider-2">
              <img src={`/${sapato}`} />
            </div>
            <p>Tênis</p>
            <h2> K-Swiss V8 - Masculino </h2>
            <p>
              {" "}
              <span>$200</span> $100{" "}
            </p>
          </div>
        </>
      ))}
    </div>
  );
});
