const { Pool } = require("pg");
const { config } = require("../config/env");
const { getPool } = require("./pool");
const { createTables } = require("./schema");
const { seedDatabase } = require("./seed/seedDatabase");

function quoteIdentifier(identifier) {
	return `"${String(identifier).replace(/"/g, '""')}"`;
}

async function ensureDatabaseExists() {
	const adminPool = new Pool({
		host: config.db.host,
		port: config.db.port,
		user: config.db.user,
		password: config.db.password,
		database: config.db.adminDatabase,
	});

	try {
		const result = await adminPool.query(
			"SELECT 1 FROM pg_database WHERE datname = $1",
			[config.db.database]
		);

		if (result.rowCount === 0) {
			await adminPool.query(`CREATE DATABASE ${quoteIdentifier(config.db.database)}`);
			console.log(`Database ${config.db.database} has been created`);
		}
	} finally {
		await adminPool.end();
	}
}

async function bootstrapDatabase() {
	await ensureDatabaseExists();

	const pool = getPool();
	await createTables(pool);
	await seedDatabase(pool);
}

module.exports = { bootstrapDatabase };
