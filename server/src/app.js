const express = require("express");
const cors = require("cors");
const { config } = require("./config/env");
const { animalsRouter } = require("./routes/animalsRouter");
const { authRouter } = require("./routes/authRouter");
const { emergencyRouter } = require("./routes/emergencyRouter");
const { favoritesRouter } = require("./routes/favoritesRouter");
const { hikingRoutesRouter } = require("./routes/hikingRoutesRouter");
const { weatherRouter } = require("./routes/weatherRouter");

function createApp() {
	const app = express();

	app.use(
		cors({
			origin:
				config.server.corsOrigin === "*"
					? true
					: config.server.corsOrigin.split(",").map((origin) => origin.trim()),
		})
	);
	app.use(express.json());

	app.get("/", (req, res) => {
		res.json({
			status: "ok",
			message: "Сервер горного туризма работает",
		});
	});

	app.use("/api/auth", authRouter);
	app.use("/api/routes", hikingRoutesRouter);
	app.use("/api/animals", animalsRouter);
	app.use("/api/favorites", favoritesRouter);
	app.use("/api/weather", weatherRouter);
	app.use("/api/emergency", emergencyRouter);

	app.use((req, res) => {
		res.status(404).json({ error: "Маршрут API не найден" });
	});

	app.use((error, req, res, next) => {
		console.error(error);
		res.status(500).json({ error: "Ошибка сервера" });
	});

	return app;
}

module.exports = { createApp };
