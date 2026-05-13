const { hikingRoutes, animals } = require("./demoData");

async function seedHikingRoutes(pool) {
	for (const route of hikingRoutes) {
		await pool.query(
			`INSERT INTO hiking_routes (
				title, difficulty, distance_km, duration_hours, elevation, route_type,
				description, full_description, equipment, how_to_get, attractions,
				offline_summary, offline_checklist, navigation_tips, emergency_notes,
				image_url, region, best_season
			)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
			ON CONFLICT (title)
			DO UPDATE SET
				difficulty = EXCLUDED.difficulty,
				distance_km = EXCLUDED.distance_km,
				duration_hours = EXCLUDED.duration_hours,
				elevation = EXCLUDED.elevation,
				route_type = EXCLUDED.route_type,
				description = EXCLUDED.description,
				full_description = EXCLUDED.full_description,
				equipment = EXCLUDED.equipment,
				how_to_get = EXCLUDED.how_to_get,
				attractions = EXCLUDED.attractions,
				offline_summary = EXCLUDED.offline_summary,
				offline_checklist = EXCLUDED.offline_checklist,
				navigation_tips = EXCLUDED.navigation_tips,
				emergency_notes = EXCLUDED.emergency_notes,
				image_url = EXCLUDED.image_url,
				region = EXCLUDED.region,
				best_season = EXCLUDED.best_season`,
			[
				route.title,
				route.difficulty,
				route.distance_km,
				route.duration_hours,
				route.elevation,
				route.route_type,
				route.description,
				route.full_description,
				route.equipment,
				route.how_to_get,
				route.attractions,
				route.offline_summary,
				route.offline_checklist,
				route.navigation_tips,
				route.emergency_notes,
				route.image_url,
				route.region,
				route.best_season,
			]
		);
	}
}

async function seedAnimals(pool) {
	for (const animal of animals) {
		await pool.query(
			`INSERT INTO animals (
				title, scientific_name, danger_level, animal_type, short_description,
				full_description, season_activity, behavior, meeting_actions, habitat,
				diet, interesting_facts, image_url, conservation_status, region
			)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
			ON CONFLICT (title)
			DO UPDATE SET
				scientific_name = EXCLUDED.scientific_name,
				danger_level = EXCLUDED.danger_level,
				animal_type = EXCLUDED.animal_type,
				short_description = EXCLUDED.short_description,
				full_description = EXCLUDED.full_description,
				season_activity = EXCLUDED.season_activity,
				behavior = EXCLUDED.behavior,
				meeting_actions = EXCLUDED.meeting_actions,
				habitat = EXCLUDED.habitat,
				diet = EXCLUDED.diet,
				interesting_facts = EXCLUDED.interesting_facts,
				image_url = EXCLUDED.image_url,
				conservation_status = EXCLUDED.conservation_status,
				region = EXCLUDED.region`,
			[
				animal.title,
				animal.scientific_name,
				animal.danger_level,
				animal.animal_type,
				animal.short_description,
				animal.full_description,
				animal.season_activity,
				animal.behavior,
				animal.meeting_actions,
				animal.habitat,
				animal.diet,
				animal.interesting_facts,
				animal.image_url,
				animal.conservation_status,
				animal.region,
			]
		);
	}
}

async function seedDatabase(pool) {
	await seedHikingRoutes(pool);
	await seedAnimals(pool);
}

module.exports = { seedDatabase };
