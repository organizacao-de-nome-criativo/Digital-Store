import "./nav.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="navegation">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
        <div></div>
      </li>
      <li>
        <Link to="/Products" className="link">
          Produtos
        </Link>
        <div></div>
      </li>
      <li>
        <Link to="/Categories" className="link">
          Categorias
        </Link>
        <div></div>
      </li>
      <li>
        <Link to="/Requests" className="link">
          Meus pedidos
        </Link>
        <div></div>
      </li>
    </nav>
  );
};
