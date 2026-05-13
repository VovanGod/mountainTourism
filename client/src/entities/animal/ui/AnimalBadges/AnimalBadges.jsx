import {
	animalTypeInfo,
	dangerInfo,
} from "@/entities/animal/model/animalConstants";
import { PawIcon } from "@/shared/ui/icons/Icons";
import styles from "./AnimalBadges.module.scss";

export function DangerBadge({ level, large = false }) {
	const info = dangerInfo[level] || {
		label: "Не определен",
		color: "rgba(116, 116, 116, 1)",
		bgColor: "rgba(116, 116, 116, 0.1)",
	};

	return (
		<span
			className={large ? styles.dangerLarge : styles.danger}
			style={{
				color: info.color,
				backgroundColor: info.bgColor,
				borderColor: info.color,
			}}
		>
			{info.label}
		</span>
	);
}

export function AnimalTypeBadge({ type, large = false }) {
	return (
		<span className={large ? styles.typeLarge : styles.type}>
			<PawIcon size={large ? 22 : 15} />
			<span>{animalTypeInfo[type] || "Не указано"}</span>
		</span>
	);
}
