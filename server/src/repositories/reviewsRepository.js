const { getPool } = require("../db/pool");

async function findRouteReviews(routeId) {
	const pool = getPool();
	const { rows } = await pool.query(
		`SELECT
			route_reviews.id,
			route_reviews.route_id,
			route_reviews.user_id,
			route_reviews.rating,
			route_reviews.text,
			route_reviews.created_at,
			route_reviews.updated_at,
			users.name AS user_name
		FROM route_reviews
		JOIN users ON users.id = route_reviews.user_id
		WHERE route_reviews.route_id = $1
		ORDER BY route_reviews.updated_at DESC`,
		[routeId]
	);

	return rows;
}

async function upsertRouteReview({ routeId, userId, rating, text }) {
	const pool = getPool();
	const { rows } = await pool.query(
		`INSERT INTO route_reviews (route_id, user_id, rating, text)
		 VALUES ($1, $2, $3, $4)
		 ON CONFLICT (route_id, user_id)
		 DO UPDATE SET
			rating = EXCLUDED.rating,
			text = EXCLUDED.text,
			updated_at = CURRENT_TIMESTAMP
		 RETURNING id, route_id, user_id, rating, text, created_at, updated_at`,
		[routeId, userId, rating, text.trim()]
	);

	return rows[0];
}

async function getRouteRatingSummary(routeId) {
	const pool = getPool();
	const { rows } = await pool.query(
		`SELECT
			COALESCE(ROUND(AVG(rating)::numeric, 1), 0)::float AS average_rating,
			COUNT(*)::int AS reviews_count
		FROM route_reviews
		WHERE route_id = $1`,
		[routeId]
	);

	return rows[0];
}

module.exports = {
	findRouteReviews,
	getRouteRatingSummary,
	upsertRouteReview,
};
