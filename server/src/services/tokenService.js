const crypto = require("crypto");
const { config } = require("../config/env");

function base64UrlEncode(value) {
	return Buffer.from(JSON.stringify(value))
		.toString("base64url");
}

function sign(data) {
	return crypto
		.createHmac("sha256", config.server.jwtSecret)
		.update(data)
		.digest("base64url");
}

function signToken(payload) {
	const now = Math.floor(Date.now() / 1000);
	const header = { alg: "HS256", typ: "JWT" };
	const body = {
		...payload,
		iat: now,
		exp: now + config.server.jwtExpiresInSeconds,
	};
	const unsignedToken = `${base64UrlEncode(header)}.${base64UrlEncode(body)}`;

	return `${unsignedToken}.${sign(unsignedToken)}`;
}

function verifyToken(token) {
	const [encodedHeader, encodedPayload, signature] = String(token).split(".");

	if (!encodedHeader || !encodedPayload || !signature) {
		throw new Error("Неверный токен");
	}

	const unsignedToken = `${encodedHeader}.${encodedPayload}`;
	const expectedSignature = sign(unsignedToken);

	if (signature.length !== expectedSignature.length) {
		throw new Error("Неверная подпись токена");
	}

	if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
		throw new Error("Неверная подпись токена");
	}

	const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8"));
	const now = Math.floor(Date.now() / 1000);

	if (payload.exp && payload.exp < now) {
		throw new Error("Срок действия токена истек");
	}

	return payload;
}

module.exports = { signToken, verifyToken };
