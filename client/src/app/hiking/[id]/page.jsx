"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/components/Nav";

// Компонент для отображения звезд сложности
const DifficultyStars = ({ level }) => {
	return (
		<div className="difficulty-stars">
			{[...Array(5)].map((_, index) => (
				<svg
					key={index}
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill={
						index < level ? "rgba(184, 103, 46, 1)" : "rgba(229, 235, 224, 0.5)"
					}
					stroke={
						index < level ? "rgba(184, 103, 46, 1)" : "rgba(184, 103, 46, 0.3)"
					}
					strokeWidth="1.5"
					className="star-icon"
				>
					<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
				</svg>
			))}
			<span className="difficulty-level">
				{level === 1 && "Лёгкий"}
				{level === 2 && "Простой"}
				{level === 3 && "Средний"}
				{level === 4 && "Сложный"}
				{level === 5 && "Эксперт"}
			</span>
		</div>
	);
};

// Компонент для типа маршрута
const RouteTypeBadge = ({ type }) => {
	const getTypeInfo = (type) => {
		switch (type) {
			case "linear":
				return {
					label: "Линейный",
					icon: "→",
					description: "Начальная и конечная точки маршрута разные",
				};
			case "circular":
				return {
					label: "Кольцевой",
					icon: "↻",
					description: "Маршрут возвращается к начальной точке",
				};
			case "point-to-point":
				return {
					label: "Точечный",
					icon: "•",
					description: "Маршрут с фиксированной начальной и конечной точками",
				};
			default:
				return {
					label: "Не указан",
					icon: "?",
					description: "Тип маршрута не указан",
				};
		}
	};

	const info = getTypeInfo(type);

	return (
		<div className="route-type-info">
			<div className="route-type-header">
				<div className="route-type-icon">{info.icon}</div>
				<div className="route-type-content">
					<h3>Тип маршрута</h3>
					<div className="route-type-label">{info.label}</div>
				</div>
			</div>
			<p className="route-type-description">{info.description}</p>
		</div>
	);
};

const HikingDetailPage = () => {
	const params = useParams();
	const id = params.id;

	const [route, setRoute] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRoute = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(`http://localhost:5001/api/routes/${id}`);

				if (!response.ok) {
					if (response.status === 404) {
						throw new Error("Маршрут не найден");
					}
					throw new Error(`Ошибка сервера: ${response.status}`);
				}

				const data = await response.json();
				setRoute(data);
			} catch (err) {
				console.error("Ошибка при загрузке маршрута:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		if (id) {
			fetchRoute();
		}
	}, [id]);

	if (loading) {
		return (
			<>
				<div className="hiking-detail loading">
					<div className="container">
						<div className="loading-spinner">
							<div className="spinner"></div>
							<p>Загрузка информации о маршруте...</p>
						</div>
					</div>
				</div>
				<Nav idActive={2} />
			</>
		);
	}

	if (error || !route) {
		return (
			<>
				<div className="hiking-detail error">
					<div className="container">
						<div className="error-message">
							<h2>❌ Ошибка</h2>
							<p>{error || "Маршрут не найден"}</p>
							<Link href="/hiking" className="back-button">
								← Вернуться к списку маршрутов
							</Link>
						</div>
					</div>
				</div>
				<Nav idActive={2} />
			</>
		);
	}

	// Преобразуем массивы из PostgreSQL в JavaScript массивы
	const equipmentList = Array.isArray(route.equipment)
		? route.equipment
		: route.equipment
		? JSON.parse(route.equipment)
		: [];

	const attractionsList = Array.isArray(route.attractions)
		? route.attractions
		: route.attractions
		? JSON.parse(route.attractions)
		: [];

	return (
		<>
			<div className="hiking-detail">
				<div className="container">
					{/* Кнопка назад - только иконка */}
					<div className="back-nav">
						<Link
							href="/hiking"
							className="back-button-icon"
							title="Назад к списку маршрутов"
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
						<h1 className="detail-title">{route.title}</h1>
						<div className="header-meta">
							<div className="difficulty-container">
								<DifficultyStars level={route.difficulty} />
							</div>
							{route.region && (
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
									{route.region}
								</div>
							)}
						</div>
					</div>

					{/* Основной контент */}
					<div className="detail-content">
						{/* Блок с основной статистикой */}
						<div className="stats-section">
							<div className="stats-grid">
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
											<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
											<path d="m14.5 12.5 2-2" />
											<path d="m11.5 9.5 2-2" />
											<path d="m8.5 6.5 2-2" />
											<path d="m17.5 15.5 2-2" />
										</svg>
									</div>
									<div className="stat-content">
										<div className="stat-value">{route.distance_km} км</div>
										<div className="stat-label">Протяженность</div>
									</div>
								</div>

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
											<polyline points="12 6 12 12 16 14" />
										</svg>
									</div>
									<div className="stat-content">
										<div className="stat-value">{route.duration_hours} ч</div>
										<div className="stat-label">Продолжительность</div>
									</div>
								</div>

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
											<path d="M12 2v20" />
											<path d="m17 5-5-3-5 3" />
											<path d="m17 19-5 3-5-3" />
											<path d="M2 12h20" />
										</svg>
									</div>
									<div className="stat-content">
										<div className="stat-value">{route.elevation}</div>
										<div className="stat-label">Набор высоты</div>
									</div>
								</div>

								{route.best_season && (
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
											<div className="stat-value">Сезон</div>
											<div className="stat-label">{route.best_season}</div>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Блок с изображением */}
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
										<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
									</svg>
								</div>
							</div>
						</div>

						{/* Тип маршрута */}
						{route.route_type && (
							<div className="route-type-section">
								<RouteTypeBadge type={route.route_type} />
							</div>
						)}

						{/* Подробное описание */}
						{route.full_description && (
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
									Описание маршрута
								</h2>
								<div className="description-content">
									{route.full_description}
								</div>
							</div>
						)}

						{/* Снаряжение */}
						{equipmentList.length > 0 && (
							<div className="equipment-section">
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
										<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
										<path d="M3 6h18"></path>
										<path d="M16 10a4 4 0 0 1-8 0"></path>
									</svg>
									Снаряжение
								</h2>
								<div className="section-subtitle">Что взять с собой</div>
								<div className="equipment-list">
									{equipmentList.map((item, index) => (
										<div key={index} className="equipment-item">
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
												className="equipment-icon"
											>
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
											<span className="equipment-text">{item}</span>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Как добраться */}
						{route.how_to_get && (
							<div className="how-to-get-section">
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
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									Как добраться
								</h2>
								<div className="section-subtitle">
									Из Краснодара до маршрута
								</div>
								<div className="how-to-get-content">{route.how_to_get}</div>
							</div>
						)}

						{/* Достопримечательности */}
						{attractionsList.length > 0 && (
							<div className="attractions-section">
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
									Достопримечательности
								</h2>
								<div className="section-subtitle">Что посмотреть по пути</div>
								<div className="attractions-list">
									{attractionsList.map((attraction, index) => (
										<div key={index} className="attraction-item">
											<div className="attraction-number">{index + 1}</div>
											<div className="attraction-content">
												<div className="attraction-title">{attraction}</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<Nav idActive={2} />
		</>
	);
};

export default HikingDetailPage;
