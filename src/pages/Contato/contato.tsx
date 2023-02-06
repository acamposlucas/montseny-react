import { Link } from "react-router-dom";
import "../../sass/pages/contato.scss";


export function ContactPage() {
  return (
               <div className="contact-form">
            <div>
                <h1>Fale com a gente!<br />Teremos prazer em atendê-lo</h1>
                <h4>
                    Este canal é dedicado exclusivamente para que os
                    visitantes enviem dúvidas, sugestões, reclamações ou
                    elogios sobre o hotel Montseny. Caso queira realizar sua
                    reserva <a href="reservas.html"><u>clique aqui.</u></a>
                </h4>
            </div>
            <p className="failure">Ops...a mensagem não pode ser enviada.</p>
            <p className="success">Mensagem enviada com sucesso. Obrigado!</p>

            <form className="formularioContato" method="post" action="/">
                <div>
                    <input type="text" className="name" name="name" value="" placeholder="Nome completo" required="required"
                        tabindex="1" autofocus="autofocus" />
                    </label>
                </div>
                <div> <input type="email" className="email" name="email" value="" placeholder="Seu E-mail" tabindex="2"
                        required="required" />
                    </label>
                </div>
                <div>
                    <input type="tel" className="telefone" name="telefone" value="" placeholder="Telefone - (DDD) + Número"
                        tabindex="2" required="required" />
                    </label>
                </div>
                <div>
                    <select className="assunto" name="assunto" tabindex="4">
                        <option selected disabled value="">
                            Selecione
                        </option>
                        <option>Cancelamento de Reserva</option>
                        <option>Ouvidoria</option>
                        <option>Departamento Financeiro</option>
                    </select>
                    </label>
                </div>
                <div>

                    <textarea className="message" name="message" placeholder="Escreva sua mensagem aqui" tabindex="5"
                        required="required"></textarea>
                    </label>
                </div>
                <div>
                    <button name="submit" type="submit" className="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>

      }