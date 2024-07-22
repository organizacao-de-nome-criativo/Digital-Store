import { Routes, Route } from "react-router-dom";

import { Home } from "../src/Pages/Home/Home";
import { Products } from "../src/Pages/Products/Products";
import { Categories } from "../src/Pages/Categories/Categories";
import { Requests } from "../src/Pages/Requests/Requests";
import { Detalhes } from "./Components/Detalhes";
import { Header } from "./Components/Header/Header";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/produto" element={<Products />} />

        <Route path="/categorias" element={<Categories />} />

        <Route path="/Requests" element={<Requests />} />
        <Route path="/categorias/:elemento" element={<Detalhes />} />
      </Routes>
    </>
  );
}

export default App;
