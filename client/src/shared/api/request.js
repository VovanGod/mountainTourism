import { API_BASE_URL } from "@/shared/config/api";

export function buildQuery(params) {
	const query = new URLSearchParams();

	Object.entries(params).forEach(([key, value]) => {
		if (value !== undefined && value !== null && value !== "" && value !== "all") {
			query.set(key, value);
		}
	});

	const serialized = query.toString();
	return serialized ? `?${serialized}` : "";
}

export async function apiRequest(path, options = {}) {
	const { token, headers, ...fetchOptions } = options;
	const requestHeaders = { ...headers };

	if (token) {
		requestHeaders.Authorization = `Bearer ${token}`;
	}

	const response = await fetch(`${API_BASE_URL}${path}`, {
		...fetchOptions,
		headers: requestHeaders,
	});

	if (!response.ok) {
		let message = `Ошибка сервера: ${response.status}`;

		try {
			const error = await response.json();
			message = error.error || message;
		} catch {
			// The response body is optional for API errors.
		}

		throw new Error(message);
	}

	return response.json();
}
