const crypto = require("crypto");

const HASH_ALGORITHM = "sha512";
const HASH_ITERATIONS = 100000;
const HASH_KEY_LENGTH = 64;

function hashPassword(password) {
	const salt = crypto.randomBytes(16).toString("hex");
	const hash = crypto
		.pbkdf2Sync(password, salt, HASH_ITERATIONS, HASH_KEY_LENGTH, HASH_ALGORITHM)
		.toString("hex");

	return `pbkdf2$${HASH_ITERATIONS}$${salt}$${hash}`;
}

function verifyPassword(password, storedHash) {
	const [method, iterations, salt, originalHash] = String(storedHash).split("$");

	if (method !== "pbkdf2" || !iterations || !salt || !originalHash) {
		return false;
	}

	const hash = crypto
		.pbkdf2Sync(
			password,
			salt,
			Number(iterations),
			HASH_KEY_LENGTH,
			HASH_ALGORITHM
		)
		.toString("hex");

	return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(originalHash, "hex"));
}

module.exports = { hashPassword, verifyPassword };
