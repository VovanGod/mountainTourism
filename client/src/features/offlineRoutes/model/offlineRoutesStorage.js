const STORAGE_KEY = "mountain-tourism-offline-routes";

export function getOfflineRoutes() {
	if (typeof window === "undefined") {
		return [];
	}

	try {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
	} catch {
		return [];
	}
}

export function saveOfflineRoute(route) {
	const routes = getOfflineRoutes();
	const compactRoute = {
		id: route.id,
		title: route.title,
		difficulty: route.difficulty,
		distanceKm: route.distanceKm,
		durationHours: route.durationHours,
		elevation: route.elevation,
		region: route.region,
		bestSeason: route.bestSeason,
		description: route.description,
		fullDescription: route.fullDescription,
		howToGet: route.howToGet,
		offlineSummary: route.offlineSummary,
		offlineChecklist: route.offlineChecklist,
		navigationTips: route.navigationTips,
		emergencyNotes: route.emergencyNotes,
		savedAt: new Date().toISOString(),
	};
	const nextRoutes = [
		compactRoute,
		...routes.filter((item) => Number(item.id) !== Number(route.id)),
	];

	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRoutes));
	return nextRoutes;
}

export function removeOfflineRoute(routeId) {
	const nextRoutes = getOfflineRoutes().filter(
		(route) => Number(route.id) !== Number(routeId)
	);
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRoutes));
	return nextRoutes;
}
