const { getPool } = require("../db/pool");

function sanitizeUser(user) {
	if (!user) {
		return null;
	}

	return {
		id: user.id,
		name: user.name,
		email: user.email,
		created_at: user.created_at,
	};
}

async function createUser({ name, email, passwordHash }) {
	const pool = getPool();
	const { rows } = await pool.query(
		`INSERT INTO users (name, email, password_hash)
		 VALUES ($1, LOWER($2), $3)
		 RETURNING id, name, email, created_at`,
		[name.trim(), email.trim(), passwordHash]
	);

	return rows[0];
}

async function findUserByEmail(email) {
	const pool = getPool();
	const { rows } = await pool.query(
		"SELECT * FROM users WHERE email = LOWER($1)",
		[email.trim()]
	);

	return rows[0] || null;
}

async function findUserById(id) {
	const pool = getPool();
	const { rows } = await pool.query(
		"SELECT id, name, email, created_at FROM users WHERE id = $1",
		[id]
	);

	return rows[0] || null;
}

module.exports = {
	createUser,
	findUserByEmail,
	findUserById,
	sanitizeUser,
};
