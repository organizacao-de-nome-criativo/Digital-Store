import "./Header.css";
import { Button } from "../Button/Button";
import { Nav } from "../Nav/Nav";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RotaSegura } from "../../services/AuthUser";
// import userIcon from '../../assets/userIcon'
export const Header = ({ style }) => {
  const { Auth, error, userName } = RotaSegura();
  // const { boolean } = useParams();

  useEffect(() => {
    Auth();
  }, []);
  // if (error) {
  //   alert(error);
  // }

  return (
    <header className={"flex-section-head " + style}>
      <section className="head-main">
        <figure className="logo-img">
          <img src="src/assets/logo-digital-store.png" alt="" />
        </figure>
        <div className="search-input">
          <input type="text" name="" id="" placeholder="Pesquisar produto..." />
          <img src="src/assets/search-icon.png" alt=""></img>
        </div>

        <div className="user-register">
          <div className="userLog">
            {userName ? <img src="src/assets/userIcon.png" alt="" /> : ""}
            {userName ? (
              `olá ${userName}`
            ) : (
              <Link to="/cadastro">Cadastre-se</Link>
            )}
          </div>
          <div
            className="enter-button"
            onClick={() => localStorage.removeItem("auth")}
          >
            <Link to="/Login">
              {userName ? <Button nome={"Sair"} /> : <Button nome={"Entrar"} />}
            </Link>
          </div>
        </div>
        <div className="cart-ico">
          <img src="src/assets/carrinho-de-compras.png" alt="" />
        </div>
      </section>
      <Nav />
    </header>
  );
};
