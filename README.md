# Горный туризм

Курсовой проект: приложение для горного туризма в Краснодарском крае и на Западном Кавказе.

## Что есть

- Маршруты с подробным описанием, GPX-треками, офлайн-памятками и отзывами.
- Животные с уровнем опасности, поведением и действиями при встрече.
- Авторизация пользователей, избранные маршруты и животные.
- Живая погода через backend и Open-Meteo.
- Рабочий виджет МЧС с номером 112.
- Расширенная страница безопасности.

## Стек

- `client` - Next.js, React, SCSS Modules.
- `server` - Express API.
- База данных - PostgreSQL.

## Быстрый запуск

1. Установить зависимости:

```bash
npm run install:all
```

2. Проверить `server/.env`.

Если файла нет, можно взять пример из `server/.env.example`. Для твоего локального PostgreSQL обычно достаточно:

```env
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=12345
PGDATABASE=hiking_db
JWT_SECRET=replace-with-a-long-random-secret
```

3. Запустить клиент и сервер одной командой:

```bash
npm run dev
```

Клиент: [http://localhost:3000](http://localhost:3000)  
API: [http://localhost:5001](http://localhost:5001)

При старте сервер сам проверяет базу `hiking_db`, создает таблицы, добавляет недостающие колонки и обновляет demo-данные.

## Полезные команды

```bash
npm run lint
npm run build
npm run server:start
npm run client
```

## Архитектура клиента

Клиент разложен по простой FSD-структуре:

- `src/app` - роуты Next.js, layout и провайдеры.
- `src/views` - экраны страниц.
- `src/widgets` - крупные блоки страниц.
- `src/features` - пользовательские сценарии: auth, избранное, отзывы, offline, погода.
- `src/entities` - маршруты, животные, безопасность, погода.
- `src/shared` - общий API-клиент, UI, стили и утилиты.
