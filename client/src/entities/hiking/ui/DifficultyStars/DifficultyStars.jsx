import { difficultyLabels } from "@/entities/hiking/model/routeConstants";
import styles from "./DifficultyStars.module.scss";

export function DifficultyStars({ level, size = 16 }) {
	const safeLevel = Math.max(0, Math.min(5, Number(level || 0)));

	return (
		<div className={styles.root} aria-label={`Сложность: ${safeLevel} из 5`}>
			<div className={styles.stars}>
				{Array.from({ length: 5 }).map((_, index) => (
					<svg
						key={index}
						xmlns="http://www.w3.org/2000/svg"
						width={size}
						height={size}
						viewBox="0 0 24 24"
						fill={index < safeLevel ? "currentColor" : "transparent"}
						stroke="currentColor"
						strokeWidth="1.5"
						aria-hidden="true"
					>
						<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
					</svg>
				))}
			</div>
			<span>{difficultyLabels[safeLevel] || "Не указана"}</span>
		</div>
	);
}
