import { Link } from "react-router-dom";
import "../../sass/pages/contato.scss";

export default function ContactPage() {
	return (
		<div className="contact-form">
			<div>
				<h1>
					Fale com a gente!
					<br />
					Teremos prazer em atendê-lo
				</h1>
				<h4>
					Este canal é dedicado exclusivamente para que os visitantes
					enviem dúvidas, sugestões, reclamações ou elogios sobre o
					hotel Montseny. Caso queira realizar sua reserva{" "}
					<Link to="/reserva">clique aqui.</Link>
				</h4>
			</div>
			<p className="failure">Ops...a mensagem não pode ser enviada.</p>
			<p className="success">Mensagem enviada com sucesso. Obrigado!</p>

			<form
				className="formularioContato"
				method="post"
				action="/"
			>
				<div>
					<input
						type="text"
						className="name"
						name="name"
						value=""
						placeholder="Nome completo"
						required={true}
						tabIndex={1}
						autoFocus={true}
					/>
				</div>
				<div>
					{" "}
					<input
						type="email"
						className="email"
						name="email"
						value=""
						placeholder="Seu E-mail"
						tabIndex={2}
						required={true}
					/>
				</div>
				<div>
					<input
						type="tel"
						className="telefone"
						name="telefone"
						value=""
						placeholder="Telefone - (DDD) + Número"
						tabIndex={3}
						required={true}
					/>
				</div>
				<div>
					<select
						className="assunto"
						name="assunto"
						tabIndex={4}
					>
						<option
							selected
							disabled
							value=""
						>
							Selecione
						</option>
						<option>Cancelamento de Reserva</option>
						<option>Ouvidoria</option>
						<option>Departamento Financeiro</option>
					</select>
				</div>
				<div>
					<textarea
						className="message"
						name="message"
						placeholder="Escreva sua mensagem aqui"
						tabIndex={5}
						required={true}
					></textarea>
				</div>
				<div>
					<button
						name="submit"
						type="submit"
						className="submit"
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
}
