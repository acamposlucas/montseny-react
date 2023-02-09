import "./styles.scss";

interface CupomProps {
	cupomDesconto: string;
}

export function Cupom({ cupomDesconto }: CupomProps) {
	return (
		<div className="cupom__container">
			<strong className="cupom__title">Cupom 10% de desconto!</strong>
			<strong className="cupom__code">{cupomDesconto}</strong>
		</div>
	);
}
