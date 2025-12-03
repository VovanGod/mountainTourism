import React from 'react';

const Nav = ({idActive}) => {
    const menuItems = [
        { id: 1, href: "/", icon: "/homePage/home.svg", alt: "home", text: "Главная" },
        { id: 2, href: "/hiking", icon: "/homePage/routes.svg", alt: "routes", text: "Маршруты" },
        { id: 3, href: "/animals", icon: "/homePage/animals.svg", alt: "animals", text: "Животные" },
        { id: 4, href: "/safety", icon: "/homePage/safety.svg", alt: "safety", text: "Безопасность" },
        { id: 5, href: "/favourites", icon: "/homePage/favourites.svg", alt: "favourites", text: "Избранное" },
    ];

    return (
        <nav className='nav'>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.href} className={idActive === item.id ? 'active' : ''}>
                            <img src={item.icon} alt={item.alt} />
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;