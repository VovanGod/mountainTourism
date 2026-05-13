async function createTables(pool) {
	await pool.query(`
		CREATE TABLE IF NOT EXISTS hiking_routes (
			id SERIAL PRIMARY KEY,
			title VARCHAR(100) NOT NULL UNIQUE,
			difficulty INTEGER CHECK (difficulty BETWEEN 1 AND 5),
			distance_km DECIMAL(5,1) NOT NULL,
			duration_hours DECIMAL(4,1) NOT NULL,
			elevation VARCHAR(50),
			route_type VARCHAR(20) CHECK (route_type IN ('linear', 'circular', 'point-to-point')),
			description TEXT,
			full_description TEXT,
			equipment TEXT[],
			how_to_get TEXT,
			attractions TEXT[],
			offline_summary TEXT,
			offline_checklist TEXT[],
			navigation_tips TEXT[],
			emergency_notes TEXT[],
			image_url VARCHAR(255),
			region VARCHAR(100),
			best_season VARCHAR(100),
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`);

	await pool.query(`
		ALTER TABLE hiking_routes
			ADD COLUMN IF NOT EXISTS offline_summary TEXT,
			ADD COLUMN IF NOT EXISTS offline_checklist TEXT[],
			ADD COLUMN IF NOT EXISTS navigation_tips TEXT[],
			ADD COLUMN IF NOT EXISTS emergency_notes TEXT[]
	`);

	await pool.query(`
		CREATE UNIQUE INDEX IF NOT EXISTS hiking_routes_title_unique
			ON hiking_routes (title)
	`);

	await pool.query(`
		CREATE TABLE IF NOT EXISTS animals (
			id SERIAL PRIMARY KEY,
			title VARCHAR(100) NOT NULL UNIQUE,
			scientific_name VARCHAR(100),
			danger_level VARCHAR(20) CHECK (danger_level IN ('safe', 'potentially', 'dangerous', 'very_dangerous')),
			animal_type VARCHAR(20) CHECK (animal_type IN ('mammal', 'reptile', 'bird', 'insect', 'amphibian', 'arachnid', 'fish')),
			short_description TEXT,
			full_description TEXT,
			season_activity VARCHAR(100),
			behavior TEXT,
			meeting_actions TEXT[],
			habitat TEXT,
			diet TEXT,
			interesting_facts TEXT[],
			image_url VARCHAR(255),
			conservation_status VARCHAR(50),
			region VARCHAR(100),
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`);

	await pool.query(`
		CREATE UNIQUE INDEX IF NOT EXISTS animals_title_unique
			ON animals (title)
	`);

	await pool.query(`
		CREATE TABLE IF NOT EXISTS users (
			id SERIAL PRIMARY KEY,
			name VARCHAR(100) NOT NULL,
			email VARCHAR(160) NOT NULL UNIQUE,
			password_hash TEXT NOT NULL,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`);

	await pool.query(`
		CREATE TABLE IF NOT EXISTS favorite_routes (
			user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
			route_id INTEGER NOT NULL REFERENCES hiking_routes(id) ON DELETE CASCADE,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (user_id, route_id)
		)
	`);

	await pool.query(`
		CREATE TABLE IF NOT EXISTS favorite_animals (
			user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
			animal_id INTEGER NOT NULL REFERENCES animals(id) ON DELETE CASCADE,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			PRIMARY KEY (user_id, animal_id)
		)
	`);

	await pool.query(`
		CREATE TABLE IF NOT EXISTS route_reviews (
			id SERIAL PRIMARY KEY,
			route_id INTEGER NOT NULL REFERENCES hiking_routes(id) ON DELETE CASCADE,
			user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
			rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
			text TEXT NOT NULL,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			UNIQUE (route_id, user_id)
		)
	`);
}

module.exports = { createTables };
