import React, { useState } from "react";
import { Reserva } from "../@types/interfaces";
import { useLocalStorage } from "../hooks/useLocalStorage";

type PropsReservaContext = {
	reserva: Reserva;
	setReserva: React.Dispatch<React.SetStateAction<Reserva>>;
};

const DEFAULT_VALUES = {
	reserva: {
		checkIn: "",
		checkOut: "",
		quantidadeDePessoas: 0,
		quarto: {
			id: 0,
			nome: "",
			descricao: "",
			imgUrl: "",
			valor: 0,
		},
		servicosSelecionados: [],
		totalDeDias: 0,
		total: 0,
	},
	setReserva: () => {},
};

const ReservaContext = React.createContext<PropsReservaContext>(DEFAULT_VALUES);

const ReservaContextProvider = ({ children }: { children: JSX.Element }) => {
	const [reserva, setReserva] = useLocalStorage<Reserva>(
		"reserva",
		DEFAULT_VALUES.reserva
	);

	return (
		<ReservaContext.Provider value={{ reserva, setReserva }}>
			{children}
		</ReservaContext.Provider>
	);
};

export { ReservaContextProvider };
export default ReservaContext;
