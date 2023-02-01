import { Link } from "react-router-dom";
import "./styles.scss";

export default function Footer() {
	return (
		<footer>
			<div className="footer__container">
				<div className="footer__wrapper">
					<img
						className="footer__logo"
						src="src/assets/images/logoBranca.svg"
						alt=""
					/>
					<nav>
						<ul className="footer__navigation">
							<li>
                <Link to="/">Página principal</Link>
							</li>
							<li>
                <Link to="/contato">Contato</Link>
							</li>
							<li>
                <Link to="/reserva">Reservas</Link>
							</li>
							<li>
                <Link to="/acomodacoes">Acomodações</Link>
							</li>
							<li>
                <Link to="/admin">Administração</Link>
							</li>
						</ul>
					</nav>
					<nav>
						<ul
							role="list"
							className="footer__social"
						>
							<li>
								<a
									href="#"
									data-social="facebook"
								>
									<span className="sr-only">Facebook</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									data-social="instagram"
								>
									<span className="sr-only">Instagram</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									data-social="whatsapp"
								>
									<span className="sr-only">Whatsapp</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									data-social="email"
								>
									<span className="sr-only">Email</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<span className="copyright">
					&copy Todos os direitos reservados - 2022 - Equipe 3
				</span>
			</div>
		</footer>
	);
}
