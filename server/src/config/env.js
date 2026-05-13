const { loadEnv } = require("./loadEnv");

loadEnv();

function toNumber(value, fallback) {
	const numberValue = Number(value);
	return Number.isFinite(numberValue) ? numberValue : fallback;
}

const config = {
	server: {
		port: toNumber(process.env.PORT, 5001),
		corsOrigin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
		jwtSecret:
			process.env.JWT_SECRET ||
			"dev-secret-change-before-production-mountain-tourism",
		jwtExpiresInSeconds: toNumber(process.env.JWT_EXPIRES_IN_SECONDS, 60 * 60 * 24 * 7),
	},
	db: {
		host: process.env.PGHOST || process.env.DB_HOST || "localhost",
		port: toNumber(process.env.PGPORT || process.env.DB_PORT, 5432),
		user: process.env.PGUSER || process.env.DB_USER || "postgres",
		password: process.env.PGPASSWORD || process.env.DB_PASSWORD || "12345",
		database: process.env.PGDATABASE || process.env.DB_NAME || "hiking_db",
		adminDatabase:
			process.env.PGADMIN_DATABASE || process.env.DB_ADMIN_DATABASE || "postgres",
	},
};

module.exports = { config };
