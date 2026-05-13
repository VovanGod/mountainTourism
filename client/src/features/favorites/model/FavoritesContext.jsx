"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { favoritesApi } from "@/features/favorites/api/favoritesApi";
import { useAuth } from "@/features/auth/model/AuthContext";

const FavoritesContext = createContext(null);

function toSet(values) {
	return new Set((values || []).map(Number));
}

export function FavoritesProvider({ children }) {
	const { isAuthenticated, token } = useAuth();
	const [routeIds, setRouteIds] = useState(new Set());
	const [animalIds, setAnimalIds] = useState(new Set());

	const applyFavorites = useCallback((favorites) => {
		setRouteIds(toSet(favorites.routes));
		setAnimalIds(toSet(favorites.animals));
	}, []);

	useEffect(() => {
		if (!isAuthenticated || !token) {
			return;
		}

		favoritesApi
			.getFavorites(token)
			.then(applyFavorites)
			.catch(() => applyFavorites({ routes: [], animals: [] }));
	}, [applyFavorites, isAuthenticated, token]);

	const toggleRoute = useCallback(async (routeId) => {
		if (!isAuthenticated) {
			return { needsAuth: true };
		}

		const normalizedId = Number(routeId);
		const isFavorite = routeIds.has(normalizedId);
		const favorites = isFavorite
			? await favoritesApi.removeRoute(normalizedId, token)
			: await favoritesApi.addRoute(normalizedId, token);
		applyFavorites(favorites);

		return { isFavorite: !isFavorite };
	}, [isAuthenticated, routeIds, token, applyFavorites]);

	const toggleAnimal = useCallback(async (animalId) => {
		if (!isAuthenticated) {
			return { needsAuth: true };
		}

		const normalizedId = Number(animalId);
		const isFavorite = animalIds.has(normalizedId);
		const favorites = isFavorite
			? await favoritesApi.removeAnimal(normalizedId, token)
			: await favoritesApi.addAnimal(normalizedId, token);
		applyFavorites(favorites);

		return { isFavorite: !isFavorite };
	}, [animalIds, isAuthenticated, token, applyFavorites]);

	const value = useMemo(
		() => {
			const visibleRouteIds = isAuthenticated ? routeIds : new Set();
			const visibleAnimalIds = isAuthenticated ? animalIds : new Set();

			return {
				animalIds: visibleAnimalIds,
				isAnimalFavorite: (id) => visibleAnimalIds.has(Number(id)),
				isRouteFavorite: (id) => visibleRouteIds.has(Number(id)),
				routeIds: visibleRouteIds,
				toggleAnimal,
				toggleRoute,
			};
		},
		[animalIds, isAuthenticated, routeIds, toggleAnimal, toggleRoute]
	);

	return (
		<FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
	);
}

export function useFavorites() {
	const context = useContext(FavoritesContext);

	if (!context) {
		throw new Error("useFavorites must be used inside FavoritesProvider");
	}

	return context;
}
