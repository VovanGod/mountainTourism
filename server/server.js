// server.js - компактный сервер для животных и маршрутов
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Подключение к PostgreSQL
const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "hiking_db",
	password: "12345",
	port: 5432,
});

// Функция настройки базы данных
async function setupDatabase() {
	console.log("Настройка базы данных...");

	try {
		await pool.query("SELECT NOW()");
		console.log("Подключение к PostgreSQL успешно");

		// Создаем таблицу маршрутов если ее нет
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
		console.log("Таблица hiking_routes создана");

		// Создаем таблицу животных если ее нет
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
		console.log("Таблица animals создана");

		// Проверяем данные маршрутов
		const checkRoutes = await pool.query("SELECT COUNT(*) FROM hiking_routes");
		const routeCount = parseInt(checkRoutes.rows[0].count);

		if (routeCount === 0) {
			console.log("Добавляю тестовые данные маршрутов...");
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
			console.log("Тестовые данные маршрутов добавлены");
		}

		// Проверяем данные животных
		const checkAnimals = await pool.query("SELECT COUNT(*) FROM animals");
		const animalCount = parseInt(checkAnimals.rows[0].count);

		if (animalCount === 0) {
			console.log("Добавляю тестовые данные животных...");
			const testAnimals = [
				[
					"Бурый медведь",
					"Ursus arctos",
					"dangerous",
					"mammal",
					"Крупный хищник Кавказа. Вес может достигать 300 кг.",
					"Бурый медведь — самый крупный хищник Кавказа. Взрослые особи достигают длины 2-2.5 м и веса до 300 кг. Ведут преимущественно сумеречный и ночной образ жизни. Питаются растительной пищей, насекомыми, мелкими млекопитающими, рыбой. Зимой впадают в спячку. На Кавказе обитает в лесах и субальпийском поясе.",
					"Март-Ноябрь",
					"Медведи обычно избегают встречи с человеком. Но самки с медвежатами могут быть агрессивны. Признаки присутствия: следы, разрытые муравейники, помет.",
					'{"Не подходите близко", "Не пытайтесь фотографировать", "Не убегайте", "Отходите медленно, не поворачиваясь спиной", "При нападении притворитесь мертвым", "Если медведь приближается, шумите, кричите"}',
					"Хвойные и лиственные леса, субальпийские луга",
					"Всеядный: ягоды, орехи, насекомые, мелкие животные, рыба",
					'{"Могут бегать со скоростью до 50 км/ч", "Хорошо плавают и лазают по деревьям", "Обоняние в 100 раз лучше человеческого", "Спят 5-7 месяцев в году"}',
					"/animals/bear.jpg",
					"Уязвимый вид",
					"Кавказ",
				],
				[
					"Кавказский тур",
					"Capra caucasica",
					"safe",
					"mammal",
					"Горная козь, обитающая на скалистых склонах.",
					"Кавказский тур — горный козел, эндемик Кавказа. Взрослые самцы достигают веса 100 кг и имеют большие рога до 1 м длиной. Живут стадами по 10-30 особей. Отлично приспособлены к жизни в горах, могут передвигаться по почти вертикальным скалам. Питаются травой, листьями, побегами кустарников.",
					"Круглый год",
					"Пугливые животные. При виде человека обычно убегают. Могут агрессивно вести себя в период гона (ноябрь-январь).",
					'{"Наблюдайте издалека", "Не приближайтесь к стаду", "Не мешайте передвижению животных", "Не пытайтесь кормить", "В период гона соблюдайте особую осторожность"}',
					"Скалистые склоны, альпийские луга",
					"Травоядный: трава, листья, побеги кустарников",
					'{"Могут прыгать на 5-6 метров", "Имеют специальные копыта для скалолазания", "Самцы дерутся рогами за самок", "Занесены в Красную книгу России"}',
					"/animals/tur.jpg",
					"Занесен в Красную книгу",
					"Кавказ",
				],
				[
					"Гадюка кавказская",
					"Vipera kaznakovi",
					"very_dangerous",
					"reptile",
					"Ядовитая змея с яркой окраской. Опасна для человека.",
					"Гадюка кавказская — ядовитая змея, эндемик Кавказа. Длина до 70 см. Имеет яркую окраску с оранжево-красным зигзагом на спине. Яд нейротоксичен, опасен для человека. Ведут скрытный образ жизни, активны в теплое время суток. Часто греются на камнях и тропинках.",
					"Апрель-Октябрь",
					"Обычно не нападают первыми. Кусают только в случае опасности. Могут затаиться в траве.",
					'{"Смотрите под ноги", "Не садитесь на камни без осмотра", "Не трогайте змей", "При укусе оставайтесь спокойными", "Наложите шину на укушенную конечность", "Немедленно обратитесь за медицинской помощью", "Не отсасывайте яд", "Не накладывайте жгут"}',
					"Леса, луга, каменистые склоны",
					"Мелкие грызуны, ящерицы, птицы",
					'{"Яд используется в медицине", "Самки рождают живых детенышей", "Могут прожить до 15 лет", "Занесены в Красную книгу"}',
					"/animals/viper.jpg",
					"Занесен в Красную книгу",
					"Кавказ",
				],
				[
					"Беркут",
					"Aquila chrysaetos",
					"potentially",
					"bird",
					"Крупный хищный орел. Может атаковать при защите гнезда.",
					"Беркут — крупная хищная птица, размах крыльев до 2.3 м. Обитает в горных районах. Гнездится на скалах и высоких деревьях. Охотится на средних размеров млекопитающих и птиц. Обладает исключительным зрением — может увидеть добычу с расстояния 2 км.",
					"Круглый год",
					"Обычно избегают людей. Но в период гнездования (март-июль) могут атаковать при приближении к гнезду.",
					'{"Не приближайтесь к гнездам", "При атаке защищайте голову", "Не провоцируйте птиц", "В период гнездования обходите скальные участки"}',
					"Горные районы, скалы",
					"Хищник: сурки, зайцы, птицы",
					'{"Разгоняются до 320 км/ч при пикировании", "Могут поднять добычу весом до 5 кг", "Создают пары на всю жизнь", "Занесены в Красную книгу России"}',
					"/animals/eagle.jpg",
					"Занесен в Красную книгу",
					"Кавказ",
				],
				[
					"Кавказский улар",
					"Tetraogallus caucasicus",
					"safe",
					"bird",
					"Крупная горная курица. Пугливая и осторожная.",
					"Кавказский улар — крупная птица семейства фазановых, эндемик Кавказа. Длина тела до 60 см. Обитает на высотах 1800-4000 м. Питается растительной пищей. Имеет защитную окраску, сливающуюся с камнями. Быстро бегает, летает только в случае опасности.",
					"Круглый год",
					"Очень пугливые. При малейшей опасности убегают или улетают.",
					'{"Наблюдайте издалека", "Не шумите", "Не пытайтесь приблизиться", "Весной не беспокойте на гнездах"}',
					"Высокогорные луга, скалы",
					"Растительноядный: побеги, семена, ягоды",
					'{"Могут зимовать на высотах до 4000 м", "Птенцы сразу после вылупления следуют за матерью", "Занесены в Красную книгу", "Издают характерные свистящие звуки"}',
					"/animals/ular.jpg",
					"Занесен в Красную книгу",
					"Кавказ",
				],
				[
					"Клещ таёжный",
					"Ixodes persulcatus",
					"dangerous",
					"arachnid",
					"Переносчик энцефалита и боррелиоза.",
					"Таёжный клещ — кровососущий паукообразный, переносчик клещевого энцефалита и боррелиоза (болезни Лайма). Активен в теплое время года. Обитает в траве и кустарниках. Может долго ждать свою жертву. Укус безболезненный из-за анестезирующих веществ в слюне.",
					"Апрель-Октябрь",
					"Сидит на траве или кустах, цепляется за проходящих мимо животных и людей.",
					'{"Используйте репелленты", "Носите закрытую одежду", "Осматривайте себя каждые 2 часа", "При укусе обратитесь к врачу", "Сохраните клеща для анализа", "Не выдергивайте резко", "Обработайте место укуса антисептиком"}',
					"Леса, луга, парки",
					"Кровь млекопитающих и птиц",
					'{"Могут голодать до 3 лет", "Самка откладывает до 5000 яиц", "Переносят 30 различных заболеваний", "Могут увеличиваться в размерах до 100 раз"}',
					"/animals/tick.jpg",
					"Обычный вид",
					"Кавказ",
				],
				[
					"Кавказская саламандра",
					"Mertensiella caucasica",
					"safe",
					"amphibian",
					"Небольшая ящерица с яркой окраской.",
					"Кавказская саламандра — хвостатое земноводное, эндемик Кавказа. Длина до 20 см. Имеет яркую окраску с желтыми пятнами на темном фоне. Обитает во влажных местах. Ведут ночной образ жизни. Питаются насекомыми и другими беспозвоночными. Кожа выделяет ядовитый секрет для защиты от хищников.",
					"Апрель-Сентябрь",
					"Очень скрытные. При опасности выделяют ядовитый секрет.",
					'{"Не трогайте руками", "Не берите в руки", "После контакта вымойте руки", "Не допускайте контакта с глазами"}',
					"Влажные леса, берега ручьев",
					"Насекомые, черви, слизни",
					'{"Могут регенерировать утраченные конечности", "Яд не опасен для человека, но может вызвать раздражение", "Живут до 20 лет", "Занесены в Красную книгу"}',
					"/animals/salamander.jpg",
					"Занесен в Красную книгу",
					"Кавказ",
				],
				[
					"Шакал",
					"Canis aureus",
					"potentially",
					"mammal",
					"Хищник семейства псовых. Может приближаться к лагерям.",
					"Шакал — хищник средних размеров семейства псовых. Вес 8-12 кг. Активен в сумерках и ночью. Всеядный, часто питается падалью. Может приближаться к человеческим жилищам и туристическим лагерям в поисках пищи. Обычно осторожен, но в голодное время может проявлять наглость.",
					"Круглый год",
					"Осторожны, но любопытны. Могут красть пищу из лагерей.",
					'{"Не оставляйте пищу без присмотра", "Не подкармливайте", "При приближении шумите", "Храните продукты в герметичных контейнерах", "Не оставляйте мусор"}',
					"Леса, побережья, окрестности населенных пунктов",
					"Всеядный: мелкие животные, фрукты, падаль, отходы",
					'{"Могут охотиться группами", "Издают характерный вой по ночам", "Отличные пловцы", "В природе живут 8-9 лет"}',
					"/animals/jackal.jpg",
					"Обычный вид",
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
			console.log("Тестовые данные животных добавлены");
		}

		console.log(`В таблице маршрутов: ${routeCount} записей`);
		console.log(`В таблице животных: ${animalCount} записей`);
		return true;
	} catch (error) {
		console.error("Ошибка при настройке базы данных:", error.message);
		return false;
	}
}

// API для животных

// Главная страница
app.get("/", (req, res) => {
	res.send("Сервер животных и маршрутов работает. Используйте API.");
});

// Получить одного маршрута по ID
app.get("/api/routes/:id", async (req, res) => {
	try {
		const { id } = req.params;

		if (isNaN(id)) {
			return res.status(400).json({ error: "ID должен быть числом" });
		}

		const { rows } = await pool.query(
			"SELECT * FROM hiking_routes WHERE id = $1",
			[parseInt(id)]
		);

		if (rows.length === 0) {
			return res.status(404).json({ error: "Маршрут не найден" });
		}

		res.json(rows[0]);
	} catch (err) {
		console.error("Ошибка при получении маршрута:", err);
		res.status(500).json({ error: "Ошибка сервера", details: err.message });
	}
});

// Получить маршруты с фильтрацией
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
		console.error("Ошибка в /api/routes:", error);
		res.status(500).json({ error: "Ошибка сервера", details: error.message });
	}
});

