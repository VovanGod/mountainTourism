import { apiRequest } from "@/shared/api/request";

export const weatherApi = {
	getCurrent(options = {}) {
		return apiRequest("/api/weather", options);
	},
};
