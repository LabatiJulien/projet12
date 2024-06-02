import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1 className="header-animation">Mon Portfolio</h1>
            <nav>
                <ul>
                    <li className="header-animation"><a href="#profil">Profil</a></li>
                    <li className="header-animation"><a href="#projets">Projets</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
