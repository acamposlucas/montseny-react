import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
	return (
		<header className="main__header">
			<div className="header__logo__container">
				<img
					className="header__logo__img"
					src="src/assets/logoColorida.svg"
					alt=""
				/>
			</div>
			<div className="header__container">
				<div className="header__wrapper">
					<nav>
						<ul className="main-navigation">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/reserva">Reserva</Link></li>
              <li><Link to="/acomodacoes">Acomodações</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/login">Login</Link></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
