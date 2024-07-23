import { useParams } from "react-router-dom";
import json from "../../json/produtos.json"
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";


export const Details = ({ props }) => {
  const id = useParams();
  console.log(id);

  const ItemEscolhido = json.produtos.find((item) => item.id === id.id);
  console.log(ItemEscolhido);

  return (
    <>
    <Header/>
    <h1>{ItemEscolhido.name}</h1>


     
    <Footer/>
    </>
  );
};
