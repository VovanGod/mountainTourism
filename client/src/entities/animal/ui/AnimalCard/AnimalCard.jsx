import Link from "next/link";
import { AnimalTypeBadge, DangerBadge } from "@/entities/animal/ui/AnimalBadges/AnimalBadges";
import { ImageWithFallback } from "@/shared/ui/ImageWithFallback/ImageWithFallback";
import { ChevronRightIcon, InfoIcon, PawIcon } from "@/shared/ui/icons/Icons";
import styles from "./AnimalCard.module.scss";

export function AnimalCard({ animal }) {
	return (
		<Link href={`/animals/${animal.id}`} className={styles.card}>
			<ImageWithFallback
				src={animal.imageUrl}
				alt={animal.title}
				className={styles.image}
				sizes="(max-width: 700px) 100vw, 390px"
			>
				<PawIcon size={56} />
			</ImageWithFallback>

			<div className={styles.danger}>
				<DangerBadge level={animal.dangerLevel} />
			</div>

			<div className={styles.content}>
				<h3>{animal.title}</h3>
				{animal.scientificName && <em>{animal.scientificName}</em>}

				<div className={styles.meta}>
					<AnimalTypeBadge type={animal.animalType} />
					{animal.conservationStatus && (
						<span className={styles.status}>
							<InfoIcon size={14} />
							{animal.conservationStatus}
						</span>
					)}
				</div>

				<p>{animal.shortDescription}</p>

				<span className={styles.more}>
					Подробнее
					<ChevronRightIcon size={16} />
				</span>
			</div>
		</Link>
	);
}
