import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/Pages/Home/Home";
import { Products } from "../src/Pages/Products/Products";
import { Categories } from "./Pages/Categories/Categories";
import { Requests } from "../src/Pages/Requests/Requests";
import { Details } from "./Pages/Products/Details";
import PageNotFound from "./Pages/PageNotFound/PageNotFoun";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="Requests" element={<Requests />} />
          <Route path="/Detalhes/:id" element={<Details />} />
          <Route path="Login" element={<Login/>} />
          <Route path="Register" element={< Register/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
