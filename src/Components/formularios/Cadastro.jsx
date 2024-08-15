import { Footer } from "../Footer/Footer";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import '../formularios/Cadastro.css'

export const Cadastro = () => {
  return (
    <div>
      <LoginHeader />

      <main className="form-container">
        <h3 className="form-title">Informações de entrega</h3>
        
        <div className="form-group">
          <label htmlFor="endereco">Endereço *</label>
          <input 
            className="endereco"
            type="text"
            name="endereco"
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
            name="cidade"
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
            name="cep"
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
            name="complemento"
            id="complemento"
            placeholder="Insira complemento"
            required
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};
