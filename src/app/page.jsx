import HomeNav from "./components/homePage/HomeNav";

export default function Home() {
	return (
		<div className="homePage">
			<img src="/homePage/mountains.jpg" alt="mountains" className="mountains"/>
			<h1>️ Горный туризм</h1>
			<p className="homePage__subtitle">Краснодарский край</p>

			<div className="homePage__info">
				<div className="weather">
					<div className="wrap">
						<div className="degree-icon">
							<img src="/homePage/weather.svg" alt="weather" />
						</div>
						Погода сегодня
					</div>
					<div className="degree">+18°C</div>
				</div>

				<a href="#" className="mchs">
						<div className="wrap">
							<div className="degree-icon">
								<img src="/homePage/mchs.svg" alt="phone mchs" />
							</div>
							Экстренный вызов
						</div>
						<div className="tel">
							112
							<p>Служба спасения МЧС</p>
						</div>
				</a>
			</div>

			<HomeNav/>

			<div className="tip">
				<div className="tip-icon">
					<img src="/homePage/tip.svg" alt="tip for the day" />
				</div>

				<div className="tip-content">
					<h3>Совет дня</h3>
					<p>При походе в горы всегда берите с собой запасной комплект теплой одежды. Погода в горах может резко измениться, и температура может упасть на 10-15 градусов за несколько часов.</p>
				</div>
			</div>
		</div>
	);
}
