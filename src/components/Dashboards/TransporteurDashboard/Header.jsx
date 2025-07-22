import React from 'react';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import './Header.css'; // Importez le fichier CSS spécifique pour le Header

const Header = () => {
    const userName = "Transporteur";

    return (
        <header className="header-container">
            <h1 className="header-title">
                Bienvenue, {userName} !
            </h1>

            <div className="header-actions">
                <FaBell className="header-icon header-notification-icon" />
                <FaUserCircle className="header-icon header-profile-icon" />
            </div>
        </header>
    );
};

export default Header;