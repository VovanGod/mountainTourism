export default function Home() {
	return (
		<div className="homePage">
			<h1>️ Горный туризм</h1>
			<p className="homePage__subtitle">Краснодарский край</p>

			<div className="homePage__info">
				<div className="weather">
					<div className="wrap">
						<div className="degree-icon">
							<img src="" alt="" />
						</div>
						Погода сегодня
						<div className="degree">+18°C</div>
					</div>
				</div>

				<a href="#" className="mchs">
					<div className="weather">
						<div className="wrap">
							<div className="degree-icon">
								<img src="" alt="" />
							</div>
							Экстренный вызов
							<div className="tel">112</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}
