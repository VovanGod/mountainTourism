const gpxTracksByTitle = {
	"Гора Фишт": [
		{ lat: 43.9934, lon: 39.8977, ele: 1590, name: "Приют Фишт" },
		{ lat: 43.9921, lon: 39.8956, ele: 1618, name: "Выход от приюта" },
		{ lat: 43.9907, lon: 39.8939, ele: 1650, name: "Луговая тропа" },
		{ lat: 43.9891, lon: 39.8918, ele: 1696, name: "Ручей у тропы" },
		{ lat: 43.9874, lon: 39.8894, ele: 1742, name: "Начало подъема" },
		{ lat: 43.9857, lon: 39.8872, ele: 1810, name: "Серпантин 1" },
		{ lat: 43.9845, lon: 39.8847, ele: 1884, name: "Серпантин 2" },
		{ lat: 43.9828, lon: 39.8828, ele: 1950, name: "Каменистый склон" },
		{ lat: 43.9811, lon: 39.8805, ele: 2028, name: "Осыпной участок" },
		{ lat: 43.9793, lon: 39.8782, ele: 2104, name: "Вид на ледник" },
		{ lat: 43.9778, lon: 39.8761, ele: 2186, name: "Снежник" },
		{ lat: 43.9763, lon: 39.8742, ele: 2260, name: "Плечо маршрута" },
		{ lat: 43.9748, lon: 39.8726, ele: 2325, name: "Контрольная точка" },
		{ lat: 43.9734, lon: 39.8708, ele: 2386, name: "Выход к панораме" },
		{ lat: 43.9722, lon: 39.8691, ele: 2448, name: "Финишный подъем" },
		{ lat: 43.9709, lon: 39.8674, ele: 2515, name: "Финиш под вершиной" },
	],
	"Плато Лаго-Наки": [
		{ lat: 44.0843, lon: 40.0082, ele: 1760, name: "КПП Лаго-Наки" },
		{ lat: 44.0832, lon: 40.0103, ele: 1768, name: "Начало тропы" },
		{ lat: 44.0815, lon: 40.0128, ele: 1780, name: "Луговой участок" },
		{ lat: 44.0796, lon: 40.0149, ele: 1792, name: "Обзорная точка" },
		{ lat: 44.0774, lon: 40.0162, ele: 1806, name: "Карстовое поле" },
		{ lat: 44.0751, lon: 40.0178, ele: 1815, name: "Тропа по плато" },
		{ lat: 44.0732, lon: 40.0204, ele: 1824, name: "Поворот к лугам" },
		{ lat: 44.0712, lon: 40.0231, ele: 1830, name: "Альпийские луга" },
		{ lat: 44.0694, lon: 40.0262, ele: 1838, name: "Видовая площадка" },
		{ lat: 44.0671, lon: 40.0288, ele: 1842, name: "Дальний край маршрута" },
		{ lat: 44.0652, lon: 40.0269, ele: 1835, name: "Начало обратной дуги" },
		{ lat: 44.0668, lon: 40.0235, ele: 1828, name: "Обратная тропа" },
		{ lat: 44.0692, lon: 40.0208, ele: 1818, name: "Пересечение троп" },
		{ lat: 44.0726, lon: 40.0181, ele: 1806, name: "Возврат к плато" },
		{ lat: 44.0763, lon: 40.0147, ele: 1788, name: "Финишный участок" },
		{ lat: 44.0815, lon: 40.0106, ele: 1770, name: "Возвращение к старту" },
	],
	"Гора Большой Тхач": [
		{ lat: 44.0122, lon: 40.4181, ele: 910, name: "Старт тропы" },
		{ lat: 44.0141, lon: 40.4202, ele: 955, name: "Лесная дорога" },
		{ lat: 44.0160, lon: 40.4228, ele: 998, name: "Развилка у ручья" },
		{ lat: 44.0185, lon: 40.4256, ele: 1060, name: "Подъем через лес" },
		{ lat: 44.0207, lon: 40.4281, ele: 1124, name: "Серпантин" },
		{ lat: 44.0229, lon: 40.4312, ele: 1190, name: "Выход к поляне" },
		{ lat: 44.0254, lon: 40.4346, ele: 1265, name: "Поляна отдыха" },
		{ lat: 44.0281, lon: 40.4382, ele: 1348, name: "Траверс склона" },
		{ lat: 44.0304, lon: 40.4415, ele: 1420, name: "Скальный ориентир" },
		{ lat: 44.0330, lon: 40.4450, ele: 1495, name: "Подъем к стенам" },
		{ lat: 44.0356, lon: 40.4484, ele: 1562, name: "Подножие скал" },
		{ lat: 44.0380, lon: 40.4512, ele: 1618, name: "Тропа вдоль массива" },
		{ lat: 44.0402, lon: 40.4540, ele: 1668, name: "Видовая полка" },
		{ lat: 44.0431, lon: 40.4576, ele: 1718, name: "Панорамный участок" },
		{ lat: 44.0460, lon: 40.4618, ele: 1764, name: "Финишный гребень" },
		{ lat: 44.0501, lon: 40.4688, ele: 1805, name: "Панорама Большого Тхача" },
	],
	"Хребет Ачишхо": [
		{ lat: 43.6717, lon: 40.1944, ele: 600, name: "Красная Поляна" },
		{ lat: 43.6740, lon: 40.1916, ele: 665, name: "Старт подъема" },
		{ lat: 43.6768, lon: 40.1888, ele: 742, name: "Лесная тропа" },
		{ lat: 43.6796, lon: 40.1858, ele: 828, name: "Влажный лес" },
		{ lat: 43.6824, lon: 40.1826, ele: 918, name: "Крутой участок" },
		{ lat: 43.6851, lon: 40.1795, ele: 1010, name: "Траверс" },
		{ lat: 43.6879, lon: 40.1764, ele: 1105, name: "Выход к хребту" },
		{ lat: 43.6904, lon: 40.1731, ele: 1190, name: "Открытая тропа" },
		{ lat: 43.6928, lon: 40.1698, ele: 1265, name: "Смотровой склон" },
		{ lat: 43.6954, lon: 40.1666, ele: 1345, name: "Развилка к озеру" },
		{ lat: 43.6981, lon: 40.1638, ele: 1410, name: "Озеро Зеркальное" },
		{ lat: 43.7005, lon: 40.1607, ele: 1470, name: "Подъем после озера" },
		{ lat: 43.7032, lon: 40.1574, ele: 1528, name: "Хребтовая тропа" },
		{ lat: 43.7061, lon: 40.1538, ele: 1584, name: "Вид на Красную Поляну" },
		{ lat: 43.7090, lon: 40.1489, ele: 1642, name: "Финишный траверс" },
		{ lat: 43.7121, lon: 40.1398, ele: 1690, name: "Видовая точка Ачишхо" },
	],
};

function escapeXml(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function getTrackPoints(route) {
	return gpxTracksByTitle[route.title] || [
		{ lat: 45.0355, lon: 38.9753, ele: 50, name: "Старт маршрута" },
		{ lat: 45.0382, lon: 38.9798, ele: 85, name: "Подъем по тропе" },
		{ lat: 45.0401, lon: 38.9844, ele: 120, name: "Контрольная точка" },
		{ lat: 45.0435, lon: 38.9881, ele: 160, name: "Финиш маршрута" },
	];
}

function createGpx(route) {
	const points = getTrackPoints(route);
	const trackPoints = points
		.map(
			(point) =>
				`      <trkpt lat="${point.lat}" lon="${point.lon}"><ele>${point.ele}</ele><name>${escapeXml(
					point.name
				)}</name></trkpt>`
		)
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Mountain Tourism" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${escapeXml(route.title)}</name>
    <desc>${escapeXml(route.description || "Горный маршрут")}</desc>
  </metadata>
  <trk>
    <name>${escapeXml(route.title)}</name>
    <trkseg>
${trackPoints}
    </trkseg>
  </trk>
</gpx>`;
}

function createGpxFileName(route) {
	return `route-${route.id}.gpx`;
}

module.exports = { createGpx, createGpxFileName };
