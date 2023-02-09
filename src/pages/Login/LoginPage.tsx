import { FormEvent, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import "../../sass/pages/login.scss";

export function LoginPage() {
  const { validateLogin } = useContext(UserContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const senhaRef = useRef<HTMLInputElement>(null);

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (emailRef.current !== null && senhaRef.current !== null) {
      const user = {
        email: emailRef.current.value,
        senha: senhaRef.current.value
      }

      validateLogin(user);
    }
  }

  return (
    <div>
        <div className="flex-container">
            <div className="formulario-container">
                <main>
                <form action="" className="formulario" onSubmit={handleFormSubmit}>
                    <h2>Login</h2>

                    <div className="input-container">
                        <label className="labelEmail" htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" ref={emailRef}/>
                    </div>

                    <div className="input-container">
                        <label className="labelsenha" htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" ref={senhaRef} />
                    </div>

                    <div className="botoes">
                        <a href="index.html"
                            ><button className="botaoEscuroMenor">Entrar</button></a
                        >
                        <a href="index.html" className="links"
                            >Esqueci minha senha</a
                        >
                        <Link className="links" to="/cadastro">Cadastrar-se</Link>
                    </div>
                </form>
                </main>
            </div>
            <img src="src/assets/login.webp" className="imagem-login" alt="" />
        </div>

    </div>
  );
}
