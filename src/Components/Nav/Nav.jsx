import { useState } from "react";
import "./nav.css";
import { Outlet, Link, useLocation } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="navegation">
      <Link to="/" className="link">
        Home
      </Link>

      <Link to="/Products" className="link">
        Produtos
      </Link>

      <Link to="/Categories" className="link">
        Categorias
      </Link>

      <Link to="/Requests" className="link">
        Meus pedidos
      </Link>
    </nav>
  );
};
