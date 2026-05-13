const { Router } = require("express");
const { getCurrentWeather } = require("../services/weatherService");

const weatherRouter = Router();

weatherRouter.get("/", async (req, res, next) => {
	try {
		res.json(await getCurrentWeather(req.query));
	} catch (error) {
		next(error);
	}
});

module.exports = { weatherRouter };
