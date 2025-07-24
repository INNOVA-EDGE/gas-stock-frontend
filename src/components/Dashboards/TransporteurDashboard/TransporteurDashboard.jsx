// src/components/Dashboards/TransporteurDashboard/TransporteurDashboard.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarTransporteur from './SidebarTransporteur' // Votre sidebar
import Header from './Header' // Votre header (le même que vous avez fourni)
import styles from './TransporteurDashboard.module.css' // Vos styles spécifiques

const TransporteurDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* La Sidebar est toujours visible sur le côté */}
      <SidebarTransporteur />

      {/* Un wrapper pour le header et le contenu dynamique */}
      <div className={styles.contentWrapper}>
        {/* Le Header est également toujours visible */}
        <Header />

        {/* L'Outlet est l'emplacement où le contenu de la sous-route sera rendu */}
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default TransporteurDashboard
