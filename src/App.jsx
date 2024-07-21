import { Route as Routes, Route } from "react-router-dom";

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
        <Route exact path="/" component={Home} />

        <Route exact path="/produtos" component={Products} />

        <Route exact path="categorias" Component={Categories} />

        <Route exact path="/Requests" Component={Requests} />
        <Route exact path="/produtos:elemento" Component={Detalhes} />
      </Routes>
    </>
  );
}

export default App;
