const { getPool } = require("../db/pool");

async function findAnimals(filters = {}) {
	const pool = getPool();
	const conditions = [];
	const params = [];

	if (filters.danger_level && filters.danger_level !== "all") {
		params.push(filters.danger_level);
		conditions.push(`danger_level = $${params.length}`);
	}

	if (filters.animal_type && filters.animal_type !== "all") {
		params.push(filters.animal_type);
		conditions.push(`animal_type = $${params.length}`);
	}

	const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
	const { rows } = await pool.query(
		`SELECT * FROM animals ${where} ORDER BY title ASC`,
		params
	);

	return rows;
}

async function findAnimalById(id) {
	const pool = getPool();
	const { rows } = await pool.query("SELECT * FROM animals WHERE id = $1", [id]);

	return rows[0] || null;
}

module.exports = { findAnimals, findAnimalById };
