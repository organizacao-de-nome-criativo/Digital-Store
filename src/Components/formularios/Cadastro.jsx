import { Footer } from "../Footer/Footer";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import "../formularios/Cadastro.css";
import { CreateUser } from "../../services/CreateUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Cadastro = () => {
  const [senha, Setsenha] = useState("password");
  const [Mudar, Setmudar] = useState("Mostar");

  return (
    <div>
      <LoginHeader />

      <main className="form-container">
        <h1>Criar Conta</h1>
        <form onSubmit={CreateUser}>
          <h2 className="form-title">Informações pessoais</h2>
          <div className="form-group">
            <label htmlFor="NomeCompleto">Nome Completo *</label>
            <input
              className="NomeCompleto"
              type="text"
              name="name"
              id="NomeCompleto"
              placeholder="Insira seu nome"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="NomeCompleto">crie sua senha</label>
            <p>{MUdar}</p>

            <input
              className="NomeCompleto"
              type={senha}
              name="password"
              id="NomeCompleto"
              placeholder="Insira seu nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF *</label>
            <input
              className="cpf"
              type="text"
              name="CPF"
              id="cpf"
              placeholder="Insira seu cpf"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="e-mail">E-mail *</label>
            <input
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

          <h3 className="form-title">Informações de entrega</h3>

          <div className="form-group">
            <label htmlFor="endereco">Endereço *</label>
            <input
              className="endereco"
              type="text"
              name="street"
              id="endereco"
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
              placeholder="Insira seu bairro"
              required
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="cep">CEP *</label>
            <input
              className="cep"
              type="text"
              name="CEP"
              id="cep"
              placeholder="Insira seu CEP"
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

          <button type="submit"> enviar</button>
        </form>
      </main>

      <Footer />
    </div>
  );
};
