"use client";

import { useEffect, useState } from "react";
import { animalsApi } from "@/entities/animal/api/animalsApi";

const initialFilters = {
	dangerLevel: "all",
	animalType: "all",
};

export function useAnimals() {
	const [filters, setFilters] = useState(initialFilters);
	const [animals, setAnimals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		async function loadAnimals() {
			setIsLoading(true);
			setError(null);

			try {
				const data = await animalsApi.getAnimals(filters, {
					signal: controller.signal,
				});
				setAnimals(data);
			} catch (requestError) {
				if (requestError.name !== "AbortError") {
					setError(requestError.message);
					setAnimals([]);
				}
			} finally {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			}
		}

		loadAnimals();
		return () => controller.abort();
	}, [filters]);

	const updateFilter = (name, value) => {
		setFilters((current) => ({ ...current, [name]: value }));
	};

	const resetFilters = () => {
		setFilters(initialFilters);
	};

	const hasActiveFilters =
		filters.dangerLevel !== "all" || filters.animalType !== "all";

	return {
		filters,
		animals,
		isLoading,
		error,
		hasActiveFilters,
		updateFilter,
		resetFilters,
	};
}
