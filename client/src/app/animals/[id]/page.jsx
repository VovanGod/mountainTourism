"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/components/Nav";

// Компонент для отображения уровня опасности
const DangerBadge = ({ level }) => {
	const getDangerInfo = (level) => {
		switch (level) {
			case "safe":
				return {
					label: "Не опасен",
					color: "rgba(76, 175, 80, 1)",
					bgColor: "rgba(76, 175, 80, 0.1)",
					icon: "🟢",
				};
			case "potentially":
				return {
					label: "Потенциально опасен",
					color: "rgba(255, 152, 0, 1)",
					bgColor: "rgba(255, 152, 0, 0.1)",
					icon: "🟡",
				};
			case "dangerous":
				return {
					label: "Опасен",
					color: "rgba(244, 67, 54, 1)",
					bgColor: "rgba(244, 67, 54, 0.1)",
					icon: "🟠",
				};
			case "very_dangerous":
				return {
					label: "Очень опасен",
					color: "rgba(183, 28, 28, 1)",
					bgColor: "rgba(183, 28, 28, 0.1)",
					icon: "🔴",
				};
			default:
				return {
					label: "Не определен",
					color: "rgba(158, 158, 158, 1)",
					bgColor: "rgba(158, 158, 158, 0.1)",
					icon: "❓",
				};
		}
	};

	const info = getDangerInfo(level);

	return (
		<div
			className="danger-badge-large"
			style={{
				color: info.color,
				backgroundColor: info.bgColor,
				border: `2px solid ${info.color}`,
			}}
		>
			<span className="danger-icon">{info.icon}</span>
			<span className="danger-label">{info.label}</span>
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
		<div className="animal-type-badge-large">
			<span className="animal-type-icon-large">{info.icon}</span>
			<div className="animal-type-content">
				<div className="animal-type-label-small">Тип</div>
				<div className="animal-type-label-large">{info.label}</div>
			</div>
		</div>
	);
};

