"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
	getOfflineRoutes,
	removeOfflineRoute,
} from "@/features/offlineRoutes/model/offlineRoutesStorage";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import { EmptyState } from "@/shared/ui/PageState/PageState";
import { MapPinIcon, MountainIcon, TrashIcon } from "@/shared/ui/icons/Icons";
import styles from "./OfflinePage.module.scss";

function formatDate(value) {
	if (!value) {
		return "";
	}

	return new Intl.DateTimeFormat("ru-RU", {
		day: "2-digit",
		month: "long",
		hour: "2-digit",
		minute: "2-digit",
	}).format(new Date(value));
}

export function OfflinePage() {
	const [routes, setRoutes] = useState(() => getOfflineRoutes());

	useEffect(() => {
		queueMicrotask(() => setRoutes(getOfflineRoutes()));
	}, []);

	function handleRemove(routeId) {
		setRoutes(removeOfflineRoute(routeId));
	}

	return (
		<>
			<main className={styles.page}>
				<div className="page-container">
					<header className={styles.header}>
						<h1>Офлайн-маршруты</h1>
						<p>
							Здесь хранятся памятки, которые вы сохранили на странице маршрута.
							Они открываются даже без сервера и интернета, пока данные есть в браузере.
						</p>
					</header>

					{routes.length === 0 ? (
						<EmptyState
							title="Пока ничего не сохранено"
							text="Откройте любой маршрут и нажмите «Сохранить офлайн»."
							icon={<MountainIcon size={56} />}
						/>
					) : (
						<div className={styles.list}>
							{routes.map((route) => (
								<article key={route.id} className={styles.card}>
									<div className={styles.cardTop}>
										<div>
											<h2>{route.title}</h2>
											<span>
												<MapPinIcon size={14} />
												{route.region}
											</span>
										</div>
										<button
											type="button"
											onClick={() => handleRemove(route.id)}
											title="Удалить офлайн-памятку"
										>
											<TrashIcon size={18} />
										</button>
									</div>

									<div className={styles.meta}>
										<span>{route.distanceKm} км</span>
										<span>{route.durationHours} ч</span>
										<span>{route.elevation}</span>
										<span>Сохранено: {formatDate(route.savedAt)}</span>
									</div>

									<p className={styles.summary}>{route.offlineSummary || route.description}</p>

									<section>
										<h3>Как добраться</h3>
										<p>{route.howToGet}</p>
									</section>

									<section>
										<h3>Чек-лист перед выходом</h3>
										<ul>
											{(route.offlineChecklist || []).map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>
									</section>

									<section>
										<h3>Навигация и безопасность</h3>
										<ul>
											{[...(route.navigationTips || []), ...(route.emergencyNotes || [])].map(
												(item) => (
													<li key={item}>{item}</li>
												)
											)}
										</ul>
									</section>

									<Link href={`/hiking/${route.id}`} className={styles.link}>
										Открыть полную страницу
									</Link>
								</article>
							))}
						</div>
					)}
				</div>
			</main>
			<BottomNav activeItem="offline" />
		</>
	);
}
