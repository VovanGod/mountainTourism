"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { hikingApi } from "@/entities/hiking/api/hikingApi";
import { RouteDetails } from "@/entities/hiking/ui/RouteDetails/RouteDetails";
import { RouteReviews } from "@/features/routeReviews/ui/RouteReviews";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import { ErrorState, LoadingState } from "@/shared/ui/PageState/PageState";
import styles from "./HikingRoutePage.module.scss";

export function HikingRoutePage() {
	const { id } = useParams();
	const [route, setRoute] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		async function loadRoute() {
			setIsLoading(true);
			setError(null);

			try {
				const data = await hikingApi.getRoute(id, { signal: controller.signal });
				setRoute(data);
			} catch (requestError) {
				if (requestError.name !== "AbortError") {
					setError(requestError.message);
					setRoute(null);
				}
			} finally {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			}
		}

		if (id) {
			loadRoute();
		}

		return () => controller.abort();
	}, [id]);

	return (
		<>
			<main className={styles.page}>
				<div className={styles.container}>
					{isLoading && <LoadingState text="Загрузка маршрута..." />}

					{!isLoading && error && (
						<ErrorState
							text={error}
							action={
								<Link href="/hiking" className={styles.action}>
									Вернуться к маршрутам
								</Link>
							}
						/>
					)}

					{!isLoading && !error && route && (
						<>
							<RouteDetails route={route} />
							<RouteReviews routeId={route.id} />
						</>
					)}
				</div>
			</main>
			<BottomNav activeItem="hiking" />
		</>
	);
}
