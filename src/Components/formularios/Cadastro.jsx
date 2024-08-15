import { Footer } from "../Footer/Footer";
import { LoginHeader } from "../LoginHeader/LoginHeader";
import '../formularios/Cadastro.css'

export const Cadastro = () => {
  return (
    <div>
      <LoginHeader />

      <main>
        <h3 className="container">Criar conta</h3>
      </main>

      <Footer />
    </div>
  );
};
