import "../../sass/pages/acomodacoes.scss";
import Galeria from "./Galeria";

export function Acomodacoes() {
    return (
      <div>
        <main className="main_acomodaçoes">
            <div className="acomodacoes_text">
                <h1>Nossas Acomodações</h1>
                <p>
                    Nossos Chalés são privativos e charmosos. Cada um deles tem
                    seu toque especial. Todos localizados em meio ao bosque e
                    rodeados pela natureza. São equipados com lareira, banheira
                    de hidromassagem ou ofurô, edredom e travesseiros pluma de
                    ganso e garagem privativa. Escolha o seu!
                </p>
            </div>
            <section>
                <article className="secao-acomodacoes">
                    <Galeria />
                </article>

                <article className="secao-destaque">
                    <div className="secao-destaque__info">
                        <h2>Chalé em destaque</h2>
                        <p className="secao-destaque__text">
                            Delicie-se com um banho aromático de ofurô com
                            privacidade e aconchego, escolha uma de nossas
                            cabanas! Feitas de madeira, com varanda e vista para
                            o bosque, são equipadas com tudo o que você precisa
                            para relaxar em grande estilo
                        </p>
                        <a href="reservas.html">
                            <button className="botaoEscuroMenor">
                                Reserve agora!
                            </button></a
                        >
                    </div>
                    <div>
                        <img
                            className="secao-destaque__img"
                            src="src/assets/images/chaleofuro.webp"
                            title="Chalé com Ofurô"
                        />
                        <p className="secao-acomodacoes__text">Chalé com Ofurô</p>
                    </div>
                </article>
            </section>
        </main>
      </div>
    )
}