import "./styles.scss";

export function SobrePage() {
	return (
		<>
			<div className="hero-image"></div>
			<div className="main__container">
				<section className="hero__content">
					<h1 className="text-cursive">
						Você vai se encantar com o Hotel Montseny
					</h1>
					<p>
						Um espaço de paz e tranquilidade em meio à natureza
						exuberante do sul de Minas Gerais com área de lazer
						completa. Além da Pousada, temos o Spa para que você
						tenha uma experiência completa de relaxamento. Piscina
						aquecida, banhos de ofurô, jacuzzi com hidromassagem e
						muito mais!
					</p>
				</section>
				<section className="chales__section">
					<h2 className="text-cursive">
						Nossos chalés fazem uma conexão entre você e a natureza
					</h2>
					<p>
						A sensação de imersão na natureza com exclusividade,
						privacidade e uma vista incrível do pôr do sol. Todas as
						acomodações dispõem de uma varanda privativa com um
						ofurô exclusivo. O cenário ideal para se conectar com a
						natureza e vivenciar momentos incríveis com o seu amor.
					</p>
					<div className="main__gallery">
						{[
							{
								id: 1,
								imgUrl: "src/assets/images/ofuro-bangalo.jpg",
								label: "Ofurô",
							},
							{
								id: 2,
								imgUrl: "src/assets/images/caiaque-em-brotas.jpg",
								label: "Caiaque",
							},
							{
								id: 3,
								imgUrl: "src/assets/images/lanchonete-cassarova.jpg",
								label: "Lanchonete Cassorova",
							},
						].map(({ id, imgUrl, label }) => (
							<img
								key={id}
								src={imgUrl}
								alt={label}
							/>
						))}
					</div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1545.6680939272542!2d-46.023161716080494!3d-22.86761714142342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc103f1694fca5%3A0xef5416e893de18e0!2sMonte%20Verde%2C%20Camanducaia%20-%20MG%2C%2037650-000!5e0!3m2!1spt-BR!2sbr!4v1671414478909!5m2!1spt-BR!2sbr"
						className="map"
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<a
						className="botaoEscuroMaior2"
						href="../../pages/public/contato.html"
					>
						Entre em contato para mais informações!
					</a>
				</section>
			</div>
		</>
	);
}
