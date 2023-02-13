import { Reserva } from "../@types/interfaces";

export function calculaTotalDeDias(reserva: Reserva) {
  const diferencaEmMs =
    new Date(reserva.checkOut).valueOf() -
    new Date(reserva.checkIn).valueOf();
  const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);
  return diferencaEmDias;
}