// src/pages/TransporteurDashboard.jsx
import React from "react";
// Tous ces composants sont dans le même sous-dossier, donc le chemin relatif est le même :
import SidebarTransporteur from "../components/Dashboards/TransporteurDashboard/SidebarTransporteur.jsx";
import Header from "../components/Dashboards/TransporteurDashboard/Header.jsx";
import MainContent from "../components/Dashboards/TransporteurDashboard/MainContent.jsx";
import styles from './TransporteurDashboard.module.css'; // S'assure que ce fichier CSS est bien dans src/pages/

const TransporteurDashboard = () => {
    return (
        <div className={styles.dashboardLayout}>
            <SidebarTransporteur />
            <div className={styles.mainContentAreaWrapper}>
                <Header />
                <MainContent />
            </div>
        </div>
    );
};

export default TransporteurDashboard;