const AnimalDetailPage = () => {
	const params = useParams();
	const id = params.id;

	const [animal, setAnimal] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchAnimal = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(`http://localhost:5001/api/animals/${id}`);

				if (!response.ok) {
					if (response.status === 404) {
						throw new Error("Животное не найдено");
					}
					throw new Error(`Ошибка сервера: ${response.status}`);
				}

				const data = await response.json();
				setAnimal(data);
			} catch (err) {
				console.error("Ошибка при загрузке животного:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchAnimal();
		}
	}, [id]);

	if (loading) {
		return (
			<>
				<div className="animal-detail loading">
					<div className="container">
						<div className="loading-spinner">
							<div className="spinner"></div>
						</div>
					</div>
				</div>
				<Nav idActive={3} />
			</>
		);
	}

	if (error || !animal) {
		return (
			<>
				<div className="animal-detail error">
					<div className="container">
						<div className="error-message">
							<h2>Ошибка</h2>
							<p>{error || "Животное не найдено"}</p>
							<Link href="/animals" className="back-button">
								← Вернуться к списку животных
							</Link>
						</div>
					</div>
				</div>
				<Nav idActive={3} />
			</>
		);
	}

	// Преобразуем массивы из PostgreSQL в JavaScript массивы
	const meetingActions = Array.isArray(animal.meeting_actions)
		? animal.meeting_actions
		: animal.meeting_actions
		? JSON.parse(animal.meeting_actions)
		: [];

	const interestingFacts = Array.isArray(animal.interesting_facts)
		? animal.interesting_facts
		: animal.interesting_facts
		? JSON.parse(animal.interesting_facts)
		: [];

	return (
		<>
			<div className="animal-detail">
				<div className="container">
					{/* Кнопка назад - только иконка */}
					<div className="back-nav">
						<Link
							href="/animals"
							className="back-button-icon"
							title="Назад к списку животных"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="rgba(184, 103, 46, 1)"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="15 18 9 12 15 6"></polyline>
							</svg>
						</Link>
					</div>

					{/* Заголовок */}
					<div className="detail-header">
						<h1 className="detail-title">{animal.title}</h1>
						{animal.scientific_name && (
							<p className="scientific-name-large">{animal.scientific_name}</p>
						)}

						<div className="header-meta">
							<div className="danger-container">
								<DangerBadge level={animal.danger_level} />
							</div>
							<div className="type-container">
								<AnimalTypeBadge type={animal.animal_type} />
							</div>
							{animal.region && (
								<div className="region-badge">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="rgba(87, 103, 76, 1)"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									{animal.region}
								</div>
							)}
						</div>
					</div>

					{/* Основной контент */}
					<div className="detail-content">
						{/* Изображение */}
						<div className="image-section">
							<div className="detail-image">
								<div className="image-placeholder">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="64"
										height="64"
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
							</div>
						</div>

						{/* Основная информация */}
						<div className="basic-info-section">
							<div className="stats-grid">
								{animal.season_activity && (
									<div className="stat-card">
										<div className="stat-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="rgba(184, 103, 46, 1)"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M12 2v8" />
												<path d="m4.93 10.93 1.41 1.41" />
												<path d="M2 18h2" />
												<path d="M20 18h2" />
												<path d="m19.07 10.93-1.41 1.41" />
												<path d="M22 22H2" />
												<path d="m16 6-4 4-4-4" />
												<path d="M16 18a4 4 0 0 0-8 0" />
											</svg>
										</div>
										<div className="stat-content">
											<div className="stat-value">Сезон активности</div>
											<div className="stat-label">{animal.season_activity}</div>
										</div>
									</div>
								)}

								{animal.habitat && (
									<div className="stat-card">
										<div className="stat-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="rgba(184, 103, 46, 1)"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
												<circle cx="12" cy="10" r="3"></circle>
											</svg>
										</div>
										<div className="stat-content">
											<div className="stat-value">Место обитания</div>
											<div className="stat-label">{animal.habitat}</div>
										</div>
									</div>
								)}

								{animal.diet && (
									<div className="stat-card">
										<div className="stat-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="rgba(184, 103, 46, 1)"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
												<path d="M3 6h18"></path>
												<path d="M16 10a4 4 0 0 1-8 0"></path>
											</svg>
										</div>
										<div className="stat-content">
											<div className="stat-value">Питание</div>
											<div className="stat-label">{animal.diet}</div>
										</div>
									</div>
								)}

								{animal.conservation_status && (
									<div className="stat-card">
										<div className="stat-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="rgba(184, 103, 46, 1)"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<circle cx="12" cy="12" r="10" />
												<line x1="12" y1="8" x2="12" y2="12" />
												<line x1="12" y1="16" x2="12.01" y2="16" />
											</svg>
										</div>
										<div className="stat-content">
											<div className="stat-value">Статус</div>
											<div className="stat-label">
												{animal.conservation_status}
											</div>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Подробное описание */}
						{animal.full_description && (
							<div className="description-section">
								<h2 className="section-title">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="rgba(184, 103, 46, 1)"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
									</svg>
									Описание
								</h2>
								<div className="description-content">
									{animal.full_description}
								</div>
							</div>
						)}

						{/* Поведение */}
						{animal.behavior && (
							<div className="behavior-section">
								<h2 className="section-title">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="rgba(184, 103, 46, 1)"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
									</svg>
									Поведение
								</h2>
								<div className="section-subtitle">Как ведет себя в природе</div>
								<div className="behavior-content">{animal.behavior}</div>
							</div>
						)}

						{/* Действия при встрече */}
						{meetingActions.length > 0 && (
							<div className="actions-section">
								<h2 className="section-title">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="rgba(184, 103, 46, 1)"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle cx="12" cy="12" r="10" />
										<polyline points="12 6 12 12 16 14" />
									</svg>
									Действия при встрече
								</h2>
								<div className="section-subtitle">
									Что делать, если встретили
								</div>
								<div className="actions-list">
									{meetingActions.map((action, index) => (
										<div key={index} className="action-item">
											<div className="action-number">{index + 1}</div>
											<div className="action-content">
												<div className="action-text">{action}</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Интересные факты */}
						{interestingFacts.length > 0 && (
							<div className="facts-section">
								<h2 className="section-title">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="rgba(184, 103, 46, 1)"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
										<circle cx="17" cy="7" r="5"></circle>
									</svg>
									Интересные факты
								</h2>
								<div className="section-subtitle">Удивительные особенности</div>
								<div className="facts-list">
									{interestingFacts.map((fact, index) => (
										<div key={index} className="fact-item">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="rgba(184, 103, 46, 1)"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="fact-icon"
											>
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
											<span className="fact-text">{fact}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Важный блок с информацией */}
						<div className="important-section">
							<div className="important-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="rgba(183, 28, 28, 1)"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="12" cy="12" r="10" />
									<line x1="12" y1="8" x2="12" y2="12" />
									<line x1="12" y1="16" x2="12.01" y2="16" />
								</svg>
							</div>
							<div className="important-content">
								<h3 className="important-title">ВАЖНО</h3>
								<p className="important-text">
									Это общие рекомендации. В экстренной ситуации звоните в МЧС по
									номеру 112
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Nav idActive={3} />
		</>
	);
};

export default AnimalDetailPage;
