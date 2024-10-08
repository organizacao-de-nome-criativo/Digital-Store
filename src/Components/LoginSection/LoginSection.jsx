import { Link } from "react-router-dom";
import "./loginSection.css";
// import { InputText } from "../Input/InputText";
import { Button } from "../Button/Button";
import "./inputText.css";

import { LoginUser } from "../../services/LoginUser";

export const LoginSection = () => {
  const { FetchLogin } = LoginUser();

  return (
    <form className="login-flex-section" onSubmit={FetchLogin}>
      <section className="login-area">
        <div className="login-area-content">
          <div className="text-content">
            <span className="title"> Acesse sua conta</span>
            <span className="subtitle">
              Novo cliente? Então registre-se <Link to="/cadastro"> aqui.</Link>{" "}
            </span>
          </div>
          <div className="input-area">
            <div className="email-input">
              <section className="text-input-position">
                <label>Login</label>
                <input
                  type="text"
                  name="email"
                  placeholder="insira seu email"
                  className="text-input"
                />
              </section>
              {/* <InputText
                type={"email"}
                name={"email"}
                pHold={"Insira seu login ou email"}
                id={"email"}
                label={"Login *"}
              /> */}
            </div>
            <div className="senha-input">
              <section className="text-input-position">
                <label>digite sua senha</label>
                <input
                  type="password"
                  name="password"
                  placeholder="insira seu email"
                  className="text-input"
                />
              </section>
              {/* <InputText
                name={"password"}
                type={"password"}
                pHold={"Insira sua senha"}
                id={"password"}
                label={"Senha *"}
              /> */}
            </div>
          </div>
          <span className="subtitle">
            <Link>Esqueci minha senha</Link>
          </span>

          <div className="login-button">
            <Button nome={"Acessar Conta"} type={"submit"} />
          </div>

          <span className="subtitle login-type">
            Ou faça login com
            <div className="gmail-login-icon">
              <img src="src/assets/icon-gmail24.png" alt="" className=""></img>
            </div>
            <div className="face-login-icon">
              <img src="src/assets/icon-facebook.png" alt=""></img>
            </div>
          </span>
        </div>
      </section>
      <div className="login-body-image">
        <img src="src/assets/login-tenis-image.png" alt="" />
      </div>
    </form>
  );
};
