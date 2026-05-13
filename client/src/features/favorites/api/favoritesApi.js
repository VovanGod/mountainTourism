import { apiRequest } from "@/shared/api/request";

export const favoritesApi = {
	getFavorites(token) {
		return apiRequest("/api/favorites", { token });
	},

	addRoute(routeId, token) {
		return apiRequest(`/api/favorites/routes/${routeId}`, { method: "POST", token });
	},

	removeRoute(routeId, token) {
		return apiRequest(`/api/favorites/routes/${routeId}`, { method: "DELETE", token });
	},

	addAnimal(animalId, token) {
		return apiRequest(`/api/favorites/animals/${animalId}`, { method: "POST", token });
	},

	removeAnimal(animalId, token) {
		return apiRequest(`/api/favorites/animals/${animalId}`, { method: "DELETE", token });
	},
};
