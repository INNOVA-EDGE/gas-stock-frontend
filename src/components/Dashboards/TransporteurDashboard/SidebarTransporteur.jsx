// src/components/Dashboards/TransporteurDashboard/SidebarTransporteur.jsx
import React from 'react'
import { NavLink } from 'react-router-dom' // Utilisez NavLink pour le style actif
import { FaTruck, FaHistory, FaUser, FaSignOutAlt } from 'react-icons/fa'
import './SidebarTransporteur.css' // Importez le fichier CSS spécifique

const SidebarTransporteur = () => {
  return (
    <aside className='sidebar-container'>
      <div className='sidebar-logo-section'>
        <h1 className='sidebar-logo-text'>GAZFLOW</h1>
      </div>

      <nav className='sidebar-nav'>
        <NavLink
          to='.'
          end
          className={({ isActive }) =>
            `sidebar-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <span className='sidebar-nav-icon'>🏠</span> Accueil
        </NavLink>
        <NavLink
          to='livraisons'
          className={({ isActive }) =>
            `sidebar-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <FaTruck className='sidebar-nav-icon' /> Mes Livraisons
        </NavLink>
        <NavLink
          to='historique'
          className={({ isActive }) =>
            `sidebar-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <FaHistory className='sidebar-nav-icon' /> Historique
        </NavLink>
        <NavLink
          to='profil'
          className={({ isActive }) =>
            `sidebar-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <FaUser className='sidebar-nav-icon' /> Mon Profil
        </NavLink>
      </nav>
      <div className='sidebar-footer'>
        <NavLink to='/logout' className='sidebar-nav-item'>
          <FaSignOutAlt className='sidebar-nav-icon' /> Déconnexion
        </NavLink>
      </div>
    </aside>
  )
}

export default SidebarTransporteur
