// src/components/Dashboards/ClientDashboard/ClientDashboard.jsx
import React from 'react';
import styles from './ClientDashboard.module.css';
import { FaHome, FaBox, FaKey, FaSignOutAlt, FaUserCircle, FaPlusCircle, FaCheckCircle, FaTruck, FaUndo, FaListAlt, FaFileInvoiceDollar, FaHistory } from 'react-icons/fa';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';

const ClientDashboard = () => {
  const navigate = useNavigate();
  
  const userName = ""; 
  
  const handleLogout = () => {
    console.log("Déconnexion de l'utilisateur...");
    navigate('/login'); 
  };

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.gazFlowLogo}>GazFlow</h2>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="/dashboard/client" end className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
                <FaHome className={styles.navIcon} /> Accueil
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/dashboard/client/orders" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
                <FaBox className={styles.navIcon} /> Mes Commandes
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/dashboard/client/invoices" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
                <FaFileInvoiceDollar className={styles.navIcon} /> Factures
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/dashboard/client/profile" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
                <FaUserCircle className={styles.navIcon} /> Mon Profil
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/dashboard/client/returns" className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)}>
                <FaUndo className={styles.navIcon} /> Mes Retours
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <button onClick={handleLogout} className={styles.navLinkButton}>
                <FaSignOutAlt className={styles.navIcon} /> Déconnexion
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.contentHeader}>
          <h1 className={styles.welcomeMessage}>Bienvenue{userName ? `, ${userName}` : ''}</h1> 
          <div className={styles.headerRight}>
            {/* Ajout du texte "Profil" sous l'icône */}
            <NavLink to="/dashboard/client/profile" className={styles.profileHeaderInfo}>
              <FaUserCircle className={styles.profilePic} /> 
              <span className={styles.profileText}>Profil</span> {/* Nouveau span pour le texte */}
            </NavLink>
          </div>
        </header>

        <Outlet /> 
      </main>
    </div>
  );
};

export default ClientDashboard;