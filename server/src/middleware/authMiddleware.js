const { findUserById } = require("../repositories/usersRepository");
const { verifyToken } = require("../services/tokenService");

async function requireAuth(req, res, next) {
	try {
		const header = req.headers.authorization || "";
		const [scheme, token] = header.split(" ");

		if (scheme !== "Bearer" || !token) {
			return res.status(401).json({ error: "Нужно войти в аккаунт" });
		}

		const payload = verifyToken(token);
		const user = await findUserById(payload.sub);

		if (!user) {
			return res.status(401).json({ error: "Пользователь не найден" });
		}

		req.user = user;
		next();
	} catch (error) {
		res.status(401).json({ error: "Сессия устарела, войдите снова" });
	}
}

module.exports = { requireAuth };
