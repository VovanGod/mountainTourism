import { toArray } from "@/shared/lib/toArray";
import { routeImagesByTitle } from "@/entities/hiking/model/routeConstants";

export function normalizeRoute(route) {
	const title = route.title || "Маршрут";

	return {
		id: route.id,
		title,
		difficulty: Number(route.difficulty || 0),
		distanceKm: Number(route.distance_km || route.distanceKm || 0),
		durationHours: Number(route.duration_hours || route.durationHours || 0),
		elevation: route.elevation,
		routeType: route.route_type || route.routeType,
		description: route.description,
		fullDescription: route.full_description || route.fullDescription,
		equipment: toArray(route.equipment),
		howToGet: route.how_to_get || route.howToGet,
		attractions: toArray(route.attractions),
		offlineSummary: route.offline_summary || route.offlineSummary,
		offlineChecklist: toArray(route.offline_checklist || route.offlineChecklist),
		navigationTips: toArray(route.navigation_tips || route.navigationTips),
		emergencyNotes: toArray(route.emergency_notes || route.emergencyNotes),
		imageUrl: routeImagesByTitle[title] || route.image_url || route.imageUrl,
		region: route.region,
		bestSeason: route.best_season || route.bestSeason,
		averageRating: Number(route.average_rating || route.averageRating || 0),
		reviewsCount: Number(route.reviews_count || route.reviewsCount || 0),
	};
}
