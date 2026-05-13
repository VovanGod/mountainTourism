export const quizQuestions = [
	{
		id: "level",
		title: "Какой у тебя уровень подготовки?",
		answers: [
			{
				id: "beginner",
				label: "Новичок",
				description: "Хочу понятную тропу без резкого набора высоты и сложных участков.",
				tags: ["beginner", "easy", "calm", "low-risk"],
			},
			{
				id: "middle",
				label: "Средний",
				description: "Могу идти несколько часов, но без ощущения экспедиции.",
				tags: ["intermediate", "balanced", "views", "day"],
			},
			{
				id: "advanced",
				label: "Опытный",
				description: "Готов к нагрузке, длинному подъему и маршруту с характером.",
				tags: ["advanced", "expert", "challenge", "physical"],
			},
		],
	},
	{
		id: "time",
		title: "Сколько времени есть на поход?",
		answers: [
			{
				id: "short",
				label: "До 5 часов",
				description: "Нужен маршрут без раннего старта и долгого возвращения.",
				tags: ["short", "halfday", "easy", "comfort"],
			},
			{
				id: "day",
				label: "Полный день",
				description: "Можно выйти утром, спокойно пройти маршрут и вернуться к вечеру.",
				tags: ["day", "balanced", "panorama", "views"],
			},
			{
				id: "long",
				label: "Длинный выход",
				description: "Готов заложить весь день с запасом по времени и силам.",
				tags: ["long", "expert", "challenge", "remote"],
			},
		],
	},
	{
		id: "view",
		title: "Что хочется увидеть больше всего?",
		answers: [
			{
				id: "meadows",
				label: "Луга и плато",
				description: "Широкие виды, мягкий рельеф и красивые открытые поляны.",
				tags: ["meadows", "plateau", "calm", "photo"],
			},
			{
				id: "forest-lakes",
				label: "Лес и озера",
				description: "Влажные тропы, зелень, вода и смена пейзажей по пути.",
				tags: ["forest", "lakes", "weather", "balanced"],
			},
			{
				id: "rocks",
				label: "Скалы и вершины",
				description: "Мощные стены, высота, панорамы и спортивное ощущение маршрута.",
				tags: ["rocks", "summit", "highmountain", "challenge"],
			},
		],
	},
	{
		id: "group",
		title: "С кем планируешь идти?",
		answers: [
			{
				id: "family",
				label: "С семьей",
				description: "Нужен спокойный темп, понятная логистика и минимум лишнего риска.",
				tags: ["family", "easy", "calm", "comfort", "low-risk"],
			},
			{
				id: "friends",
				label: "С друзьями",
				description: "Хочется красивый маршрут, где можно устать, но не выжать себя полностью.",
				tags: ["balanced", "views", "day", "photo"],
			},
			{
				id: "trained",
				label: "С подготовленной группой",
				description: "Команда готова к сложной тропе, погодным сюрпризам и длинному дню.",
				tags: ["advanced", "expert", "remote", "gps-needed"],
			},
		],
	},
	{
		id: "weather",
		title: "Как относишься к переменчивой погоде?",
		answers: [
			{
				id: "stable",
				label: "Лучше спокойно",
				description: "Не хочу, чтобы туман, ветер или мокрая тропа стали главным событием дня.",
				tags: ["stable-weather", "easy", "comfort", "low-risk"],
			},
			{
				id: "normal",
				label: "Готов к мелочам",
				description: "Дождевик есть, к грязи отношусь спокойно, но без экстремальных условий.",
				tags: ["weather", "balanced", "forest", "day"],
			},
			{
				id: "hard",
				label: "Не пугает",
				description: "Понимаю риски горной погоды и готов нести запасную одежду и навигацию.",
				tags: ["weather-risk", "highmountain", "expert", "gps-needed"],
			},
		],
	},
	{
		id: "logistics",
		title: "Какой подъезд удобнее?",
		answers: [
			{
				id: "simple-road",
				label: "Проще добраться",
				description: "Хочу понятную точку старта, без сложной заброски и лишних пересадок.",
				tags: ["comfort", "simple-road", "easy", "halfday"],
			},
			{
				id: "normal-road",
				label: "Обычная дорога",
				description: "Нормально отношусь к раннему выезду и дороге до туристической точки.",
				tags: ["balanced", "day", "views", "photo"],
			},
			{
				id: "remote-road",
				label: "Можно подальше",
				description: "Готов ехать дольше, если в конце будет сильный маршрут и меньше людей.",
				tags: ["remote", "challenge", "advanced", "panorama"],
			},
		],
	},
	{
		id: "navigation",
		title: "Насколько уверенно чувствуешь себя с навигацией?",
		answers: [
			{
				id: "marked",
				label: "Нужна простая тропа",
				description: "Хочу маршрут, где легко держать направление даже без сложной карты.",
				tags: ["reliable-trail", "easy", "low-risk", "comfort"],
			},
			{
				id: "basic-gpx",
				label: "GPX пригодится",
				description: "Могу сверяться с телефоном и заранее скачать трек.",
				tags: ["gpx", "balanced", "forest", "panorama"],
			},
			{
				id: "confident",
				label: "Навигация окей",
				description: "Умею работать с треком, запасной батареей и ориентирами на местности.",
				tags: ["gps-needed", "expert", "remote", "highmountain"],
			},
		],
	},
];

