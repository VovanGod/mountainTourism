import { toArray } from "@/shared/lib/toArray";
import { animalImagesByTitle } from "@/entities/animal/model/animalConstants";

export function normalizeAnimal(animal) {
	const title = animal.title || "Животное";

	return {
		id: animal.id,
		title,
		scientificName: animal.scientific_name || animal.scientificName,
		dangerLevel: animal.danger_level || animal.dangerLevel,
		animalType: animal.animal_type || animal.animalType,
		shortDescription: animal.short_description || animal.shortDescription,
		fullDescription: animal.full_description || animal.fullDescription,
		seasonActivity: animal.season_activity || animal.seasonActivity,
		behavior: animal.behavior,
		meetingActions: toArray(animal.meeting_actions || animal.meetingActions),
		habitat: animal.habitat,
		diet: animal.diet,
		interestingFacts: toArray(
			animal.interesting_facts || animal.interestingFacts
		),
		imageUrl: animalImagesByTitle[title] || animal.image_url || animal.imageUrl,
		conservationStatus:
			animal.conservation_status || animal.conservationStatus,
		region: animal.region,
	};
}
