import "../../sass/pages/acomodacoes.scss";

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
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/chaleofuro.webp"
                            title="Chalé com Ofurô"
                        />
                        <p className="secao-acomodacoes__text">Chalé com Ofurô</p>
                    </div>
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/master.webp"
                            title="Chalé Master com Hidromassagem"
                        />
                        <p className="secao-acomodacoes__text">Chalé Master</p>
                    </div>
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/familia.webp"
                            title="Chalés Luxo Família"
                        />
                        <p className="secao-acomodacoes__text">Chalés Luxo Família</p>
                    </div>
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/prime.png"
                            title="Chalé Prime"
                        />
                        <p className="secao-acomodacoes__text">Chalé Prime</p>
                    </div>
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/deluxe.png"
                            title="Chalé Deluxe"
                        />
                        <p className="secao-acomodacoes__text">Chalé Deluxe</p>
                    </div>
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/mezanino.jpg"
                            title="Chalé luxo Mezanino"
                        />
                        <p className="secao-acomodacoes__text">Chalé luxo Mezanino</p>
                    </div>
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/refúgio 1.webp"
                            title="Chalé Refúgio"
                        />
                        <p className="secao-acomodacoes__text">Chalé Refúgio</p>
                    </div>
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/standard.webp"
                            title="Chalé Luxo"
                        />
                        <p className="secao-acomodacoes__text">Chalé Standard</p>
                    </div>
                    <div>
                        <img
                            className="secao-acomodacoes__img"
                            src="src/assets/images/Minichalé.webp"
                            title="Minichalé"
                        />
                        <p className="secao-acomodacoes__text">Minichalé</p>
                    </div>
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