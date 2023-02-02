import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./styles.scss";
import ResumoReserva from "./components/ResumoReserva/ResumoReserva";

interface Quarto {
	id: number;
	nome: string;
	descricao: string;
	valor: number;
	imgUrl: string;
}

interface Reserva {
	checkIn: string;
	checkOut: string;
	quantidadeDePessoas: number;
	quarto: Quarto;
	servicos: [];
	totalDeDias: number;
	total: number;
}

const quartos: Quarto[] = [
	{
		id: 1,
		nome: "Ofurô",
		descricao:
			"Delicie-se com um banho aromático de ofurô com privacidade e aconchego, escolha uma de nossas cabanas! Feitas de madeira, com varanda e vista para o bosque, são equipadas com tudo o que você precisa para relaxar em grande estilo.",
		valor: 200,
		imgUrl: "src/assets/images/quarto_ofuro.webp",
	},
	{
		id: 2,
		nome: "Master",
		descricao:
			"O Chalé Master, com aproximadamente 50m² de requinte e aconchego, oferece quarto e hall de entrada totalmente integrados e separados da área externa. Possui uma vista única que proporcionará uma experiência inesquecível, um banheiro e lareira para os dias de frio.",
		valor: 200,
		imgUrl: "src/assets/images/quarto_master.webp",
	},
	{
		id: 3,
		nome: "Luxo Família",
		descricao:
			"O Chalé Luxo Família é ideal para famílias de até 4 pessoas. Possui uma encantadora vista do vale e do lago e uma aconchegante lareira para os dias de frio. Conta com uma linda área externa e varanda privativa.",
		valor: 200,
		imgUrl: "src/assets/images/quarto_familia.webp",
	},
];

export function ReservaPage() {
	const [reserva, setReserva] = useState<Reserva>({
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
		servicos: [],
		totalDeDias: 0,
		total: 0,
	});

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (event.target.name === "quarto") {
			const quarto = quartos.find(
				(el) => el.id === Number(event.target.value)
			)!;

			setReserva({
				...reserva,
				[event.target.name]: quarto,
			});
			console.log("reserva:", reserva);

			return;
		}

		setReserva({
			...reserva,
			[event.target.name]: event.target.value,
		});

		console.log("reserva:", reserva);
	}

	return (
		<>
			<section className="reserva__container">
				<h2>Minha Reserva</h2>
				<form
					className="reserva__formulario"
					id="formularioReserva"
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
									defaultValue={""}
									onChange={handleChange}
								/>
							</div>
							<div className="form-control">
								<label htmlFor="checkOut">Check out</label>
								<input
									type="date"
									id="checkOut"
									name="checkOut"
									defaultValue={""}
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
									defaultValue={1}
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
					<button type="submit">Finalizar reserva</button>
				</form>
			</section>
      <ResumoReserva reserva={reserva} />
		</>
	);
}
