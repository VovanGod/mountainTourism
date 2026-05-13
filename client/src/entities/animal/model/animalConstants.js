export const dangerOptions = [
	{ value: "all", label: "Все уровни опасности" },
	{ value: "safe", label: "Не опасны" },
	{ value: "potentially", label: "Потенциально опасны" },
	{ value: "dangerous", label: "Опасны" },
	{ value: "very_dangerous", label: "Очень опасны" },
];

export const animalTypeOptions = [
	{ value: "all", label: "Все типы" },
	{ value: "mammal", label: "Млекопитающие" },
	{ value: "reptile", label: "Пресмыкающиеся" },
	{ value: "bird", label: "Птицы" },
	{ value: "insect", label: "Насекомые" },
	{ value: "amphibian", label: "Земноводные" },
	{ value: "arachnid", label: "Паукообразные" },
	{ value: "fish", label: "Рыбы" },
];

export const dangerInfo = {
	safe: {
		label: "Не опасен",
		color: "rgba(76, 175, 80, 1)",
		bgColor: "rgba(76, 175, 80, 0.1)",
	},
	potentially: {
		label: "Потенциально опасен",
		color: "rgba(255, 152, 0, 1)",
		bgColor: "rgba(255, 152, 0, 0.12)",
	},
	dangerous: {
		label: "Опасен",
		color: "rgba(244, 67, 54, 1)",
		bgColor: "rgba(244, 67, 54, 0.12)",
	},
	very_dangerous: {
		label: "Очень опасен",
		color: "rgba(183, 28, 28, 1)",
		bgColor: "rgba(183, 28, 28, 0.12)",
	},
};

export const animalTypeInfo = {
	mammal: "Млекопитающее",
	reptile: "Пресмыкающееся",
	bird: "Птица",
	insect: "Насекомое",
	amphibian: "Земноводное",
	arachnid: "Паукообразное",
	fish: "Рыба",
};

export const animalImagesByTitle = {
	"Бурый медведь": "/animals/bear.png",
	"Кавказская гадюка": "/animals/viper.png",
	"Кавказский тур": "/animals/tour.png",
	"Дикий кабан": "/animals/boar.png",
};
