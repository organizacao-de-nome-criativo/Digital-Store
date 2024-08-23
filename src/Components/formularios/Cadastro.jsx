import { Footer } from "../Footer/Footer";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import "../formularios/Cadastro.css";
import { CreateUser } from "../../services/CreateUser";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { validation } from "../../../script/core/validator";
import { CepAutomatico } from "../../services/cep";

export const Cadastro = () => {
  const spinAnimation = () => {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  };
  const { cep, errorCep, ValidatoCep, mudarValorCep, address, Setaddres } =
    CepAutomatico();
  const [Mudar, Setmudar] = useState("Mostra");
  const { error, loadig, fetcha } = CreateUser();
  const { regraDeNegocio, name, cpf, senha, email } = validation();
  const { errorSenha, errorName, errorCpf, errorEmail } = regraDeNegocio;
  if (errorSenha) {
    console.log("ola mund");
  }

  return (
    <div>
      <LoginHeader />

      <main className="main-sppiner">
        <form className="form-container-sppiner" onSubmit={fetcha}>
          {spinAnimation()}
          <h1>Criar Conta</h1>
          <div className="div-global">
            <div className="form-globla-1">
              <h2 className="form-title">Informações pessoais</h2>
              <div className="form-group">
                <label htmlFor="NomeCompleto">Nome Completo *</label>
                <p className={errorName ? "ErrorActive" : ""}>
                  {" "}
                  {errorName ? errorName : ""}
                </p>
                <input
                  onChange={name}
                  className="NomeCompleto"
                  type="text"
                  name="name"
                  id="NomeCompleto"
                  placeholder="Insira seu nome"
                  required
                />
              </div>
              <p className={errorSenha ? "ErrorActive" : ""}>
                {errorSenha ? errorSenha : ""}
              </p>
              <div className="form-group variante-senha">
                <label htmlFor="NomeCompleto">crie sua senha</label>
                <p
                  className="mudar"
                  onClick={() => {
                    Mudar === "ocultar"
                      ? Setmudar("mostar")
                      : Setmudar("ocultar");
                  }}
                >
                  {Mudar}
                </p>
                <input
                  className="NomeCompleto"
                  type={Mudar === "mostar" ? "password" : "text"}
                  name="password"
                  onChange={senha}
                  id="my password"
                  placeholder="Insira seu nome"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpf">CPF *</label>
                <p className={errorCpf ? "ErrorActive" : "valido"}>
                  {errorCpf ? errorCpf : ""}
                </p>
                <input
                  onBlur={cpf}
                  className="cpf"
                  type="text"
                  name="CPF"
                  id="cpf"
                  placeholder="Insira seu cpf"
                  required
                />
              </div>
              <div className="form-group">
                <p className={errorEmail ? "ErrorActive" : ""}>
                  {errorEmail ? errorEmail : ""}
                </p>
                <label htmlFor="e-mail">E-mail *</label>
                <input
                  onChange={email}
                  className="e-mail"
                  type="text"
                  name="email"
                  id="e-mail"
                  placeholder="Insira seu e-mail"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="celular">Celular *</label>
                <input
                  className="celular"
                  type="text"
                  name="phone"
                  id="celular"
                  placeholder="Insira seu celular-"
                  required
                />
              </div>
            </div>
            <div className="form-globla-1">
              <h3 className="form-title">Informações de entrega</h3>
              <div className="form-group">
                <label htmlFor="endereco">Endereço *</label>
                <input
                  className="endereco"
                  type="text"
                  name="street"
                  id="endereco"
                  value={address.rua}
                  onChange={(evento) => {
                    Setaddres({ ...(address.rua = evento.target.value) });
                  }}
                  placeholder="Insira seu endereço"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bairro">Bairro *</label>
                <input
                  className="bairro"
                  type="text"
                  name="bairro"
                  id="bairro"
                  value={address.bairro}
                  placeholder="Insira seu bairro"
                  required
                  onChange={(event) => {
                    Setaddres({ ...(address.bairro = event.target.value) });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cidade">Cidade *</label>
                <input
                  className="cidade"
                  type="text"
                  name="city"
                  id="cidade"
                  placeholder="Insira sua cidade"
                  required
                  value={address.city}
                  onChange={(evento) => {
                    Setaddres({ ...(address.city = evento.target.value) });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cep">CEP *</label>

                {errorCep ? errorCep : ""}
                <input
                  className="cep"
                  type="text"
                  name="CEP"
                  id="cep"
                  value={cep}
                  onChange={mudarValorCep}
                  onBlur={ValidatoCep}
                  placeholder="Insira seu CEP"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cep">ESTADO*</label>

                <input
                  className="cep"
                  type="text"
                  name="estado"
                  id="estado"
                  value={address.estado}
                  placeholder="Insira seu CEP"
                  onChange={(evento) => {
                    Setaddres({ ...(address.estado = evento.target.value) });
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="complemento">Complemento *</label>
                <input
                  className="complemento"
                  type="text"
                  name="complement"
                  id="complemento"
                  placeholder="Insira complemento"
                  required
                />
              </div>
            </div>
            {loadig ? <span class="loader">teste</span> : ""}
            {error ? error.message : ""}
          </div>
          <div className="input-checbock">
            <label htmlFor="" className="label-input">
              <input type="checkbox" className="checkmark" />
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </label>
            <button type="submit"> criar conta</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};
