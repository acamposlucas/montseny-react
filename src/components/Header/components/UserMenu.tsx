import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";
import "./styles.scss";

export function UserMenu() {
	const { user, handleUserLogout } = useContext(UserContext);

	return (
		<li className="user__menu">
			<Link to="#">Olá, {user?.nome}</Link>
			<button
				type="button"
				onClick={handleUserLogout}
			>
				Sair
			</button>
		</li>
	);
}
