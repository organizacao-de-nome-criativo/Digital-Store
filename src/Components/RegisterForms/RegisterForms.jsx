import "./registerForms.css";
import { InputText } from "../Input/InputText";
import { Button } from "../Button/Button";
export const RegisterForms = () => {
  return (
    <section className="register-form-section">
      <span className="title">Criar Conta</span>
      <form action="" className="register-form" method="POST">
        <div className="form-user-area">
          <span className="subtitle">Informações Pessoais</span>
          <div className="register-input-user">
            <InputText
              label={"Nome Completo *"}
              type={"text"}
              pHold={"Insira seu nome"}
              id={"fullName"}
            />
          </div>
          <div className="register-input-user">
            <InputText
              label={"CPF *"}
              type={"number"}
              pHold={"Insira seu CPF"}
              id={"cpf"}
            />
          </div>
          <div className="register-input-user">
            <InputText
              label={"E-mail *"}
              type={"email"}
              pHold={"Insira seu email"}
              id={"emailReg"}
            />
          </div>
          <div className="register-input-user">
            <InputText
              label={"Senha *"}
              type={"password"}
              pHold={"Insira sua senha"}
              id={"senhaReg"}
            />
          </div>
        </div>
        <div className="form-address-area">
          <span className="subtitle">Informações de Entrega</span>
          <div className="register-input-address">
            <InputText
              label={"Endereço *"}
              type={"text"}
              pHold={"Insira seu endereço"}
              id={"address"}
            />
          </div>
          <div className="register-input-address">
            <InputText
              label={"Cidade *"}
              type={"text"}
              pHold={"Insira sua cidade"}
              id={"city"}
            />
          </div>
          <div className="register-input-address">
            <InputText
              label={"Bairro *"}
              type={"text"}
              pHold={"Insira seu bairro"}
              id={"neighborhood"}
            />
          </div>
          <div className="register-input-address">
            <InputText
              label={"CEP *"}
              type={"number"}
              pHold={"Insira seu CEP"}
              id={"cep"}
            />
          </div>
          <div className="register-input-address">
            <InputText
              label={"Complemento *"}
              type={"password"}
              pHold={"Insira sua senha"}
              id={"complement"}
            />
          </div>
        </div>
        <div className="register-form-submit-area">
          <div className="checkbox-area">
            <label htmlFor="check" className="custom-checkbox">
              <input type="checkbox" name="" id="check" />
              <span className="checkmark"></span>
            </label>

            <span className="subtitle">
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </span>
          </div>
          <div className="button-position">
            <Button nome={"Criar Conta"} type={'submit'}/>
          </div>
          <span></span>
        </div>
      </form>
    </section>
  );
};
