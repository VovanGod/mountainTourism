import { difficultyOptions } from "@/entities/hiking/model/routeConstants";
import { CustomSelect } from "@/shared/ui/CustomSelect/CustomSelect";
import { ClockIcon, DistanceIcon, MountainIcon, TrashIcon } from "@/shared/ui/icons/Icons";
import styles from "./HikingFilters.module.scss";

function NumberFilter({ label, value, unit, placeholder, max, icon, onChange, disabled }) {
	const handleChange = (event) => {
		const rawValue = event.target.value;

		if (rawValue === "" || /^[\d.,]*$/.test(rawValue)) {
			const normalizedValue = rawValue.replace(",", ".");
			const numberValue = Number(normalizedValue);

			if (
				normalizedValue === "" ||
				(!Number.isNaN(numberValue) && numberValue >= 0 && numberValue <= max)
			) {
				onChange(normalizedValue.slice(0, 6));
			}
		}
	};

	return (
		<label className={styles.field}>
			<span className={styles.label}>
				{icon}
				{label}
			</span>
			<span className={styles.inputWrap}>
				<input
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					inputMode="decimal"
					disabled={disabled}
					className={styles.input}
				/>
				<span className={styles.unit}>{unit}</span>
			</span>
		</label>
	);
}

export function HikingFilters({
	filters,
	isLoading,
	hasActiveFilters,
	onChange,
	onReset,
}) {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h1>Маршруты</h1>
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

			<div className={styles.panel}>
				<CustomSelect
					label="Сложность"
					icon={<MountainIcon size={22} />}
					options={difficultyOptions}
					value={filters.difficulty}
					disabled={isLoading}
					onChange={(value) => onChange("difficulty", value)}
				/>
				<NumberFilter
					label="Макс. расстояние"
					value={filters.maxDistance}
					unit="км"
					placeholder="0-100"
					max={100}
					disabled={isLoading}
					icon={<DistanceIcon size={22} />}
					onChange={(value) => onChange("maxDistance", value)}
				/>
				<NumberFilter
					label="Макс. время"
					value={filters.maxDuration}
					unit="ч"
					placeholder="0-24"
					max={24}
					disabled={isLoading}
					icon={<ClockIcon size={22} />}
					onChange={(value) => onChange("maxDuration", value)}
				/>
			</div>
		</div>
	);
}
