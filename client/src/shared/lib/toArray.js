export function toArray(value) {
	if (!value) {
		return [];
	}

	if (Array.isArray(value)) {
		return value.filter(Boolean);
	}

	if (typeof value !== "string") {
		return [];
	}

	try {
		const parsed = JSON.parse(value);
		return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
	} catch {
		return value
			.replace(/^\{|\}$/g, "")
			.split(/","|,/)
			.map((item) => item.replace(/^"|"$/g, "").trim())
			.filter(Boolean);
	}
}
