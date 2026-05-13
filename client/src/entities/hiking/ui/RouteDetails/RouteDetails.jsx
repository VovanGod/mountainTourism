import Link from "next/link";
import { hikingApi } from "@/entities/hiking/api/hikingApi";
import { DifficultyStars } from "@/entities/hiking/ui/DifficultyStars/DifficultyStars";
import { routeTypeInfo } from "@/entities/hiking/model/routeConstants";
import { FavoriteButton } from "@/features/favorites/ui/FavoriteButton";
import { OfflineRouteActions } from "@/features/offlineRoutes/ui/OfflineRouteActions";
import { ImageWithFallback } from "@/shared/ui/ImageWithFallback/ImageWithFallback";
import {
	BagIcon,
	AlertIcon,
	BookIcon,
	CheckIcon,
	ChevronLeftIcon,
	ClockIcon,
	DistanceIcon,
	DownloadIcon,
	ElevationIcon,
	MapPinIcon,
	MountainIcon,
	SaveIcon,
	StarIcon,
	SunIcon,
} from "@/shared/ui/icons/Icons";
import styles from "./RouteDetails.module.scss";

function StatCard({ icon, value, label }) {
	return (
		<div className={styles.statCard}>
			<div className={styles.statIcon}>{icon}</div>
			<div>
				<div className={styles.statValue}>{value}</div>
				<div className={styles.statLabel}>{label}</div>
			</div>
		</div>
	);
}

function Section({ title, subtitle, icon, children }) {
	return (
		<section className={styles.section}>
			<h2>
				{icon}
				{title}
			</h2>
			{subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
			{children}
		</section>
	);
}

function ListBlock({ items }) {
	return (
		<div className={styles.numberedList}>
			{items.map((item, index) => (
				<div key={item} className={styles.numberedItem}>
					<span>{index + 1}</span>
					<p>{item}</p>
				</div>
			))}
		</div>
	);
}

export function RouteDetails({ route }) {
	const typeInfo = routeTypeInfo[route.routeType];
	const hasOfflineContent =
		route.offlineSummary ||
		route.offlineChecklist.length > 0 ||
		route.navigationTips.length > 0 ||
		route.emergencyNotes.length > 0;

	return (
		<article className={styles.root}>
			<div className={styles.backNav}>
				<Link href="/hiking" className={styles.backButton} title="Назад к маршрутам">
					<ChevronLeftIcon size={22} />
				</Link>
			</div>

			<header className={styles.header}>
				<h1>{route.title}</h1>
				<div className={styles.headerMeta}>
					<DifficultyStars level={route.difficulty} size={22} />
					{route.region && (
						<span className={styles.region}>
							<MapPinIcon size={16} />
							{route.region}
						</span>
					)}
					<span className={styles.ratingBadge}>
						<StarIcon size={16} />
						{route.averageRating.toFixed(1)} / 5
						<small>{route.reviewsCount} отзывов</small>
					</span>
				</div>
			</header>

			<div className={styles.actionRow}>
				<FavoriteButton id={route.id} type="route" />
				<a className={styles.gpxButton} href={hikingApi.getGpxUrl(route.id)}>
					<DownloadIcon size={18} />
					Скачать GPX-трек
				</a>
				<OfflineRouteActions route={route} />
			</div>

			<div className={styles.statsGrid}>
				<StatCard
					icon={<DistanceIcon size={22} />}
					value={`${route.distanceKm} км`}
					label="Протяженность"
				/>
				<StatCard
					icon={<ClockIcon size={22} />}
					value={`${route.durationHours} ч`}
					label="Время в пути"
				/>
				{route.elevation && (
					<StatCard
						icon={<ElevationIcon size={22} />}
						value={route.elevation}
						label="Набор высоты"
					/>
				)}
				{route.bestSeason && (
					<StatCard
						icon={<SunIcon size={22} />}
						value={route.bestSeason}
						label="Лучший сезон"
					/>
				)}
			</div>

			<ImageWithFallback
				src={route.imageUrl}
				alt={route.title}
				className={styles.heroImage}
				sizes="(max-width: 900px) 100vw, 960px"
			>
				<MountainIcon size={72} />
			</ImageWithFallback>

			{typeInfo && (
				<section className={styles.routeType}>
					<div className={styles.routeTypeIcon}>{typeInfo.icon}</div>
					<div>
						<p>Тип маршрута</p>
						<h2>{typeInfo.label}</h2>
						<span>{typeInfo.description}</span>
					</div>
				</section>
			)}

			{route.fullDescription && (
				<Section title="Описание маршрута" icon={<BookIcon size={20} />}>
					<p className={styles.text}>{route.fullDescription}</p>
				</Section>
			)}

			{route.equipment.length > 0 && (
				<Section
					title="Снаряжение"
					subtitle="Что взять с собой"
					icon={<BagIcon size={20} />}
				>
					<div className={styles.chipGrid}>
						{route.equipment.map((item) => (
							<div key={item} className={styles.chip}>
								<CheckIcon size={18} />
								{item}
							</div>
						))}
					</div>
				</Section>
			)}

			{route.howToGet && (
				<Section
					title="Как добраться"
					subtitle="Подробный старт из Краснодарского края"
					icon={<MapPinIcon size={20} />}
				>
					<p className={styles.note}>{route.howToGet}</p>
				</Section>
			)}

			{hasOfflineContent && (
				<Section
					title="Офлайн-памятка"
					subtitle="Что сохранить перед выходом без связи"
					icon={<SaveIcon size={20} />}
				>
					{route.offlineSummary && <p className={styles.text}>{route.offlineSummary}</p>}
					{route.offlineChecklist.length > 0 && (
						<div className={styles.chipGrid}>
							{route.offlineChecklist.map((item) => (
								<div key={item} className={styles.chip}>
									<CheckIcon size={18} />
									{item}
								</div>
							))}
						</div>
					)}
				</Section>
			)}

			{route.navigationTips.length > 0 && (
				<Section title="Навигационные подсказки" icon={<MapPinIcon size={20} />}>
					<ListBlock items={route.navigationTips} />
				</Section>
			)}

			{route.emergencyNotes.length > 0 && (
				<Section title="Если что-то пошло не по плану" icon={<AlertIcon size={20} />}>
					<ListBlock items={route.emergencyNotes} />
				</Section>
			)}

			{route.attractions.length > 0 && (
				<Section title="Что посмотреть" icon={<MountainIcon size={20} />}>
					<ListBlock items={route.attractions} />
				</Section>
			)}
		</article>
	);
}
