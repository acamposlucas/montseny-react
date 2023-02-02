import * as Dialog from "@radix-ui/react-dialog";
import "./styles.scss";

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

export default function ResumoReserva({ reserva }: { reserva: Reserva }) {
	return (
			<Dialog.Root>
				<Dialog.Trigger className="dialog__trigger">Resumo</Dialog.Trigger>
				<Dialog.Portal>
					<Dialog.Overlay className="dialog__overlay" />
					<Dialog.Content className="dialog__content">
						<Dialog.Title>Resumo da reserva</Dialog.Title>
						<Dialog.Description className="dialog__description">
							<span>
								Apartamento:{" "}
								<strong>
									{reserva.quarto ? reserva.quarto.nome : ""}
								</strong>
							</span>
							<span>
								Check-in:{" "}
								<strong>
									{reserva.checkIn ? reserva.checkIn : ""}
								</strong>
							</span>
							<span>
								Check out:{" "}
								<strong>
									{reserva.checkOut ? reserva.checkOut : ""}
								</strong>
							</span>
							<span>
								Quantidade de pessoas:{" "}
								<strong>
									{reserva.quantidadeDePessoas
										? reserva.quantidadeDePessoas
										: ""}
								</strong>
							</span>
						</Dialog.Description>
						<img
							src={reserva.quarto.imgUrl}
							alt=""
						/>
						<Dialog.Close>Fechar</Dialog.Close>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
	);
}
