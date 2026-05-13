"use client";

import { AnimalCard } from "@/entities/animal/ui/AnimalCard/AnimalCard";
import { useAnimals } from "@/features/animalFilters/model/useAnimals";
import { AnimalFilters } from "@/features/animalFilters/ui/AnimalFilters";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import { EmptyState, ErrorState, LoadingState } from "@/shared/ui/PageState/PageState";
import { PawIcon } from "@/shared/ui/icons/Icons";
import styles from "./AnimalsPage.module.scss";

export function AnimalsPage() {
	const {
		filters,
		animals,
		isLoading,
		error,
		hasActiveFilters,
		updateFilter,
		resetFilters,
	} = useAnimals();

	return (
		<>
			<main className={styles.page}>
				<div className="page-container">
					<AnimalFilters
						filters={filters}
						isLoading={isLoading}
						hasActiveFilters={hasActiveFilters}
						onChange={updateFilter}
						onReset={resetFilters}
					/>

					<section className={styles.results}>
						{error && (
							<ErrorState
								text={`${error}. Проверьте, что сервер запущен на порту 5001.`}
							/>
						)}

						{!error && isLoading && <LoadingState text="Загрузка данных..." />}

						{!error && !isLoading && animals.length === 0 && (
							<EmptyState
								title="Животные не найдены"
								text="Попробуйте изменить параметры фильтрации."
								icon={<PawIcon size={56} />}
							/>
						)}

						{!error && !isLoading && animals.length > 0 && (
							<div className={styles.grid}>
								{animals.map((animal) => (
									<AnimalCard key={animal.id} animal={animal} />
								))}
							</div>
						)}
					</section>
				</div>
			</main>
			<BottomNav activeItem="animals" />
		</>
	);
}
