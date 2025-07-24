// src/components/Dashboards/ResponsableUniteProductionDashboard/ResponsableUniteProductionDashboard.jsx
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './ResponsableUniteProductionDashboard.module.css'
import {
  FaBoxes,
  FaClipboardList,
  FaTruckLoading,
  FaChartBar,
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaRoute,
} from 'react-icons/fa'

const ResponsableUniteProductionDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Unité de Production</h2>
        <nav className={styles.mainNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to='.'
                end
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                <FaHome className={styles.navIcon} />
                <span>Accueil</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to='gestion-production'
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                <FaClipboardList className={styles.navIcon} />
                <span>Gestion Production</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to='gestion-stocks'
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                <FaBoxes className={styles.navIcon} />
                <span>Gestion Stocks</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to='expedition'
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                <FaTruckLoading className={styles.navIcon} />
                <span>Enregistrer Expédition</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to='suivi-expeditions'
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                <FaRoute className={styles.navIcon} />
                <span>Suivi des Expéditions</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to='rapports-production'
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                <FaChartBar className={styles.navIcon} />
                <span>Rapports Production</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className={styles.mainContentArea}>
        <header className={styles.dashboardHeader}>
          <h1 className={styles.pageTitle}>
            Tableau de Bord Unité de Production
          </h1>
          <div className={styles.headerActions}>
            <NavLink to='profile' className={styles.profileLink}>
              <FaUser className={styles.profileIcon} />
              <span>Mon Profil</span>
            </NavLink>
            <button className={styles.logoutButton}>
              <FaSignOutAlt className={styles.logoutIcon} />
              <span>Déconnexion</span>
            </button>
          </div>
        </header>
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default ResponsableUniteProductionDashboard
