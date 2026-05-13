const { Pool } = require("pg");
const { config } = require("../config/env");

let pool;

function getPool() {
	if (!pool) {
		pool = new Pool({
			host: config.db.host,
			port: config.db.port,
			user: config.db.user,
			password: config.db.password,
			database: config.db.database,
		});
	}

	return pool;
}

async function closePool() {
	if (pool) {
		await pool.end();
		pool = null;
	}
}

module.exports = { getPool, closePool };
