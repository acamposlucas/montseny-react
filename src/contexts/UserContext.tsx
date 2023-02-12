import React from "react";
import { User } from "../@types/interfaces/user";
import { useLocalStorage } from "../hooks/useLocalStorage";

type PropsUserContext = {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
  validateLogin: (payload: { email: string; senha: string }) => void;
	handleUserLogout: () => void;
};

const UserContext = React.createContext<PropsUserContext>({} as PropsUserContext);

const UserContextProvider = ({ children }: { children: JSX.Element }) => {
	const [user, setUser] = useLocalStorage<User | null>("user", null);

	function validateLogin(payload: { email: string; senha: string }) {
		if (payload.email === "email@email.com" && payload.senha === "123") {
			setUser({ nome: "Usuário" });
		}
	}

	function handleUserLogout() {
		setUser(state => null);
	}

	return (
		<UserContext.Provider value={{ user, setUser, validateLogin, handleUserLogout }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContextProvider };
export default UserContext;
