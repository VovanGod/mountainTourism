import { apiRequest, buildQuery } from "@/shared/api/request";
import { API_BASE_URL } from "@/shared/config/api";
import { normalizeRoute } from "@/entities/hiking/lib/normalizeRoute";

export const hikingApi = {
	async getRoutes(filters = {}, options = {}) {
		const query = buildQuery({
			difficulty: filters.difficulty,
			maxDistance: filters.maxDistance,
			maxDuration: filters.maxDuration,
		});
		const routes = await apiRequest(`/api/routes${query}`, options);
		return routes.map(normalizeRoute);
	},

	async getRoute(id, options = {}) {
		const route = await apiRequest(`/api/routes/${id}`, options);
		return normalizeRoute(route);
	},

	getGpxUrl(id) {
		return `${API_BASE_URL}/api/routes/${id}/gpx`;
	},
};
