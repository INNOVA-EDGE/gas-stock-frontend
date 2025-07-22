import React from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaHistory, FaUser, FaSignOutAlt } from "react-icons/fa";
import './SidebarTransporteur.css'; // Importez le fichier CSS spécifique pour la Sidebar

const SidebarTransporteur = () => {
    return (
        <aside className="sidebar-container">
            <div className="sidebar-logo-section">
                <h1 className="sidebar-logo-text">GAZFLOW</h1>
            </div>

            <nav className="sidebar-nav">
                <Link to="/transporteur" className="sidebar-nav-item">
                    <span className="sidebar-nav-icon">🏠</span> Accueil
                </Link>
                <Link to="/transporteur/livraisons" className="sidebar-nav-item">
                    <FaTruck className="sidebar-nav-icon" /> Mes Livraisons
                </Link>
                <Link to="/transporteur/historique" className="sidebar-nav-item">
                    <FaHistory className="sidebar-nav-icon" /> Historique
                </Link>
                <Link to="/transporteur/profil" className="sidebar-nav-item">
                    <FaUser className="sidebar-nav-icon" /> Mon Profil
                </Link>
            </nav>
            <div className="sidebar-footer">
                <Link to="/logout" className="sidebar-nav-item">
                    <FaSignOutAlt className="sidebar-nav-icon" /> Déconnexion
                </Link>
            </div>
        </aside>
    );
};

export default SidebarTransporteur;