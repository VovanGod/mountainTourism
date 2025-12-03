import React from 'react';

const navItems = [
  {
    id: 1,
    title: "Маршруты",
    description: "Горные тропы и походы на природу",
    icon: "/homePage/routes.svg",
    alt: "routes",
    link: "/hiking",
    additionalClass: "routes-item"
  },
  {
    id: 2,
    title: "Животные",
    description: "Дикая природа Краснодарского края",
    icon: "/homePage/animals.svg",
    alt: "animals",
    link: "/animals",
    additionalClass: "animals-item"
  },
  {
    id: 3,
    title: "Безопасность",
    description: "Выживание и первая помощь",
    icon: "/homePage/safety.svg",
    alt: "safety",
    link: "/safety",
    additionalClass: "safety-item"
  },
  {
    id: 4,
    title: "Избранное",
    description: "Ваши сохраненные маршруты",
    icon: "/homePage/favourites.svg",
    alt: "favourites",
    link: "/favourites",
    additionalClass: "favourites-item"
  }
];

const HomeNav = () => {
  return (
    <nav className='homeNav'>
      <ul>
        {navItems.map((item) => (
          <li key={item.id} className={`nav-item ${item.additionalClass}`}>
            <a href={item.link}>
              <div className="icon">
                <img src={item.icon} alt={item.alt} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button>Перейти</button>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeNav;