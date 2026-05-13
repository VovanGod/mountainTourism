const { Router } = require("express");

const emergencyRouter = Router();

emergencyRouter.get("/", (req, res) => {
	res.json({
		serviceName: "МЧС России",
		phone: "112",
		label: "Единый номер экстренных служб",
		status: "available",
		updatedAt: new Date().toISOString(),
		instructions: [
			"Назовите район, ориентиры и ближайший населенный пункт.",
			"Сообщите количество людей в группе и состояние пострадавших.",
			"Оставайтесь на связи и не меняйте точку без команды диспетчера.",
		],
	});
});

module.exports = { emergencyRouter };
