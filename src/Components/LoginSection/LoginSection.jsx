import { Link } from 'react-router-dom';
import './loginSection.css'
import { InputText } from '../Input/InputText';
import { Button } from '../Button/Button';

export const LoginSection = () => {

  return (
    <form  method='POST' className='login-flex-section'>
      <section className="login-area">
        <div className="login-area-content">
          <div className="text-content">
            <span className='title'> Acesse sua conta</span>
            <span className='subtitle'>Novo cliente? Então registre-se <Link>aqui.</Link></span>
          </div>
          <div className="input-area">
            <div className="email-input">

              <InputText
                type={'email'}
                pHold={'Insira seu login ou email'}
                id={'email'}
                label={'Login *'}
              />
            </div>
            <div className="senha-input">

              <InputText 
                type={'password'} 
                pHold={'Insira sua senha'} 
                id={'password'}
                label={'Senha *'}
              />
            </div>
          </div>
          <span className='subtitle'><Link>Esqueci minha senha</Link></span>
          <div className="login-button">
            <Button nome={'Acessar Conta'} type={'submit'}/>
          </div>
          <span className='subtitle login-type'>Ou faça login com 
          <img src="src/assets/icon-gmail24.png" alt="" className='login-icons'></img>
          </span>
        </div>
      </section>
      <div className="login-body-image">
        <img src="src/assets/login-tenis-image.png" alt="" />
      </div>
    </form>
  );
};