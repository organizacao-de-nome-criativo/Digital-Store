import { useState } from "react";
import "./Details.css";

export const Tamanhos = ({ classe }) => {
  const listatamanho = ["39", "40", "41", "42", "43"];
  const [IndexAtivo, SetINdexativo] = useState(null);
  return (
    <>
      {listatamanho.map((numero, index) => (
        <div
          onClick={() => SetINdexativo(index)}
          className={`${classe} ${IndexAtivo === index ? "active1" : ""}`}
          key={index}
        >
          {numero}
        </div>
      ))}
    </>
  );
};
