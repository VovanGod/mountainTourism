const { getPool } = require("../db/pool");

async function findFavoriteIds(userId) {
	const pool = getPool();
	const [routesResult, animalsResult] = await Promise.all([
		pool.query(
			"SELECT route_id FROM favorite_routes WHERE user_id = $1 ORDER BY created_at DESC",
			[userId]
		),
		pool.query(
			"SELECT animal_id FROM favorite_animals WHERE user_id = $1 ORDER BY created_at DESC",
			[userId]
		),
	]);

	return {
		routes: routesResult.rows.map((row) => row.route_id),
		animals: animalsResult.rows.map((row) => row.animal_id),
	};
}

async function addRouteFavorite(userId, routeId) {
	const pool = getPool();
	await pool.query(
		`INSERT INTO favorite_routes (user_id, route_id)
		 VALUES ($1, $2)
		 ON CONFLICT DO NOTHING`,
		[userId, routeId]
	);
}

async function removeRouteFavorite(userId, routeId) {
	const pool = getPool();
	await pool.query(
		"DELETE FROM favorite_routes WHERE user_id = $1 AND route_id = $2",
		[userId, routeId]
	);
}

async function addAnimalFavorite(userId, animalId) {
	const pool = getPool();
	await pool.query(
		`INSERT INTO favorite_animals (user_id, animal_id)
		 VALUES ($1, $2)
		 ON CONFLICT DO NOTHING`,
		[userId, animalId]
	);
}

async function removeAnimalFavorite(userId, animalId) {
	const pool = getPool();
	await pool.query(
		"DELETE FROM favorite_animals WHERE user_id = $1 AND animal_id = $2",
		[userId, animalId]
	);
}

module.exports = {
	addAnimalFavorite,
	addRouteFavorite,
	findFavoriteIds,
	removeAnimalFavorite,
	removeRouteFavorite,
};
