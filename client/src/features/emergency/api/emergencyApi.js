import { apiRequest } from "@/shared/api/request";

export const emergencyApi = {
	getStatus(options = {}) {
		return apiRequest("/api/emergency", options);
	},
};
