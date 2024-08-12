import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/Pages/Home/Home";
import { Products } from "../src/Pages/Products/Products";
import { Categories } from "./Pages/Categories/Categories";
import { Requests } from "../src/Pages/Requests/Requests";
import { Details } from "./Pages/Products/Details";
import PageNotFound from "./Pages/PageNotFound/PageNotFoun";
import { Login } from "./Pages/Login/Login";
import "./form.css";
import { useRef, useState } from "react";

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
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="Requests" element={<Requests />} />
          <Route path="/Detalhes/:id" element={<Details />} />
          <Route path="Login" element={<Login/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter> */}

      <form action="" className="formulario">
        <label htmlFor="">
          digite seu nome
          <input
            type="text"
            onChange={(evento) => {
              const name = evento.target.value;
              Setname(name);
            }}
          />
        </label>
        <label htmlFor="">
          digite seu cpf
          <input
            type="text"
            onChange={(evento) => {
              const cpf = evento.target.value;
              Setcpf(cpf);
            }}
          />
          <label
            htmlFor="
          "
          >
            digite sua senha
            <input
              type="password"
              onChange={(event) => {
                const senha = event.target.value;
                Setpassword(senha);
              }}
            />
          </label>
        </label>
        <label htmlFor="">
          digite seu email
          <input
            type="text"
            onChange={(evento) => {
              const email = evento.target.value;
              Setmail(email);
            }}
          />
        </label>
        <label htmlFor="">
          digite seu endereço
          <input
            type="text"
            onChange={(evento) => {
              const enderco = evento.target.value;
              Setendereco(enderco);
            }}
          />
        </label>
        <label htmlFor="">
          digite seu telefone
          <input
            type="text"
            onChange={(evento) => {
              const telefone = evento.target.value;
              Setphone(telefone);
            }}
          />
        </label>
        <button
          onClick={async (evento) => {
            evento.preventDefault();

            try {
              const response = await fetch(
                "http://localhost:3000/users/register",
                {
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    name,
                    address,
                    cpf,
                    email,
                    phone,
                    password,
                  }),
                  method: "POST",
                }
              );
              const data = await response.json();
              setresopsta(data.message);
            } catch (bike) {
              console.error(bike);
            }
          }}
        >
          enviar
        </button>
      </form>
      <p>{resopsta} </p>
    </>
  );
}

export default App;
