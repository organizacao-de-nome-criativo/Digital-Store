import "./nav.css"; //
import { Link } from "react-router-dom";
import React from "react";

export const Nav = () => {
  return (
    <nav className="navegation">
      <Link to="/" className="link">
        Home
      </Link>

      <Link to="/produto" className="link">
        Produtos
      </Link>

      <Link to="/categorias" className="link">
        Categorias
      </Link>

      <Link to="/Requests" className="link">
        Meus pedidos
      </Link>
    </nav>
  );
};
