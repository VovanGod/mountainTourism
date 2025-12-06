"use client";
import React, { useState, useRef, useEffect } from "react";
import Nav from "../components/Nav";
import ListHiking from "../components/hiking/ListHiking";

const Hiking = () => {
	const [filters, setFilters] = useState({
		difficulty: "all",
		maxDistance: "",
		maxDuration: "",
	});
	const [filteredRoutes, setFilteredRoutes] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const selectRef = useRef(null);
	const distanceInputRef = useRef(null);
	const durationInputRef = useRef(null);

	const difficultyOptions = [
		{ value: "all", label: "Все маршруты" },
		{ value: "1", label: "Легкий (1 звезда)" },
		{ value: "2", label: "Простой (2 звезды)" },
		{ value: "3", label: "Средний (3 звезды)" },
		{ value: "4", label: "Сложный (4 звезды)" },
		{ value: "5", label: "Эксперт (5 звезд)" },
	];

	const fetchRoutes = async (currentFilters = filters) => {
		setLoading(true);
		setError(null);
		try {
			const params = new URLSearchParams();
			if (currentFilters.difficulty !== "all") {
				params.append("difficulty", currentFilters.difficulty);
			}
			if (currentFilters.maxDistance) {
				params.append("maxDistance", currentFilters.maxDistance);
			}
			if (currentFilters.maxDuration) {
				params.append("maxDuration", currentFilters.maxDuration);
			}
			const response = await fetch(
				`http://localhost:5001/api/routes?${params}`
			);
			if (!response.ok) {
				throw new Error(`Ошибка сервера: ${response.status}`);
			}
			const data = await response.json();
			const formattedData = data.map((route) => ({
				id: route.id,
				title: route.title,
				difficulty: route.difficulty,
				distance: parseFloat(route.distance_km),
				duration: parseFloat(route.duration_hours),
				elevation: route.elevation,
				description: route.description,
				image: route.image_url || "/hiking/default.jpg",
				distance_km: route.distance_km,
				duration_hours: route.duration_hours,
				full_description: route.full_description,
				equipment: route.equipment,
				how_to_get: route.how_to_get,
				attractions: route.attractions,
				region: route.region,
				best_season: route.best_season,
			}));
			setFilteredRoutes(formattedData);
		} catch (err) {
			console.error("Ошибка при загрузке маршрутов:", err);
			setError(
				"Не удалось загрузить маршруты. Проверьте подключение к серверу."
			);
			setFilteredRoutes([]);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchRoutes();
	}, []);

	const handleFilterChange = (filterName, value, inputRef = null) => {
		const newFilters = { ...filters, [filterName]: value };
		setFilters(newFilters);
		if (inputRef && inputRef.current) {
			setTimeout(() => {
				inputRef.current.focus();
			}, 0);
		}
		fetchRoutes(newFilters);
	};

	const handleNumericInputChange = (e, filterName, inputRef, maxValue) => {
		const value = e.target.value;
		if (value === "" || /^[\d.,]*$/.test(value)) {
			const normalizedValue = value.replace(",", ".");
			const numValue = parseFloat(normalizedValue);
			if (normalizedValue === "" || (numValue >= 0 && numValue <= maxValue)) {
				if (value.length <= 6) {
					handleFilterChange(filterName, normalizedValue, inputRef);
				}
			}
		}
	};

	const handleResetFilters = () => {
		const resetFilters = {
			difficulty: "all",
			maxDistance: "",
			maxDuration: "",
		};
		setFilters(resetFilters);
		fetchRoutes(resetFilters);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (selectRef.current && !selectRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const selectedLabel = difficultyOptions.find(
		(opt) => opt.value === filters.difficulty
	)?.label;

	return (
		<>
			<div className="hiking">
				<div className="container">
					<div className="header-with-reset">
						<h2 className="hiking-title">Маршруты</h2>
						{(filters.difficulty !== "all" ||
							filters.maxDistance ||
							filters.maxDuration) && (
							<button
								className="reset-filters-btn"
								onClick={handleResetFilters}
								disabled={loading}
							>
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
									<path d="M3 6h18" />
									<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
									<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
									<line x1="10" y1="11" x2="10" y2="17" />
									<line x1="14" y1="11" x2="14" y2="17" />
								</svg>
								Сбросить фильтры
							</button>
						)}
					</div>

					<div className="filters">
						<div className="filter">
							<div className="filter-header">
								<div className="filter-icon">
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
										<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
									</svg>
									<span>Сложность</span>
								</div>
							</div>
							<div className="custom-select-wrapper" ref={selectRef}>
								<div
									className={`custom-select ${isOpen ? "open" : ""} ${
										loading ? "disabled" : ""
									}`}
									onClick={() => !loading && setIsOpen(!isOpen)}
								>
									<div className="selected-value">{selectedLabel}</div>
									<div className="select-arrow">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="rgba(184, 103, 46, 1)"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<polyline points="6 9 12 15 18 9"></polyline>
										</svg>
									</div>
								</div>
								{isOpen && !loading && (
									<div className="dropdown-menu">
										{difficultyOptions.map((option) => (
											<div
												key={option.value}
												className={`dropdown-item ${
													filters.difficulty === option.value ? "selected" : ""
												}`}
												onClick={() => {
													handleFilterChange("difficulty", option.value);
													setIsOpen(false);
												}}
											>
												{option.label}
											</div>
										))}
									</div>
								)}
							</div>
						</div>

						<div className="filter">
							<div className="filter-header">
								<div className="filter-icon">
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
									<span>Макс. расстояние, км</span>
								</div>
							</div>
							<div className="filter-input-wrapper">
								<input
									ref={distanceInputRef}
									type="text"
									inputMode="decimal"
									className="filter-input"
									placeholder="0-100"
									value={filters.maxDistance}
									onChange={(e) =>
										handleNumericInputChange(
											e,
											"maxDistance",
											distanceInputRef,
											100
										)
									}
									onBlur={(e) => {
										const value = e.target.value;
										if (
											value === "" ||
											(parseFloat(value) >= 0 && parseFloat(value) <= 100)
										) {
											return;
										}
										handleFilterChange("maxDistance", "");
									}}
									disabled={loading}
								/>
								<span className="input-unit">км</span>
							</div>
						</div>

						<div className="filter">
							<div className="filter-header">
								<div className="filter-icon">
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
									<span>Макс. время, ч</span>
								</div>
							</div>
							<div className="filter-input-wrapper">
								<input
									ref={durationInputRef}
									type="text"
									inputMode="decimal"
									className="filter-input"
									placeholder="0-24"
									value={filters.maxDuration}
									onChange={(e) =>
										handleNumericInputChange(
											e,
											"maxDuration",
											durationInputRef,
											24
										)
									}
									onBlur={(e) => {
										const value = e.target.value;
										if (
											value === "" ||
											(parseFloat(value) >= 0 && parseFloat(value) <= 24)
										) {
											return;
										}
										handleFilterChange("maxDuration", "");
									}}
									disabled={loading}
								/>
								<span className="input-unit">ч</span>
							</div>
						</div>
					</div>

					{error && (
						<div className="filter-error-message">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="10" />
								<line x1="12" y1="8" x2="12" y2="12" />
								<line x1="12" y1="16" x2="12.01" y2="16" />
							</svg>
							{error}
						</div>
					)}

					{loading ? (
						<div className="loading-indicator">
							<div className="loading-spinner"></div>
							<span>Загрузка маршрутов...</span>
						</div>
					) : (
						<ListHiking routes={filteredRoutes} />
					)}
				</div>
			</div>
			<Nav idActive={2} />
		</>
	);
};

export default Hiking;
