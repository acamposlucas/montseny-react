import React, { FormEvent, useContext, useRef, useState } from "react";
import ResumoReserva from "./components/ResumoReserva/ResumoReserva";
import { Quarto } from "../../@types/interfaces";
import "./styles.scss";
import ReservaContext from "../../contexts/ReservaContext";
import { useNavigate } from "react-router-dom";

const quartos: Quarto[] = [
	{
		id: 1,
		nome: "Ofurô",
		descricao:
			"Delicie-se com um banho aromático de ofurô com privacidade e aconchego, escolha uma de nossas cabanas! Feitas de madeira, com varanda e vista para o bosque, são equipadas com tudo o que você precisa para relaxar em grande estilo.",
		valor: 900,
		imgUrl: "src/assets/images/quarto_ofuro.webp",
	},
	{
		id: 2,
		nome: "Master",
		descricao:
			"O Chalé Master, com aproximadamente 50m² de requinte e aconchego, oferece quarto e hall de entrada totalmente integrados e separados da área externa. Possui uma vista única que proporcionará uma experiência inesquecível, um banheiro e lareira para os dias de frio.",
		valor: 800,
		imgUrl: "src/assets/images/quarto_master.webp",
	},
	{
		id: 3,
		nome: "Luxo Família",
		descricao:
			"O Chalé Luxo Família é ideal para famílias de até 4 pessoas. Possui uma encantadora vista do vale e do lago e uma aconchegante lareira para os dias de frio. Conta com uma linda área externa e varanda privativa.",
		valor: 700,
		imgUrl: "src/assets/images/quarto_familia.webp",
	},
];

const servicos = [
	{ id: "cofre", nome: "Cofre", valor: 20 },
	{ id: "pet", nome: "Pet", valor: 30 },
	{ id: "almoco", nome: "Almoço", valor: 40 },
	{ id: "massagem", nome: "Massagem", valor: 50 },
	{ id: "banheiro", nome: "Banheiro", valor: 60 },
];

export function ReservaPage() {
  const navigate = useNavigate();
	const { reserva, setReserva } = useContext(ReservaContext);
	const [open, setOpen] = React.useState(false);
  const discountRef = useRef<HTMLInputElement>(null);

	function calculaTotalDeDias() {
		const diferencaEmMs =
			new Date(reserva.checkOut).valueOf() -
			new Date(reserva.checkIn).valueOf();
		const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);
		return diferencaEmDias;
	}

	function calculaTotalDaReserva() {
		let total = 0;
		let valorServicos = 0;
		const dias = calculaTotalDeDias();
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

	function handleOpenServicosExtras() {
		setOpen((state) => !state);
	}

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

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (event.target.name === "quarto") {
			const quarto = quartos.find(
				(el) => el.id === Number(event.target.value)
			)!;
			setReserva({
				...reserva,
				[event.target.name]: quarto,
			});
			return;
		}

		if (event.target.name === "servicos") {
			const servicoSelecionado = servicos.find(
				(el) => el.id === event.target.value
			)!;
			if (event.target.checked) {
				const servicosSelecionados = [
					...reserva.servicosSelecionados,
					servicoSelecionado,
				];
				setReserva({
					...reserva,
					servicosSelecionados,
				});
			} else {
				const servicosSelecionados =
					reserva.servicosSelecionados.filter(
						(servico) => servico.id !== servicoSelecionado.id
					);
				setReserva({
					...reserva,
					servicosSelecionados,
				});
			}
			console.log(reserva);
			return;
		}

		setReserva({
			...reserva,
			[event.target.name]: event.target.value,
		});
	}

	function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setReserva({
		  ...reserva,
		  totalDeDias: calculaTotalDeDias(),
		  total: calculaTotalDaReserva(),
		});
		console.log(reserva);
    navigate("/finalizarReserva")
	}

	return (
		<>
			<section className="reserva__container">
				<h2>Minha Reserva</h2>
				<form
					className="reserva__formulario"
					id="formularioReserva"
					onSubmit={handleOnSubmit}
				>
					<fieldset>
						<legend>Datas e quantidade de pessoas</legend>
						<div className="form-group">
							<div className="form-control">
								<label htmlFor="checkIn">Check in</label>
								<input
									type="date"
									id="checkIn"
									name="checkIn"
									value={reserva.checkIn}
									onChange={handleChange}
								/>
							</div>
							<div className="form-control">
								<label htmlFor="checkOut">Check out</label>
								<input
									type="date"
									id="checkOut"
									name="checkOut"
									value={reserva.checkOut}
									onChange={handleChange}
								/>
							</div>
							<div className="form-control">
								<label htmlFor="quantidadeDePessoas">
									Quantidade de pessoas
								</label>
								<input
									type="number"
									id="quantidadeDePessoas"
									name="quantidadeDePessoas"
									min={1}
									max={4}
									value={reserva.quantidadeDePessoas}
									onChange={handleChange}
								/>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>Quartos</legend>
						<div
							className="quartos__container"
							role="radiogroup"
						>
							{quartos.map((quarto) => (
								<div
									className="quarto__card"
									key={quarto.id}
								>
									<div
										className="image__container"
										key={quarto.id}
									>
										<img
											src={quarto.imgUrl}
											alt=""
										/>
									</div>
									<div className="quarto__content">
										<h2>{quarto.nome}</h2>
										<p>{quarto.descricao}</p>
										<strong>
											{Intl.NumberFormat("pt-br", {
												style: "currency",
												currency: "BRL",
											}).format(quarto.valor)}
										</strong>
										<div className="form-control">
											<input
												type="radio"
												id={quarto.nome.toLowerCase()}
												name="quarto"
												value={quarto.id}
												onChange={handleChange}
												checked={
													reserva.quarto.id ===
													quarto.id
												}
											/>
											<label
												htmlFor={quarto.nome.toLowerCase()}
											>
												{quarto.nome}
											</label>
										</div>
									</div>
								</div>
							))}
						</div>
					</fieldset>
					<fieldset>
						<legend className="sr-only">Serviços Extras</legend>
						<button
							className=""
							type="button"
							onClick={handleOpenServicosExtras}
						>
							Adicionar serviços extras
						</button>
						{open && (
							<ul className="checkbox__list">
								{servicos.map((servico) => (
									<li
										key={servico.id}
										className="checkbox__container"
									>
										<input
											className="checkbox"
											type="checkbox"
											name="servicos"
											value={servico.id}
											onChange={handleChange}
											checked={reserva.servicosSelecionados.some(
												({ id }) => servico.id === id
											)}
										/>
										{servico.nome}
									</li>
								))}
							</ul>
						)}
					</fieldset>
          <fieldset>
            <legend>Desconto</legend>
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
					<button type="submit">Finalizar reserva</button>
				</form>
			</section>
			<ResumoReserva />
		</>
	);
}
