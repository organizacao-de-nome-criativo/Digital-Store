import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/Pages/Home/Home";
import { Products } from "../src/Pages/Products/Products";
import { Categories } from "./Pages/Categories/Categories";
import { Requests } from "../src/Pages/Requests/Requests";
import { Details } from "./Pages/Products/Details";
import PageNotFound from "./Pages/PageNotFound/PageNotFoun";
import { Login } from "./Pages/Login/Login";

import { useRef, useState } from "react";
import { Cadastro } from "./Components/formularios/Cadastro";
import { FormularioComprar } from "./Components/formularios/formularioComprar";

function App() {
  const [name, Setname] = useState();
  const [address, Setendereco] = useState();
  const [email, Setmail] = useState();
  const [phone, Setphone] = useState();
  const [cpf, Setcpf] = useState();
  const [resopsta, setresopsta] = useState();
  const [password, Setpassword] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="Requests" element={<Requests />} />
          <Route path="/Detalhes/:id" element={<Details />} />
          <Route path="Login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="comprar" element={<FormularioComprar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
