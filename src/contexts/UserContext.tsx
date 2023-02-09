import React from "react";
import { User } from "../@types/interfaces/user";
import { useLocalStorage } from "../hooks/useLocalStorage";

type PropsUserContext = {
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
  validateLogin: (payload: { email: string; senha: string }) => void;
};

const DEFAULT_VALUES = {
	user: {
		nome: null,
	},
	setUser: () => {},
	validateLogin: () => {},
};

const UserContext = React.createContext<PropsUserContext>(DEFAULT_VALUES);

const UserContextProvider = ({ children }: { children: JSX.Element }) => {
	const [user, setUser] = useLocalStorage<User>("user", DEFAULT_VALUES.user);

	function validateLogin(payload: { email: string; senha: string }) {
		if (payload.email === "email@email.com" && payload.senha === "123") {
			setUser({ nome: "Usuário" });
		}
	}

	return (
		<UserContext.Provider value={{ user, setUser, validateLogin }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContextProvider };
export default UserContext;
