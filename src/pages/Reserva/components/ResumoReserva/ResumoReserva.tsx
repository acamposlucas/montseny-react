import * as Dialog from "@radix-ui/react-dialog";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import ReservaContext from "../../../../contexts/ReservaContext";
import { calculaTotalDaReserva } from "../../../../helpers/calculaTotalDaReserva";
import "./styles.scss";

export default function ResumoReserva() {
	const { reserva } = useContext(ReservaContext);

	return (
		<Dialog.Root>
			<Dialog.Trigger className="dialog__trigger">
				<span className="sr-only">Ver resumo da reserva</span>
				<BookmarkFilledIcon />
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="dialog__overlay" />
				<Dialog.Content
					className="dialog__content"
					aria-describedby={undefined}
				>
					<Dialog.Title>Resumo da reserva</Dialog.Title>
					<div className="dialog__description">
						<h3>{reserva.quarto.nome}</h3>
						<figure className="img__container">
							<img
								src={reserva.quarto.imgUrl}
								alt=""
							/>
							<figcaption>{reserva.quarto.descricao}</figcaption>
						</figure>
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
					</div>
          {reserva.servicosSelecionados.length > 0
          ? (
					<ul>
						<li>
							Serviços adicionais:
							<ul>
								{reserva.servicosSelecionados.map((servico) => (
									<li key={servico.id}>{servico.nome}</li>
								))}
							</ul>
						</li>
					</ul>
          ) : (
            null
          )}
          <div>
            <strong>Total da reserva: </strong>
            <strong>{Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL"
            }).format(calculaTotalDaReserva(reserva))}</strong>
          </div>
					<Dialog.Close>Fechar</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
