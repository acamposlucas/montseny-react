import { Link } from "react-router-dom";
import "../../sass/pages/login.scss";


export function LoginPage() {
  return (
    <div>
        <div className="flex-container">
            <div className="formulario-container">
                <main>
                <form action="../../index.html" method="post" className="formulario">
                    <h2>Login</h2>

                    <div className="input-container">
                        <label className="labelEmail" htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="input-container">
                        <label className="labelsenha" htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" />
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