// Получить одно животное по ID
app.get("/api/animals/:id", async (req, res) => {
	try {
		const { id } = req.params;

		if (isNaN(id)) {
			return res.status(400).json({ error: "ID должен быть числом" });
		}

		const { rows } = await pool.query("SELECT * FROM animals WHERE id = $1", [
			parseInt(id),
		]);

		if (rows.length === 0) {
			return res.status(404).json({ error: "Животное не найдено" });
		}

		res.json(rows[0]);
	} catch (err) {
		console.error("Ошибка при получении животного:", err);
		res.status(500).json({ error: "Ошибка сервера", details: err.message });
	}
});

// Получить животных с фильтрацией
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
		console.error("Ошибка в /api/animals:", error);
		res.status(500).json({ error: "Ошибка сервера", details: error.message });
	}
});

// Настройка БД
app.get("/api/setup-db", async (req, res) => {
	const success = await setupDatabase();
	res.json({
		success,
		message: success ? "База данных настроена" : "Ошибка при настройке БД",
	});
});

// Проверка здоровья
app.get("/api/health", async (req, res) => {
	try {
		await pool.query("SELECT 1");
		res.json({
			status: "OK",
			database: "connected",
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		res.status(500).json({
			status: "ERROR",
			database: "disconnected",
			error: error.message,
		});
	}
});

// Пересоздать таблицу животных
app.get("/api/recreate-animals", async (req, res) => {
	try {
		await pool.query("DROP TABLE IF EXISTS animals");

		await pool.query(`
            CREATE TABLE animals (
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

		// Добавление тестовых данных животных
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

		res.json({
			success: true,
			message: "Таблица животных пересоздана и заполнена",
		});
	} catch (error) {
		console.error("Ошибка при пересоздании таблицы животных:", error);
		res.status(500).json({
			success: false,
			message: "Ошибка при пересоздании таблицы животных",
			error: error.message,
		});
	}
});

// Запуск сервера
const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
	console.log(`Сервер запущен на порту ${PORT}`);

	const dbReady = await setupDatabase();

	if (dbReady) {
		console.log("Сервер готов к работе");
	} else {
		console.log("Проблемы с базой данных. Проверьте подключение.");
	}
});
