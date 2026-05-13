import {
	animalTypeOptions,
	dangerOptions,
} from "@/entities/animal/model/animalConstants";
import { CustomSelect } from "@/shared/ui/CustomSelect/CustomSelect";
import { AlertIcon, PawIcon, TrashIcon } from "@/shared/ui/icons/Icons";
import styles from "./AnimalFilters.module.scss";

export function AnimalFilters({
	filters,
	isLoading,
	hasActiveFilters,
	onChange,
	onReset,
}) {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h1>Животные</h1>
				{hasActiveFilters && (
					<button
						type="button"
						className={styles.reset}
						onClick={onReset}
						disabled={isLoading}
					>
						<TrashIcon size={16} />
						Сбросить фильтры
					</button>
				)}
			</div>

			<div className={styles.info}>
				<AlertIcon size={24} />
				<div>
					<h2>Изучите животных, которых можно встретить в походе</h2>
					<p>
						Знание поведения и уровня опасности помогает спокойнее действовать
						на маршруте.
					</p>
				</div>
			</div>

			<div className={styles.panel}>
				<CustomSelect
					label="Уровень опасности"
					icon={<AlertIcon size={22} />}
					options={dangerOptions}
					value={filters.dangerLevel}
					disabled={isLoading}
					onChange={(value) => onChange("dangerLevel", value)}
				/>
				<CustomSelect
					label="Тип животного"
					icon={<PawIcon size={22} />}
					options={animalTypeOptions}
					value={filters.animalType}
					disabled={isLoading}
					onChange={(value) => onChange("animalType", value)}
				/>
			</div>
		</div>
	);
}
