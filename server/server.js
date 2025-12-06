const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "hiking_db",
	password: "12345",
	port: 5432,
});

async function setupDatabase() {
	try {
		await pool.query(`
            CREATE TABLE IF NOT EXISTS hiking_routes (
                id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
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
                image_url VARCHAR(255),
                region VARCHAR(100),
                best_season VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

		await pool.query(`
            CREATE TABLE IF NOT EXISTS animals (
                id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
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

		const checkRoutes = await pool.query("SELECT COUNT(*) FROM hiking_routes");
		const routeCount = parseInt(checkRoutes.rows[0].count);

		if (routeCount === 0) {
			const testRoutes = [
				[
					"Гора Фишт",
					4,
					18.5,
					9.5,
					"2,868 м",
					"linear",
					"Одна из самых высоких и красивых гор Западного Кавказа.",
					"Гора Фишт (2868 м) - одна из самых величественных вершин Западного Кавказа...",
					'{"Треккинговые палки", "Термобелье", "Пуховик", "Налобный фонарь", "GPS-навигатор", "Аптечка", "Палатка", "Спальник"}',
					"Из Краснодара по трассе М4 до пос. Каменномостский (200 км)...",
					'{"Ледник Большой Фиштинский", "Водопад Пшехский", "Скала Провал", "Альпийские луга Фишта", "Смотровая площадка на Главный Кавказский хребет"}',
					"/hiking/fisht.jpg",
					"Западный Кавказ",
					"Июнь-Сентябрь",
				],
				[
					"Плато Лаго-Наки",
					2,
					12.0,
					5.5,
					"2,200 м",
					"circular",
					"Живописное плато с панорамными видами на Кавказский хребет.",
					"Плато Лаго-Наки расположено на высоте 2000-2200 м над уровнем моря...",
					'{"Треккинговые палки", "Ветровка", "Солнцезащитный крем", "Фотоаппарат", "Бинокль", "Перекус", "Вода 1.5 л"}',
					"Из Краснодара по трассе М4 до Майкопа (130 км)...",
					'{"Смотровая площадка Утёс", "Пещера Нежная", "Азишский перевал", "Цветущие рододендроны", "Водопад Руфабго (рядом)"}',
					"/hiking/lagonaki.jpg",
					"Адыгея",
					"Май-Октябрь",
				],
			];

			for (const data of testRoutes) {
				await pool.query(
					`INSERT INTO hiking_routes 
                     (title, difficulty, distance_km, duration_hours, elevation, route_type, 
                      description, full_description, equipment, how_to_get, attractions, 
                      image_url, region, best_season) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
					data
				);
			}
		}

		const checkAnimals = await pool.query("SELECT COUNT(*) FROM animals");
		const animalCount = parseInt(checkAnimals.rows[0].count);

		if (animalCount === 0) {
			const testAnimals = [
				[
					"Бурый медведь",
					"Ursus arctos",
					"dangerous",
					"mammal",
					"Крупный хищник Кавказа. Вес может достигать 300 кг.",
					"Бурый медведь — самый крупный хищник Кавказа...",
					"Март-Ноябрь",
					"Медведи обычно избегают встречи с человеком...",
					'{"Не подходите близко", "Не пытайтесь фотографировать", "Не убегайте"}',
					"Хвойные и лиственные леса",
					"Всеядный: ягоды, орехи, насекомые",
					'{"Могут бегать со скоростью до 50 км/ч", "Хорошо плавают"}',
					"/animals/bear.jpg",
					"Уязвимый вид",
					"Кавказ",
				],
			];

			for (const data of testAnimals) {
				await pool.query(
					`INSERT INTO animals 
                     (title, scientific_name, danger_level, animal_type, short_description, 
                      full_description, season_activity, behavior, meeting_actions, habitat, 
                      diet, interesting_facts, image_url, conservation_status, region) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`,
					data
				);
			}
		}

		return true;
	} catch (error) {
		console.error("Ошибка при настройке базы данных:", error.message);
		return false;
	}
}

app.get("/", (req, res) => {
	res.send("Сервер животных и маршрутов работает");
});

app.get("/api/routes/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { rows } = await pool.query(
			"SELECT * FROM hiking_routes WHERE id = $1",
			[parseInt(id)]
		);
		if (rows.length === 0)
			return res.status(404).json({ error: "Маршрут не найден" });
		res.json(rows[0]);
	} catch (err) {
		res.status(500).json({ error: "Ошибка сервера" });
	}
});

app.get("/api/routes", async (req, res) => {
	try {
		const { difficulty, maxDistance, maxDuration } = req.query;
		let sqlQuery = "SELECT * FROM hiking_routes WHERE 1=1";
		const params = [];
		let paramIndex = 1;

		if (difficulty && difficulty !== "all") {
			sqlQuery += ` AND difficulty = $${paramIndex}`;
			params.push(parseInt(difficulty));
			paramIndex++;
		}

		if (maxDistance) {
			sqlQuery += ` AND distance_km <= $${paramIndex}`;
			params.push(parseFloat(maxDistance));
			paramIndex++;
		}

		if (maxDuration) {
			sqlQuery += ` AND duration_hours <= $${paramIndex}`;
			params.push(parseFloat(maxDuration));
			paramIndex++;
		}

		sqlQuery += " ORDER BY title ASC";
		const { rows } = await pool.query(sqlQuery, params);
		res.json(rows);
	} catch (error) {
		res.status(500).json({ error: "Ошибка сервера" });
	}
});

app.get("/api/animals/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { rows } = await pool.query("SELECT * FROM animals WHERE id = $1", [
			parseInt(id),
		]);
		if (rows.length === 0)
			return res.status(404).json({ error: "Животное не найдено" });
		res.json(rows[0]);
	} catch (err) {
		res.status(500).json({ error: "Ошибка сервера" });
	}
});

app.get("/api/animals", async (req, res) => {
	try {
		const { danger_level, animal_type } = req.query;
		let sqlQuery = "SELECT * FROM animals WHERE 1=1";
		const params = [];
		let paramIndex = 1;

		if (danger_level && danger_level !== "all") {
			sqlQuery += ` AND danger_level = $${paramIndex}`;
			params.push(danger_level);
			paramIndex++;
		}

		if (animal_type && animal_type !== "all") {
			sqlQuery += ` AND animal_type = $${paramIndex}`;
			params.push(animal_type);
			paramIndex++;
		}

		sqlQuery += " ORDER BY title ASC";
		const { rows } = await pool.query(sqlQuery, params);
		res.json(rows);
	} catch (error) {
		res.status(500).json({ error: "Ошибка сервера" });
	}
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
	console.log("делаем делаем брат");
	await setupDatabase();
});
