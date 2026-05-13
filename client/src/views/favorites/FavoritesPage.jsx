"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { animalsApi } from "@/entities/animal/api/animalsApi";
import { AnimalCard } from "@/entities/animal/ui/AnimalCard/AnimalCard";
import { hikingApi } from "@/entities/hiking/api/hikingApi";
import { RouteCard } from "@/entities/hiking/ui/RouteCard/RouteCard";
import { useAuth } from "@/features/auth/model/AuthContext";
import { useFavorites } from "@/features/favorites/model/FavoritesContext";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import { EmptyState, ErrorState, LoadingState } from "@/shared/ui/PageState/PageState";
import { HeartIcon } from "@/shared/ui/icons/Icons";
import styles from "./FavoritesPage.module.scss";

export function FavoritesPage() {
	const { isAuthenticated } = useAuth();
	const { routeIds, animalIds } = useFavorites();
	const [routes, setRoutes] = useState([]);
	const [animals, setAnimals] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!isAuthenticated) {
			return;
		}

		const controller = new AbortController();

		async function loadFavoritesData() {
			setIsLoading(true);
			setError(null);

			try {
				const [routesData, animalsData] = await Promise.all([
					hikingApi.getRoutes({}, { signal: controller.signal }),
					animalsApi.getAnimals({}, { signal: controller.signal }),
				]);
				setRoutes(routesData);
				setAnimals(animalsData);
			} catch (requestError) {
				if (requestError.name !== "AbortError") {
					setError(requestError.message);
				}
			} finally {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			}
		}

		loadFavoritesData();

		return () => controller.abort();
	}, [isAuthenticated]);

	const favoriteRoutes = useMemo(
		() => routes.filter((route) => routeIds.has(Number(route.id))),
		[routes, routeIds]
	);
	const favoriteAnimals = useMemo(
		() => animals.filter((animal) => animalIds.has(Number(animal.id))),
		[animals, animalIds]
	);
	const hasFavorites = favoriteRoutes.length > 0 || favoriteAnimals.length > 0;

	return (
		<>
			<main className={styles.page}>
				<div className="page-container">
					<header className={styles.header}>
						<h1>Избранное</h1>
						<p>Здесь собираются маршруты и животные, которые пользователь сохранил после входа в аккаунт.</p>
					</header>

					{!isAuthenticated && (
						<EmptyState
							title="Войдите в аккаунт"
							text="Избранное привязано к пользователю, поэтому после входа оно сохранится между запусками."
							icon={<HeartIcon size={56} />}
						/>
					)}

					{isAuthenticated && isLoading && <LoadingState text="Загрузка избранного..." />}

					{isAuthenticated && error && <ErrorState text={error} />}

					{isAuthenticated && !isLoading && !error && !hasFavorites && (
						<EmptyState
							title="В избранном пока пусто"
							text="Откройте маршрут или животное и нажмите «В избранное»."
							icon={<HeartIcon size={56} />}
						/>
					)}

					{isAuthenticated && !isLoading && !error && hasFavorites && (
						<div className={styles.sections}>
							{favoriteRoutes.length > 0 && (
								<section className={styles.section}>
									<div className={styles.sectionHeader}>
										<h2>Маршруты</h2>
										<Link href="/hiking">Все маршруты</Link>
									</div>
									<div className={styles.grid}>
										{favoriteRoutes.map((route) => (
											<RouteCard key={route.id} route={route} />
										))}
									</div>
								</section>
							)}

							{favoriteAnimals.length > 0 && (
								<section className={styles.section}>
									<div className={styles.sectionHeader}>
										<h2>Животные</h2>
										<Link href="/animals">Все животные</Link>
									</div>
									<div className={styles.grid}>
										{favoriteAnimals.map((animal) => (
											<AnimalCard key={animal.id} animal={animal} />
										))}
									</div>
								</section>
							)}
						</div>
					)}
				</div>
			</main>
			<BottomNav activeItem="favorites" />
		</>
	);
}
