import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/Pages/Home/Home";
import { Products } from "../src/Pages/Products/Products";
import { Categories } from "./Pages/Categories/Categories";
import { Requests } from "../src/Pages/Requests/Requests";
import { Details } from "./Pages/Products/Details";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="requests" element={<Requests />} />
          <Route path="/Detalhes/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
