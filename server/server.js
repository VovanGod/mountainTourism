const { createApp } = require("./src/app");
const { config } = require("./src/config/env");
const { bootstrapDatabase } = require("./src/db/bootstrap");
const { closePool } = require("./src/db/pool");

async function startServer() {
	try {
		await bootstrapDatabase();

		const app = createApp();
		const server = app.listen(config.server.port, () => {
			console.log(
				`Server is running on http://localhost:${config.server.port}`
			);
		});

		const shutdown = async () => {
			server.close(async () => {
				await closePool();
				process.exit(0);
			});
		};

		process.on("SIGINT", shutdown);
		process.on("SIGTERM", shutdown);
	} catch (error) {
		console.error("Failed to start server:", error.message);
		process.exit(1);
	}
}

startServer();
