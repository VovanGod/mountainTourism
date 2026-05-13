"use client";

import { useEffect, useState } from "react";
import { weatherApi } from "@/entities/weather/api/weatherApi";
import { CloudIcon } from "@/shared/ui/icons/Icons";
import styles from "./WeatherWidget.module.scss";

const fallbackWeather = {
	temperature: null,
	apparentTemperature: null,
	humidity: null,
	windSpeed: null,
	description: "Загрузка погоды...",
	isLive: false,
};

export function WeatherWidget() {
	const [weather, setWeather] = useState(fallbackWeather);

	useEffect(() => {
		const controller = new AbortController();

		weatherApi
			.getCurrent({ signal: controller.signal })
			.then(setWeather)
			.catch(() => {
				setWeather({
					...fallbackWeather,
					description: "Погода временно недоступна",
				});
			});

		return () => controller.abort();
	}, []);

	return (
		<article className={styles.card}>
			<div className={styles.header}>
				<span className={styles.icon}>
					<CloudIcon size={24} />
				</span>
				<span>Погода сегодня</span>
			</div>
			<strong>
				{weather.temperature === null ? "--" : `${weather.temperature}°C`}
			</strong>
			<div className={styles.details}>
				<span>{weather.description}</span>
				{weather.apparentTemperature !== null && (
					<span>Ощущается как {weather.apparentTemperature}°C</span>
				)}
				{weather.windSpeed !== null && <span>Ветер {weather.windSpeed} км/ч</span>}
				{weather.humidity !== null && <span>Влажность {weather.humidity}%</span>}
			</div>
			<small>{weather.isLive ? "Данные Open-Meteo" : "Резервный режим"}</small>
		</article>
	);
}
