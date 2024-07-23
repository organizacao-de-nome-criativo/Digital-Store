import { useParams } from "react-router-dom";
import json from "../../../public/produtos.json";
export const Details = ({ props }) => {
  const id = useParams();
  console.log(id);

  const ItemEscolhido = json.produtos.find((item) => item.id === id.id);
  console.log(ItemEscolhido);

  return (
    <>
      <h1>{ItemEscolhido.name}</h1>
    </>
  );
};
