import React from 'react';
import Nav from '../components/Nav';

const Hiking = () => {
    return (
        <>
            <div className='hiking'>
                <div className="container">
                    <h2 className="hiking-title">Маршруты</h2>

                    <div className="filters">
                        <div className="filter">
                            <div className="filter-header">
                                <div className="filter-icon">
                                    <img src="/hiking/difficulty.svg" alt="Сложность" />
                                    <span>Сложность</span>
                                </div>
                            </div>
                            <select className="filter-select">
                                <option value="all">Все</option>
                                <option value="easy">Легкий</option>
                                <option value="simple">Простой</option>
                                <option value="medium">Средний</option>
                                <option value="hard">Сложный</option>
                                <option value="expert">Очень сложный</option>
                            </select>
                        </div>

                        <div className="filter">
                            <div className="filter-header">
                                <div className="filter-icon">
                                    <img src="/hiking/distance.svg" alt="Расстояние" />
                                    <span>Продолжительность в км</span>
                                </div>
                            </div>
                            <div className="filter-input-wrapper">
                                <input 
                                    type="number" 
                                    className="filter-input" 
                                    min="0" 
                                    max="100" 
                                    placeholder="0-100"
                                />
                                <span className="input-unit">км</span>
                            </div>
                        </div>

                        <div className="filter">
                            <div className="filter-header">
                                <div className="filter-icon">
                                    <img src="/hiking/time.svg" alt="Время" />
                                    <span>Продолжительность в часах</span>
                                </div>
                            </div>
                            <div className="filter-input-wrapper">
                                <input 
                                    type="number" 
                                    className="filter-input" 
                                    min="0" 
                                    max="24" 
                                    placeholder="0-24"
                                />
                                <span className="input-unit">ч</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Nav idActive={2} />
        </>
    );
};

export default Hiking;