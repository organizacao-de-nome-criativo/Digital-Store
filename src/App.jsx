import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
S;
import { Home } from "../src/Pages/Home/Home";
import { Products } from "../src/Pages/Products/Products";
// import { Categories } from "../src/Pages/Categories/Categories";
import { Requests } from "../src/Pages/Requests/Requests";
import { Detalhes } from "./Components/Detalhes";
import { Header } from "./Components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" Component={<Home />} />

        <Route path="/Products" Component={<Products />} />

        <Route path="/Categories" Component={<Detalhes />} />

        <Route path="/Requests" Component={<Requests />} />
      </Switch>
    </>
  );
}

export default App;
