import Link from "next/link";
import { DifficultyStars } from "@/entities/hiking/ui/DifficultyStars/DifficultyStars";
import { ImageWithFallback } from "@/shared/ui/ImageWithFallback/ImageWithFallback";
import {
	ChevronRightIcon,
	ClockIcon,
	ElevationIcon,
	MountainIcon,
	StarIcon,
} from "@/shared/ui/icons/Icons";
import styles from "./RouteCard.module.scss";

export function RouteCard({ route }) {
	return (
		<Link href={`/hiking/${route.id}`} className={styles.card}>
			<ImageWithFallback
				src={route.imageUrl}
				alt={route.title}
				className={styles.image}
				sizes="(max-width: 700px) 100vw, 390px"
			>
				<MountainIcon size={56} />
			</ImageWithFallback>

			<div className={styles.distanceBadge}>{route.distanceKm} км</div>
			<div className={styles.difficultyBadge}>{route.difficulty}/5</div>

			<div className={styles.content}>
				<h3>{route.title}</h3>

				<div className={styles.meta}>
					<span>
						<ClockIcon size={16} />
						{route.durationHours} ч
					</span>
					{route.elevation && (
						<span>
							<ElevationIcon size={16} />
							{route.elevation}
						</span>
					)}
					<span>
						<StarIcon size={16} />
						{route.averageRating.toFixed(1)}
					</span>
				</div>

				<DifficultyStars level={route.difficulty} />
				<p>{route.description}</p>

				<span className={styles.more}>
					Подробнее
					<ChevronRightIcon size={16} />
				</span>
			</div>
		</Link>
	);
}
