import "../../sass/pages/cadastro.scss";

export function CadastroPage () {
    return (
         <main>
        <div className="formulario-container">
            <form className="formulario-cadastro" action="../../index.html" method="post">
                <h2 className="mensagem-cadastro">Bem vindo a tela de cadastro</h2>
                <div className="input-container">

                    <input className="input-cadastro" type="text" name="nomeCompleto" id="nomeCompleto" placeholder="Nome Completo" />
                </div>
                <div className="input-container">

                    <input className="input-cadastro" type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="input-container">

                    <input className="input-cadastro" type="password" name="senha" id="senha" placeholder="Senha" />
                </div>
                <div className="input-container">

                    <input className="input-cadastro" type="password" name="confirmarsenha" placeholder="Confirmar Senha" />
                </div>
                <div className="input-container">

                    <input className="input-cadastro" type="text" name="cpf" id="cpf" placeholder="CPF" />
                </div>
                <div className="input-container">

                    <input className="input-cadastro" type="text" name="telefone" id="telefone" placeholder="Telefone" />
                </div>
                <div className="input-container">

                    <input className="input-cadastro" type="month" name="date" id="date" placeholder="Data de Nascimento" />
                </div>
                <div className="input-container">

                    <input className="input-cadastro" type="text" name="cep" id="cep" placeholder="CEP"  />
                </div>

                <div className="botao-formulario">
                    <button className="botaoEscuroMenor">Finalizar</button>
                </div>
                
            </form>
        </div>
        </main>
    )
}