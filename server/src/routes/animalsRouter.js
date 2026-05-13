const { Router } = require("express");
const {
	findAnimalById,
	findAnimals,
} = require("../repositories/animalsRepository");

const animalsRouter = Router();

animalsRouter.get("/", async (req, res, next) => {
	try {
		const animals = await findAnimals(req.query);
		res.json(animals);
	} catch (error) {
		next(error);
	}
});

animalsRouter.get("/:id", async (req, res, next) => {
	try {
		const animal = await findAnimalById(Number(req.params.id));

		if (!animal) {
			return res.status(404).json({ error: "Животное не найдено" });
		}

		res.json(animal);
	} catch (error) {
		next(error);
	}
});

module.exports = { animalsRouter };
