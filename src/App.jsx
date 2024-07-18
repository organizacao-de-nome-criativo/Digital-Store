import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../src/Pages/Home/Home";
import { Products } from "../src/Pages/Products/Products";
import { Categories } from "../src/Pages/Categories/Categories";
import { Requests } from "../src/Pages/Requests/Requests";
function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Routes>

          <Route path="/Home" element={<Home/>}/>

          <Route path="Products" element={<Products/>} />

          <Route path="Categories" element={<Categories/>}/>

          <Route path="Requests" element={<Requests />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
