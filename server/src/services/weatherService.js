const weatherDescriptions = {
	0: "Ясно",
	1: "Преимущественно ясно",
	2: "Переменная облачность",
	3: "Пасмурно",
	45: "Туман",
	48: "Изморозь и туман",
	51: "Слабая морось",
	53: "Морось",
	55: "Сильная морось",
	61: "Слабый дождь",
	63: "Дождь",
	65: "Сильный дождь",
	71: "Слабый снег",
	73: "Снег",
	75: "Сильный снег",
	80: "Кратковременный дождь",
	81: "Ливень",
	82: "Сильный ливень",
	95: "Гроза",
	96: "Гроза с градом",
	99: "Сильная гроза с градом",
};

function toNumber(value, fallback) {
	const number = Number(value);
	return Number.isFinite(number) ? number : fallback;
}

function createFallbackWeather() {
	return {
		location: "Краснодарский край",
		temperature: null,
		apparentTemperature: null,
		humidity: null,
		windSpeed: null,
		description: "Погода временно недоступна",
		isLive: false,
		updatedAt: new Date().toISOString(),
	};
}

async function getCurrentWeather(query = {}) {
	const latitude = toNumber(query.lat || query.latitude, 45.0355);
	const longitude = toNumber(query.lon || query.longitude, 38.9753);
	const url = new URL("https://api.open-meteo.com/v1/forecast");
	url.searchParams.set("latitude", latitude);
	url.searchParams.set("longitude", longitude);
	url.searchParams.set(
		"current",
		[
			"temperature_2m",
			"apparent_temperature",
			"relative_humidity_2m",
			"weather_code",
			"wind_speed_10m",
		].join(",")
	);
	url.searchParams.set("timezone", "auto");

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 4500);

	try {
		const response = await fetch(url, { signal: controller.signal });

		if (!response.ok) {
			throw new Error(`Weather API responded with ${response.status}`);
		}

		const data = await response.json();
		const current = data.current || {};
		const weatherCode = current.weather_code;

		return {
			location: "Краснодарский край",
			temperature: Math.round(current.temperature_2m),
			apparentTemperature: Math.round(current.apparent_temperature),
			humidity: current.relative_humidity_2m,
			windSpeed: current.wind_speed_10m,
			description: weatherDescriptions[weatherCode] || "Погодные данные обновлены",
			isLive: true,
			updatedAt: current.time || new Date().toISOString(),
		};
	} catch (error) {
		return createFallbackWeather();
	} finally {
		clearTimeout(timeout);
	}
}

module.exports = { getCurrentWeather };
