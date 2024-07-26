import "./Header.css";
import { Button } from "../Button/Button";
import { Nav } from "../Nav/Nav";
export const Header = ({style}) => {
  return (
    <header className={"flex-section-head " + style}>
      <section className="head-main">
       <figure className="logo-img">
        <img src="src/assets/logo-digital-store.png" alt="" />
       </figure>
        <div className="search-input">
          <input type="text" name="" id="" placeholder="Pesquisar produto..."/>
          <img src="src/assets/logo-digital-store.png" alt=""></img>
        </div>
          <div className="user-register">
            <a href="">Cadastre-se</a>
            <div className="enter-button">
              <Button link={'#'} nome={'Entrar'}/> 
            </div>
          </div>
          <div className="cart-ico">
            <img src="src/assets/carrinho-de-compras.png" alt=""/>
          </div>
      </section>
        <Nav/>
    </header>
  );
}
