import "./Slider.css";
import { useState } from "react";
import React from "react";

export const Slider = React.memo(({ imagem, classe }) => {
  const [current, Setcurrent] = useState(0);
  function buttonLeft() {
    Setcurrent((prev) => (prev - 1 + imagem.length) % imagem.length);
  }
  function buttonRight() {
    Setcurrent((prev) => (prev + 1) % imagem.length);
  }

  return (
    <>
      <div className="button-right button" onClick={buttonRight}>
        <svg
          width="14"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 23L12 12L0.999999 1"
            stroke="#474747"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="button-left button" onClick={buttonLeft}>
        <svg
          width="14"
          height="24"
          viewBox="0 0 14 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L2 12L13 23"
            stroke="#474747"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="imagens">
        {imagem.map((imagem, index) => (
          <div className={index === current ? "direita" : ""}>
            <div className={`imagem-card ` + classe[current]}>
              <img src={`/${imagem}`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
});
