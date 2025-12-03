import Link from 'next/link';
import React from 'react';

// Компонент для отображения звезд сложности
const DifficultyStars = ({ level }) => {
    return (
        <div className="difficulty-stars">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={index < level ? "rgba(184, 103, 46, 1)" : "rgba(229, 235, 224, 1)"}
                    stroke="rgba(184, 103, 46, 1)"
                    strokeWidth="1"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
            <span className="difficulty-text">
                {level === 1 && "Легкий"}
                {level === 2 && "Простой"}
                {level === 3 && "Средний"}
                {level === 4 && "Сложный"}
                {level === 5 && "Эксперт"}
            </span>
        </div>
    );
};

const ListHiking = ({ routes = [] }) => {
    // Если маршрутов нет после фильтрации
    if (routes.length === 0) {
        return (
            <div className="list-hiking">
                <div className="container">
                    <div className="no-results">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="rgba(184, 103, 46, 0.5)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        <h3>Маршруты не найдены</h3>
                        <p>Попробуйте изменить параметры фильтрации</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="list-hiking">
            <div className="container">
                <div className="hiking-grid">
                    {routes.map((route) => (
                        <Link href={`/hiking/${route.id}`} className="hiking-card" key={route.id}>
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
                                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                                    </svg>
                                </div>
                                <div className="card-badge">
                                    <span>{route.distance} км</span>
                                </div>
                                {/* Бейдж сложности */}
                                <div className="difficulty-badge">
                                    {route.difficulty}/5
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <h3 className="card-title">{route.title}</h3>
                                
                                <div className="card-meta">
                                    <div className="meta-item">
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
                                            <circle cx="12" cy="12" r="10"/>
                                            <polyline points="12 6 12 12 16 14"/>
                                        </svg>
                                        <span>{route.duration} ч</span>
                                    </div>
                                    
                                    <div className="meta-item">
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
                                            <path d="M12 2v20"/>
                                            <path d="m17 5-5-3-5 3"/>
                                            <path d="m17 19-5 3-5-3"/>
                                            <path d="M2 12h20"/>
                                        </svg>
                                        <span>{route.elevation}</span>
                                    </div>
                                </div>
                                
                                <div className="card-difficulty">
                                    <DifficultyStars level={route.difficulty} />
                                </div>
                                
                                <p className="card-description">{route.description}</p>
                                
                                <div className="card-footer">
                                    <button className="details-button">
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
                                            <polyline points="9 18 15 12 9 6"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListHiking;