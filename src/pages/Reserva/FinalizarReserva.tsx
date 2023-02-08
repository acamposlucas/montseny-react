import { useContext, useRef, useState } from "react";
import ReservaContext from "../../contexts/ReservaContext";

export function FinalizarReserva() {
	const { reserva, setReserva } = useContext(ReservaContext);
	const discountRef = useRef<HTMLInputElement>(null);

	function handleApplyDiscount(e: React.MouseEvent) {
		if (discountRef.current !== null) {
			if (discountRef.current.value === "CUPOM10") {
				const total = reserva.total - 0.1 * reserva.total;

				setReserva({
					...reserva,
					total,
				});
				console.log(reserva.total);
			}
		}
	}
	return (
		<>
			<form>
				<fieldset>
					<legend>Confirme sua Reserva</legend>
					<input
						type="date"
						name=""
						id=""
						defaultValue={reserva.checkIn}
						readOnly
					/>
					<input
						type="date"
						name=""
						id=""
						defaultValue={reserva.checkOut}
						readOnly
					/>
					<input
						type="number"
						name=""
						id=""
						defaultValue={reserva.quantidadeDePessoas}
						readOnly
					/>
					<div>
						<strong>Quarto selecionado</strong>
					</div>
					<ul>
						<li>
							Serviços extras
							<ul>
								<li>Item 1</li>
							</ul>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<legend>Cupom de desconto</legend>
					<input
						type="text"
						name=""
						id=""
						ref={discountRef}
					/>
					<button
						type="button"
						onClick={handleApplyDiscount}
					>
						Aplicar desconto
					</button>
				</fieldset>
				<fieldset>
					<legend>Valor total</legend>
					<strong>{reserva.total}</strong>
				</fieldset>
				<button type="submit">Confirmar reserva</button>
			</form>
		</>
	);
}
