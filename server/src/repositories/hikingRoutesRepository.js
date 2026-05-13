const { getPool } = require("../db/pool");

function toNumber(value) {
	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : null;
}

async function findRoutes(filters = {}) {
	const pool = getPool();
	const conditions = [];
	const params = [];

	if (filters.difficulty && filters.difficulty !== "all") {
		const difficulty = toNumber(filters.difficulty);

		if (difficulty) {
			params.push(difficulty);
			conditions.push(`difficulty = $${params.length}`);
		}
	}

	if (filters.maxDistance) {
		const maxDistance = toNumber(filters.maxDistance);

		if (maxDistance !== null) {
			params.push(maxDistance);
			conditions.push(`distance_km <= $${params.length}`);
		}
	}

	if (filters.maxDuration) {
		const maxDuration = toNumber(filters.maxDuration);

		if (maxDuration !== null) {
			params.push(maxDuration);
			conditions.push(`duration_hours <= $${params.length}`);
		}
	}

	const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
	const { rows } = await pool.query(
		`SELECT
			hiking_routes.*,
			COALESCE(ROUND(rating_stats.average_rating::numeric, 1), 0)::float AS average_rating,
			COALESCE(rating_stats.reviews_count, 0)::int AS reviews_count
		FROM hiking_routes
		LEFT JOIN (
			SELECT route_id, AVG(rating) AS average_rating, COUNT(*) AS reviews_count
			FROM route_reviews
			GROUP BY route_id
		) rating_stats ON rating_stats.route_id = hiking_routes.id
		${where}
		ORDER BY title ASC`,
		params
	);

	return rows;
}

async function findRouteById(id) {
	const pool = getPool();
	const { rows } = await pool.query(
		`SELECT
			hiking_routes.*,
			COALESCE(ROUND(rating_stats.average_rating::numeric, 1), 0)::float AS average_rating,
			COALESCE(rating_stats.reviews_count, 0)::int AS reviews_count
		FROM hiking_routes
		LEFT JOIN (
			SELECT route_id, AVG(rating) AS average_rating, COUNT(*) AS reviews_count
			FROM route_reviews
			GROUP BY route_id
		) rating_stats ON rating_stats.route_id = hiking_routes.id
		WHERE hiking_routes.id = $1`,
		[id]
	);

	return rows[0] || null;
}

module.exports = { findRoutes, findRouteById };
