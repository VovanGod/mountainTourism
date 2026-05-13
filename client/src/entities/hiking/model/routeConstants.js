export const difficultyOptions = [
	{ value: "all", label: "Все маршруты" },
	{ value: "1", label: "Легкий (1 звезда)" },
	{ value: "2", label: "Простой (2 звезды)" },
	{ value: "3", label: "Средний (3 звезды)" },
	{ value: "4", label: "Сложный (4 звезды)" },
	{ value: "5", label: "Эксперт (5 звезд)" },
];

export const difficultyLabels = {
	1: "Легкий",
	2: "Простой",
	3: "Средний",
	4: "Сложный",
	5: "Эксперт",
};

export const routeTypeInfo = {
	linear: {
		label: "Линейный",
		icon: "->",
		description: "Начальная и конечная точки маршрута разные.",
	},
	circular: {
		label: "Кольцевой",
		icon: "O",
		description: "Маршрут возвращается к начальной точке.",
	},
	"point-to-point": {
		label: "Точечный",
		icon: "*",
		description: "Маршрут связывает две фиксированные точки.",
	},
};

export const routeImagesByTitle = {
	"Гора Фишт": "/hiking/fisht.png",
	"Плато Лаго-Наки": "/hiking/lagonaki.png",
	"Гора Большой Тхач": "/hiking/thach.png",
	"Хребет Ачишхо": "/hiking/achishkho.png",
};
