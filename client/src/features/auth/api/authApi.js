import { apiRequest } from "@/shared/api/request";

function jsonOptions(body, extra = {}) {
	return {
		...extra,
		method: extra.method || "POST",
		headers: {
			"Content-Type": "application/json",
			...(extra.headers || {}),
		},
		body: JSON.stringify(body),
	};
}

export const authApi = {
	register(payload) {
		return apiRequest("/api/auth/register", jsonOptions(payload));
	},

	login(payload) {
		return apiRequest("/api/auth/login", jsonOptions(payload));
	},

	me(token) {
		return apiRequest("/api/auth/me", { token });
	},
};
