import { useState } from "react";
import "./nav.css";
import { Outlet, Link, useLocation } from "react-router-dom";
export const Nav = () => {

  
  return (
    <nav className="navegation">
      
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/Products" className="link">Produtos</Link>
        </li>
        <li>
          <Link to="/Categories" className="link">Categorias</Link>
        </li>
        <li>
          <Link to="/Requests" className="link">Meus pedidos</Link>
        </li>
    </nav>
  );
};
