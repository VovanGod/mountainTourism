"use client";

import { RouteCard } from "@/entities/hiking/ui/RouteCard/RouteCard";
import { useHikingRoutes } from "@/features/hikingFilters/model/useHikingRoutes";
import { HikingFilters } from "@/features/hikingFilters/ui/HikingFilters";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import { EmptyState, ErrorState, LoadingState } from "@/shared/ui/PageState/PageState";
import { MountainIcon } from "@/shared/ui/icons/Icons";
import styles from "./HikingPage.module.scss";

export function HikingPage() {
	const {
		filters,
		routes,
		isLoading,
		error,
		hasActiveFilters,
		updateFilter,
		resetFilters,
	} = useHikingRoutes();

	return (
		<>
			<main className={styles.page}>
				<div className="page-container">
					<HikingFilters
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

						{!error && isLoading && <LoadingState text="Загрузка маршрутов..." />}

						{!error && !isLoading && routes.length === 0 && (
							<EmptyState
								title="Маршруты не найдены"
								text="Попробуйте изменить параметры фильтрации."
								icon={<MountainIcon size={56} />}
							/>
						)}

						{!error && !isLoading && routes.length > 0 && (
							<div className={styles.grid}>
								{routes.map((route) => (
									<RouteCard key={route.id} route={route} />
								))}
							</div>
						)}
					</section>
				</div>
			</main>
			<BottomNav activeItem="hiking" />
		</>
	);
}
