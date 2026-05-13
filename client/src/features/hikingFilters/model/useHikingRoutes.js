"use client";

import { useEffect, useState } from "react";
import { hikingApi } from "@/entities/hiking/api/hikingApi";

const initialFilters = {
	difficulty: "all",
	maxDistance: "",
	maxDuration: "",
};

export function useHikingRoutes() {
	const [filters, setFilters] = useState(initialFilters);
	const [routes, setRoutes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		async function loadRoutes() {
			setIsLoading(true);
			setError(null);

			try {
				const data = await hikingApi.getRoutes(filters, {
					signal: controller.signal,
				});
				setRoutes(data);
			} catch (requestError) {
				if (requestError.name !== "AbortError") {
					setError(requestError.message);
					setRoutes([]);
				}
			} finally {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			}
		}

		loadRoutes();
		return () => controller.abort();
	}, [filters]);

	const updateFilter = (name, value) => {
		setFilters((current) => ({ ...current, [name]: value }));
	};

	const resetFilters = () => {
		setFilters(initialFilters);
	};

	const hasActiveFilters =
		filters.difficulty !== "all" || filters.maxDistance || filters.maxDuration;

	return {
		filters,
		routes,
		isLoading,
		error,
		hasActiveFilters,
		updateFilter,
		resetFilters,
	};
}
