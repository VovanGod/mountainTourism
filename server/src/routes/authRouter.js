const { Router } = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const {
	createUser,
	findUserByEmail,
	sanitizeUser,
} = require("../repositories/usersRepository");
const { hashPassword, verifyPassword } = require("../services/passwordService");
const { signToken } = require("../services/tokenService");

const authRouter = Router();

function createSession(user) {
	return {
		user: sanitizeUser(user),
		token: signToken({ sub: user.id, email: user.email }),
	};
}

function normalizeCredentials(body) {
	return {
		name: String(body.name || "").trim(),
		email: String(body.email || "").trim().toLowerCase(),
		password: String(body.password || ""),
	};
}

authRouter.post("/register", async (req, res, next) => {
	try {
		const { name, email, password } = normalizeCredentials(req.body);

		if (name.length < 2) {
			return res.status(400).json({ error: "Укажите имя не короче 2 символов" });
		}

		if (!email.includes("@")) {
			return res.status(400).json({ error: "Укажите корректный email" });
		}

		if (password.length < 6) {
			return res.status(400).json({ error: "Пароль должен быть не короче 6 символов" });
		}

		const existingUser = await findUserByEmail(email);

		if (existingUser) {
			return res.status(409).json({ error: "Пользователь с таким email уже есть" });
		}

		const user = await createUser({
			name,
			email,
			passwordHash: hashPassword(password),
		});

		res.status(201).json(createSession(user));
	} catch (error) {
		next(error);
	}
});

authRouter.post("/login", async (req, res, next) => {
	try {
		const { email, password } = normalizeCredentials(req.body);
		const user = await findUserByEmail(email);

		if (!user || !verifyPassword(password, user.password_hash)) {
			return res.status(401).json({ error: "Неверный email или пароль" });
		}

		res.json(createSession(user));
	} catch (error) {
		next(error);
	}
});

authRouter.get("/me", requireAuth, (req, res) => {
	res.json({ user: req.user });
});

module.exports = { authRouter };
