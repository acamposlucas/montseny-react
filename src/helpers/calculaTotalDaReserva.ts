import { Reserva } from "../@types/interfaces";
import { calculaTotalDeDias } from "./calculaTotalDeDias";

export function calculaTotalDaReserva(reserva: Reserva) {
  let total = 0;
  let valorServicos = 0;
  const dias = calculaTotalDeDias(reserva);
  const valorQuarto = reserva.quarto.valor;
  if (reserva.servicosSelecionados.length > 0) {
    valorServicos = reserva.servicosSelecionados.reduce(
      (accumulator, { valor }) => accumulator + valor,
      0
    );
  }
  total = valorQuarto * dias + valorServicos;
  return total;
}