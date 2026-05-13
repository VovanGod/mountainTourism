import { apiRequest } from "@/shared/api/request";

export const reviewsApi = {
	getRouteReviews(routeId, options = {}) {
		return apiRequest(`/api/routes/${routeId}/reviews`, options);
	},

	saveRouteReview(routeId, payload, token) {
		return apiRequest(`/api/routes/${routeId}/reviews`, {
			method: "POST",
			token,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
	},
};
