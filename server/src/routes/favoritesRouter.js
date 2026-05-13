const { Router } = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const {
	addAnimalFavorite,
	addRouteFavorite,
	findFavoriteIds,
	removeAnimalFavorite,
	removeRouteFavorite,
} = require("../repositories/favoritesRepository");

const favoritesRouter = Router();

favoritesRouter.use(requireAuth);

favoritesRouter.get("/", async (req, res, next) => {
	try {
		res.json(await findFavoriteIds(req.user.id));
	} catch (error) {
		next(error);
	}
});

favoritesRouter.post("/routes/:routeId", async (req, res, next) => {
	try {
		await addRouteFavorite(req.user.id, Number(req.params.routeId));
		res.status(201).json(await findFavoriteIds(req.user.id));
	} catch (error) {
		if (error.code === "23503") {
			return res.status(404).json({ error: "Маршрут не найден" });
		}

		next(error);
	}
});

favoritesRouter.delete("/routes/:routeId", async (req, res, next) => {
	try {
		await removeRouteFavorite(req.user.id, Number(req.params.routeId));
		res.json(await findFavoriteIds(req.user.id));
	} catch (error) {
		next(error);
	}
});

favoritesRouter.post("/animals/:animalId", async (req, res, next) => {
	try {
		await addAnimalFavorite(req.user.id, Number(req.params.animalId));
		res.status(201).json(await findFavoriteIds(req.user.id));
	} catch (error) {
		if (error.code === "23503") {
			return res.status(404).json({ error: "Животное не найдено" });
		}

		next(error);
	}
});

favoritesRouter.delete("/animals/:animalId", async (req, res, next) => {
	try {
		await removeAnimalFavorite(req.user.id, Number(req.params.animalId));
		res.json(await findFavoriteIds(req.user.id));
	} catch (error) {
		next(error);
	}
});

module.exports = { favoritesRouter };