export const routeQuizProfiles = [
	{
		title: "Плато Лаго-Наки",
		tags: [
			"beginner",
			"easy",
			"calm",
			"low-risk",
			"short",
			"halfday",
			"comfort",
			"meadows",
			"plateau",
			"photo",
			"family",
			"stable-weather",
			"simple-road",
			"reliable-trail",
		],
		reason:
			"Лучший вариант для мягкого старта: широкие виды, понятная логистика и спокойный темп. Подойдет, если хочется увидеть горы без тяжелого подъема и лишней нервозности.",
	},
	{
		title: "Хребет Ачишхо",
		tags: [
			"intermediate",
			"balanced",
			"day",
			"forest",
			"lakes",
			"weather",
			"views",
			"photo",
			"gpx",
			"normal-road",
			"basic-gpx",
		],
		reason:
			"Хороший маршрут для среднего уровня: лес, озера, виды над Красной Поляной и ощущение настоящего похода без перехода в жесткий спортивный формат.",
	},
	{
		title: "Гора Большой Тхач",
		tags: [
			"advanced",
			"day",
			"rocks",
			"panorama",
			"challenge",
			"views",
			"balanced",
			"physical",
			"remote-road",
			"photo",
		],
		reason:
			"Подойдет тем, кто хочет скалы, панорамы и серьезную дневную нагрузку. Маршрут уже требует формы, но еще не выглядит как полноценная высотная экспедиция.",
	},
	{
		title: "Гора Фишт",
		tags: [
			"expert",
			"long",
			"challenge",
			"summit",
			"highmountain",
			"rocks",
			"advanced",
			"remote",
			"gps-needed",
			"weather-risk",
			"trained",
			"confident",
		],
		reason:
			"Это выбор для подготовленной группы: длинный выход, высокогорье, набор высоты и обязательная работа с прогнозом, треком и запасом времени.",
	},
];

export function getQuizRecommendation(selectedAnswers, routes = []) {
	const selectedTags = selectedAnswers.flatMap((answer) => answer.tags);
	const scoredProfiles = routeQuizProfiles
		.map((profile) => {
			const profileTags = new Set(profile.tags);

			return {
				...profile,
				score: selectedTags.reduce(
					(total, tag) => total + (profileTags.has(tag) ? 1 : 0),
					0
				),
			};
		})
		.sort((first, second) => second.score - first.score);
	const profile = scoredProfiles[0] || routeQuizProfiles[0];
	const route = routes.find((item) => item.title === profile.title);

	return {
		...profile,
		route,
	};
}
