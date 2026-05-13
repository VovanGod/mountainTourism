import { apiRequest, buildQuery } from "@/shared/api/request";
import { normalizeAnimal } from "@/entities/animal/lib/normalizeAnimal";

export const animalsApi = {
	async getAnimals(filters = {}, options = {}) {
		const query = buildQuery({
			danger_level: filters.dangerLevel,
			animal_type: filters.animalType,
		});
		const animals = await apiRequest(`/api/animals${query}`, options);
		return animals.map(normalizeAnimal);
	},

	async getAnimal(id, options = {}) {
		const animal = await apiRequest(`/api/animals/${id}`, options);
		return normalizeAnimal(animal);
	},
};
