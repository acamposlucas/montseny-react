import { Quarto } from "./quarto";
import { Servico } from "./servico";

export interface Reserva {
	checkIn: string;
	checkOut: string;
	quantidadeDePessoas: number;
	quarto: Quarto;
	servicosSelecionados: Servico[];
	totalDeDias: number;
	total: number;
}
