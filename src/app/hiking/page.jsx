"use client"
import React, { useState, useRef, useEffect } from 'react';
import Nav from '../components/Nav';
import ListHiking from '../components/hiking/ListHiking';

// Данные маршрутов вынесем в отдельный файл или оставим здесь
const hikingRoutes = [
    {
        id: 1,
        title: "Гора Фишт",
        difficulty: 4,
        distance: 18, // в км (число для фильтрации)
        duration: 8, // в часах (число для фильтрации)
        elevation: "2,868 м",
        description: "Одна из самых высоких и красивых гор Западного Кавказа. Маршрут включает альпийские луга и ледники.",
        image: "/hiking/fisht.jpg"
    },
    {
        id: 2,
        title: "Плато Лаго-Наки",
        difficulty: 2,
        distance: 12,
        duration: 5,
        elevation: "2,200 м",
        description: "Живописное плато с панорамными видами на Кавказский хребет. Подходит для начинающих туристов.",
        image: "/hiking/lagonaki.jpg"
    },
    {
        id: 3,
        title: "Каньон реки Белой",
        difficulty: 3,
        distance: 15,
        duration: 7,
        elevation: "500 м",
        description: "Увлекательный маршрут вдоль реки Белой с водопадами и скальными образованиями.",
        image: "/hiking/belaya.jpg"
    },
    {
        id: 4,
        title: "Озеро Кардывач",
        difficulty: 5,
        distance: 42,
        duration: 24, // 3 дня примерно
        elevation: "1,840 м",
        description: "Многодневный поход к одному из самых живописных высокогорных озер Кавказа.",
        image: "/hiking/kardyvach.jpg"
    },
    {
        id: 5,
        title: "Водопады Руфабго",
        difficulty: 1,
        distance: 5,
        duration: 2.5,
        elevation: "200 м",
        description: "Легкая прогулка к каскаду водопадов в ущелье реки Руфабго. Идеально для семейного отдыха.",
        image: "/hiking/rufabgo.jpg"
    },
    {
        id: 6,
        title: "Перевал Аишха",
        difficulty: 4,
        distance: 25,
        duration: 11,
        elevation: "2,401 м",
        description: "Сложный маршрут через перевал с видами на Главный Кавказский хребет.",
        image: "/hiking/aishha.jpg"
    }
];

const Hiking = () => {
    // Состояния для фильтров
    const [filters, setFilters] = useState({
        difficulty: 'all',
        maxDistance: '',
        maxDuration: ''
    });
    
    // Состояние для отфильтрованных маршрутов
    const [filteredRoutes, setFilteredRoutes] = useState(hikingRoutes);
    
    // Состояние для кастомного селекта
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);
    
    const difficultyOptions = [
        { value: 'all', label: 'Все маршруты' },
        { value: '1', label: 'Легкий (1 звезда)' },
        { value: '2', label: 'Простой (2 звезды)' },
        { value: '3', label: 'Средний (3 звезды)' },
        { value: '4', label: 'Сложный (4 звезды)' },
        { value: '5', label: 'Эксперт (5 звезд)' }
    ];

    // Функция обработки изменения фильтров
    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }));
    };

    // Функция сброса всех фильтров
    const handleResetFilters = () => {
        setFilters({
            difficulty: 'all',
            maxDistance: '',
            maxDuration: ''
        });
    };

    // Эффект для применения фильтров
    useEffect(() => {
        let result = [...hikingRoutes];
        
        // Фильтрация по сложности
        if (filters.difficulty !== 'all') {
            result = result.filter(route => 
                route.difficulty === parseInt(filters.difficulty)
            );
        }
        
        // Фильтрация по максимальному расстоянию
        if (filters.maxDistance) {
            const maxDist = parseFloat(filters.maxDistance);
            result = result.filter(route => route.distance <= maxDist);
        }
        
        // Фильтрация по максимальной продолжительности
        if (filters.maxDuration) {
            const maxDur = parseFloat(filters.maxDuration);
            result = result.filter(route => route.duration <= maxDur);
        }
        
        setFilteredRoutes(result);
    }, [filters]);

    // Закрытие селекта при клике вне его
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedLabel = difficultyOptions.find(opt => opt.value === filters.difficulty)?.label;

    return (
        <>
            <div className='hiking'>
                <div className="container">
                    <div className="header-with-reset">
                        <h2 className="hiking-title">Маршруты</h2>
                        {(filters.difficulty !== 'all' || filters.maxDistance || filters.maxDuration) && (
                            <button 
                                className="reset-filters-btn"
                                onClick={handleResetFilters}
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
                                    <path d="M3 6h18"/>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <line x1="10" y1="11" x2="10" y2="17"/>
                                    <line x1="14" y1="11" x2="14" y2="17"/>
                                </svg>
                                Сбросить фильтры
                            </button>
                        )}
                    </div>

                    <div className="filters">
                        {/* Фильтр сложности */}
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
                                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                                    </svg>
                                    <span>Сложность</span>
                                </div>
                            </div>
                            
                            <div className="custom-select-wrapper" ref={selectRef}>
                                <div 
                                    className={`custom-select ${isOpen ? 'open' : ''}`}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <div className="selected-value">
                                        {selectedLabel}
                                    </div>
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
                                
                                {isOpen && (
                                    <div className="dropdown-menu">
                                        {difficultyOptions.map((option) => (
                                            <div
                                                key={option.value}
                                                className={`dropdown-item ${filters.difficulty === option.value ? 'selected' : ''}`}
                                                onClick={() => {
                                                    handleFilterChange('difficulty', option.value);
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

                        {/* Фильтр расстояния */}
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
                                        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/>
                                        <path d="m14.5 12.5 2-2"/>
                                        <path d="m11.5 9.5 2-2"/>
                                        <path d="m8.5 6.5 2-2"/>
                                        <path d="m17.5 15.5 2-2"/>
                                    </svg>
                                    <span>Макс. расстояние, км</span>
                                </div>
                            </div>
                            <div className="filter-input-wrapper">
                                <input 
                                    type="number" 
                                    className="filter-input" 
                                    min="0" 
                                    max="100" 
                                    placeholder="0-100"
                                    value={filters.maxDistance}
                                    onChange={(e) => handleFilterChange('maxDistance', e.target.value)}
                                />
                                <span className="input-unit">км</span>
                            </div>
                        </div>

                        {/* Фильтр продолжительности */}
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
                                        <circle cx="12" cy="12" r="10"/>
                                        <polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                    <span>Макс. время, ч</span>
                                </div>
                            </div>
                            <div className="filter-input-wrapper">
                                <input 
                                    type="number" 
                                    className="filter-input" 
                                    min="0" 
                                    max="24" 
                                    placeholder="0-24"
                                    value={filters.maxDuration}
                                    onChange={(e) => handleFilterChange('maxDuration', e.target.value)}
                                />
                                <span className="input-unit">ч</span>
                            </div>
                        </div>
                    </div>

                    {/* Список маршрутов */}
                    <ListHiking routes={filteredRoutes} />
                </div>
            </div>

            <Nav idActive={2} />
        </>
    );
};

export default Hiking;