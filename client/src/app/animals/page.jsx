"use client";
import React, { useState, useRef, useEffect } from "react";
import ListAnimals from "../components/animals/ListAnimals";
import Nav from "../components/Nav";

const Animals = () => {
	const [filters, setFilters] = useState({
		danger_level: "all",
		animal_type: "all",
	});

	const [filteredAnimals, setFilteredAnimals] = useState([]);
	const [isDangerOpen, setIsDangerOpen] = useState(false);
	const [isTypeOpen, setIsTypeOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const dangerSelectRef = useRef(null);
	const typeSelectRef = useRef(null);

	const dangerOptions = [
		{ value: "all", label: "Все уровни опасности" },
		{ value: "safe", label: "Не опасны" },
		{ value: "potentially", label: "Потенциально опасны" },
		{ value: "dangerous", label: "Опасны" },
		{ value: "very_dangerous", label: "Очень опасны" },
	];

	const typeOptions = [
		{ value: "all", label: "Все типы" },
		{ value: "mammal", label: "Млекопитающие" },
		{ value: "reptile", label: "Пресмыкающиеся" },
		{ value: "bird", label: "Птицы" },
		{ value: "insect", label: "Насекомые" },
		{ value: "amphibian", label: "Земноводные" },
		{ value: "arachnid", label: "Паукообразные" },
		{ value: "fish", label: "Рыбы" },
	];

	const fetchAnimals = async (currentFilters = filters) => {
		setLoading(true);
		setError(null);

		try {
			const params = new URLSearchParams();
			if (currentFilters.danger_level !== "all") {
				params.append("danger_level", currentFilters.danger_level);
			}
			if (currentFilters.animal_type !== "all") {
				params.append("animal_type", currentFilters.animal_type);
			}

			const response = await fetch(
				`http://localhost:5001/api/animals?${params}`
			);

			if (!response.ok) {
				throw new Error(`Ошибка сервера: ${response.status}`);
			}

			const data = await response.json();

			const formattedData = data.map((animal) => ({
				id: animal.id,
				title: animal.title,
				scientific_name: animal.scientific_name,
				danger_level: animal.danger_level,
				animal_type: animal.animal_type,
				short_description: animal.short_description,
				full_description: animal.full_description,
				season_activity: animal.season_activity,
				behavior: animal.behavior,
				meeting_actions: animal.meeting_actions,
				habitat: animal.habitat,
				diet: animal.diet,
				interesting_facts: animal.interesting_facts,
				image: animal.image_url || "/animals/default.jpg",
				conservation_status: animal.conservation_status,
				region: animal.region,
			}));

			setFilteredAnimals(formattedData);
		} catch (err) {
			console.error("Ошибка при загрузке животных:", err);
			setError(
				"Не удалось загрузить данные о животных. Проверьте подключение к серверу."
			);
			setFilteredAnimals([]);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchAnimals();
	}, []);

	const handleFilterChange = (filterName, value) => {
		const newFilters = {
			...filters,
			[filterName]: value,
		};
		setFilters(newFilters);
		fetchAnimals(newFilters);
	};

	const handleResetFilters = () => {
		const resetFilters = {
			danger_level: "all",
			animal_type: "all",
		};
		setFilters(resetFilters);
		fetchAnimals(resetFilters);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dangerSelectRef.current &&
				!dangerSelectRef.current.contains(event.target)
			) {
				setIsDangerOpen(false);
			}
			if (
				typeSelectRef.current &&
				!typeSelectRef.current.contains(event.target)
			) {
				setIsTypeOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const selectedDangerLabel = dangerOptions.find(
		(opt) => opt.value === filters.danger_level
	)?.label;

	const selectedTypeLabel = typeOptions.find(
		(opt) => opt.value === filters.animal_type
	)?.label;

	return (
		<>
			<div className="animals">
				<div className="container">
					<div className="header-with-reset">
						<h2 className="animals-title">Животные</h2>
						{(filters.danger_level !== "all" ||
							filters.animal_type !== "all") && (
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

					<div className="info-block">
						<div className="info-icon">
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
								<line x1="12" y1="16" x2="12" y2="12" />
								<line x1="12" y1="8" x2="12.01" y2="8" />
							</svg>
						</div>
						<div className="info-content">
							<h3>Изучите животных, с которыми можете встретиться в походе</h3>
							<p>
								Знание их поведения поможет избежать опасных ситуаций и сделает
								ваше путешествие безопаснее
							</p>
						</div>
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
										<circle cx="12" cy="12" r="10" />
										<line x1="12" y1="8" x2="12" y2="12" />
										<line x1="12" y1="16" x2="12.01" y2="16" />
									</svg>
									<span>Уровень опасности</span>
								</div>
							</div>

							<div className="custom-select-wrapper" ref={dangerSelectRef}>
								<div
									className={`custom-select ${isDangerOpen ? "open" : ""} ${
										loading ? "disabled" : ""
									}`}
									onClick={() => !loading && setIsDangerOpen(!isDangerOpen)}
								>
									<div className="selected-value">{selectedDangerLabel}</div>
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

								{isDangerOpen && !loading && (
									<div className="dropdown-menu">
										{dangerOptions.map((option) => (
											<div
												key={option.value}
												className={`dropdown-item ${
													filters.danger_level === option.value
														? "selected"
														: ""
												}`}
												onClick={() => {
													handleFilterChange("danger_level", option.value);
													setIsDangerOpen(false);
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
										<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
									</svg>
									<span>Тип животного</span>
								</div>
							</div>

							<div className="custom-select-wrapper" ref={typeSelectRef}>
								<div
									className={`custom-select ${isTypeOpen ? "open" : ""} ${
										loading ? "disabled" : ""
									}`}
									onClick={() => !loading && setIsTypeOpen(!isTypeOpen)}
								>
									<div className="selected-value">{selectedTypeLabel}</div>
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

								{isTypeOpen && !loading && (
									<div className="dropdown-menu">
										{typeOptions.map((option) => (
											<div
												key={option.value}
												className={`dropdown-item ${
													filters.animal_type === option.value ? "selected" : ""
												}`}
												onClick={() => {
													handleFilterChange("animal_type", option.value);
													setIsTypeOpen(false);
												}}
											>
												{option.label}
											</div>
										))}
									</div>
								)}
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

					<ListAnimals animals={filteredAnimals} />
				</div>
			</div>

			<Nav idActive={3} />
		</>
	);
};

export default Animals;
