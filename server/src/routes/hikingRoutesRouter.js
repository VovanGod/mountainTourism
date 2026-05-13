const { Router } = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const {
	findRouteById,
	findRoutes,
} = require("../repositories/hikingRoutesRepository");
const {
	findRouteReviews,
	getRouteRatingSummary,
	upsertRouteReview,
} = require("../repositories/reviewsRepository");
const { createGpx, createGpxFileName } = require("../services/gpxService");

const hikingRoutesRouter = Router();

hikingRoutesRouter.get("/", async (req, res, next) => {
	try {
		const routes = await findRoutes(req.query);
		res.json(routes);
	} catch (error) {
		next(error);
	}
});

hikingRoutesRouter.get("/:id", async (req, res, next) => {
	try {
		const route = await findRouteById(Number(req.params.id));

		if (!route) {
			return res.status(404).json({ error: "Маршрут не найден" });
		}

		res.json(route);
	} catch (error) {
		next(error);
	}
});

hikingRoutesRouter.get("/:id/gpx", async (req, res, next) => {
	try {
		const route = await findRouteById(Number(req.params.id));

		if (!route) {
			return res.status(404).json({ error: "Маршрут не найден" });
		}

		res.setHeader("Content-Type", "application/gpx+xml; charset=utf-8");
		res.setHeader(
			"Content-Disposition",
			`attachment; filename="${createGpxFileName(route)}"`
		);
		res.send(createGpx(route));
	} catch (error) {
		next(error);
	}
});

hikingRoutesRouter.get("/:id/reviews", async (req, res, next) => {
	try {
		const routeId = Number(req.params.id);
		const [reviews, summary] = await Promise.all([
			findRouteReviews(routeId),
			getRouteRatingSummary(routeId),
		]);

		res.json({ reviews, summary });
	} catch (error) {
		next(error);
	}
});

hikingRoutesRouter.post("/:id/reviews", requireAuth, async (req, res, next) => {
	try {
		const route = await findRouteById(Number(req.params.id));

		if (!route) {
			return res.status(404).json({ error: "Маршрут не найден" });
		}

		const rating = Number(req.body.rating);
		const text = String(req.body.text || "").trim();

		if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
			return res.status(400).json({ error: "Оценка должна быть от 1 до 5" });
		}

		if (text.length < 10) {
			return res.status(400).json({ error: "Отзыв должен быть не короче 10 символов" });
		}

		await upsertRouteReview({
			routeId: route.id,
			userId: req.user.id,
			rating,
			text,
		});

		const [reviews, summary] = await Promise.all([
			findRouteReviews(route.id),
			getRouteRatingSummary(route.id),
		]);

		res.status(201).json({ reviews, summary });
	} catch (error) {
		next(error);
	}
});

module.exports = { hikingRoutesRouter };
