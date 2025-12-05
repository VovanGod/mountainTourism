"use client";

import Link from "next/link";

const DangerBadge = ({ level }) => {
	const getDangerInfo = (level) => {
		switch (level) {
			case "safe":
				return {
					label: "Не опасен",
					color: "rgba(76, 175, 80, 1)",
					bgColor: "rgba(76, 175, 80, 0.1)",
				};
			case "potentially":
				return {
					label: "Потенциально опасен",
					color: "rgba(255, 152, 0, 1)",
					bgColor: "rgba(255, 152, 0, 0.1)",
				};
			case "dangerous":
				return {
					label: "Опасен",
					color: "rgba(244, 67, 54, 1)",
					bgColor: "rgba(244, 67, 54, 0.1)",
				};
			case "very_dangerous":
				return {
					label: "Очень опасен",
					color: "rgba(183, 28, 28, 1)",
					bgColor: "rgba(183, 28, 28, 0.1)",
				};
			default:
				return {
					label: "Не определен",
					color: "rgba(158, 158, 158, 1)",
					bgColor: "rgba(158, 158, 158, 0.1)",
				};
		}
	};

	const info = getDangerInfo(level);

	return (
		<div
			className="danger-badge"
			style={{
				color: info.color,
				backgroundColor: info.bgColor,
				border: `1px solid ${info.color}`,
			}}
		>
			{info.label}
		</div>
	);
};

// Компонент для отображения типа животного
const AnimalTypeBadge = ({ type }) => {
	const getTypeInfo = (type) => {
		switch (type) {
			case "mammal":
				return { label: "Млекопитающее", icon: "🐾" };
			case "reptile":
				return { label: "Пресмыкающееся", icon: "🦎" };
			case "bird":
				return { label: "Птица", icon: "🦅" };
			case "insect":
				return { label: "Насекомое", icon: "🐛" };
			case "amphibian":
				return { label: "Земноводное", icon: "🐸" };
			case "arachnid":
				return { label: "Паукообразное", icon: "🕷️" };
			case "fish":
				return { label: "Рыба", icon: "🐟" };
			default:
				return { label: "Не определен", icon: "❓" };
		}
	};

	const info = getTypeInfo(type);

	return (
		<div className="animal-type-badge">
			<span className="animal-type-icon">{info.icon}</span>
			<span className="animal-type-label">{info.label}</span>
		</div>
	);
};

export default function ListAnimals({ animals = [] }) {
	// Если животных нет после фильтрации
	if (animals.length === 0) {
		return (
			<div className="no-animals-found">
				<div className="container">
					<div className="no-animals-content">
						<div className="no-animals-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="80"
								height="80"
								viewBox="0 0 24 24"
								fill="none"
								stroke="rgba(184, 103, 46, 0.3)"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
								<line x1="12" y1="9" x2="12" y2="13" />
								<line x1="12" y1="17" x2="12.01" y2="17" />
							</svg>
						</div>

						<div className="no-animals-text">
							<h3 className="no-animals-title">Животные не найдены</h3>
							<p className="no-animals-description">
								По вашему запросу не найдено ни одного животного. Попробуйте
								изменить параметры фильтрации.
							</p>
						</div>

						<div className="no-animals-background">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="120"
								height="120"
								viewBox="0 0 24 24"
								fill="none"
								stroke="rgba(184, 103, 46, 0.05)"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M3 4h7a4 4 0 0 1 4 4 4 4 0 0 1 4-4h7" />
								<path d="M9 8v12" />
								<path d="M15 8v12" />
								<path d="M4 20h16" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="list-animals">
			<div className="container">
				<div className="animals-grid">
					{animals.map((animal) => (
						<Link
							href={`/animals/${animal.id}`}
							key={animal.id}
							className="animal-card"
						>
							<div className="card-image">
								<div className="image-placeholder">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="48"
										height="48"
										viewBox="0 0 24 24"
										fill="none"
										stroke="rgba(184, 103, 46, 0.3)"
										strokeWidth="1"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M3 4h7a4 4 0 0 1 4 4 4 4 0 0 1 4-4h7" />
										<path d="M9 8v12" />
										<path d="M15 8v12" />
										<path d="M4 20h16" />
									</svg>
								</div>

								{/* Бейдж уровня опасности справа вверху */}
								<div className="danger-level-badge">
									<DangerBadge level={animal.danger_level} />
								</div>
							</div>

							<div className="card-content">
								<h3 className="card-title">{animal.title}</h3>

								{/* Научное название */}
								{animal.scientific_name && (
									<p className="scientific-name">{animal.scientific_name}</p>
								)}

								<div className="card-meta">
									<AnimalTypeBadge type={animal.animal_type} />

									{animal.conservation_status && (
										<div className="conservation-status">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="none"
												stroke="rgba(184, 103, 46, 1)"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<circle cx="12" cy="12" r="10" />
												<line x1="12" y1="16" x2="12" y2="12" />
												<line x1="12" y1="8" x2="12.01" y2="8" />
											</svg>
											<span>{animal.conservation_status}</span>
										</div>
									)}
								</div>

								<p className="card-description">{animal.short_description}</p>

								<div className="card-footer">
									<div className="details-button">
										Подробнее
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polyline points="9 18 15 12 9 6" />
										</svg>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
