// src/components/Dashboards/ResponsableUniteProductionDashboard/ResponsableUniteProductionDashboard.jsx
import React from 'react';
import styles from './ResponsableUniteProductionDashboard.module.css';

const ResponsableUniteProductionDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Unité de Production</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#production-management" className={styles.navLink}>Gestion Production</a>
            </li>
            <li className={styles.navItem}>
              <a href="#stock-management" className={styles.navLink}>Gestion Stocks</a>
            </li>
            <li className={styles.navItem}>
              <a href="#expedition" className={styles.navLink}>Expédition Bouteilles</a>
            </li>
            <li className={styles.navItem}>
              <a href="#reports" className={styles.navLink}>Rapports Production</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Responsable Unité de Production</h1>

        <section id="production-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion de la Production</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Planification de la Production</h3>
              <p>Définir les objectifs de remplissage et les plannings.</p>
              <button className={styles.button}>Planifier Production</button>
            </div>
            <div className={styles.card}>
              <h3>Enregistrer Production Journalière</h3>
              <p>Saisir les quantités de bouteilles remplies par type.</p>
              <button className={styles.button}>Enregistrer Production</button>
            </div>
            <div className={styles.card}>
              <h3>Déclarer Incidents/Pannes</h3>
              <p>Notifier les anomalies ou interruptions de production.</p>
              <button className={styles.button}>Déclarer Incident</button>
            </div>
          </div>
        </section>

        <section id="stock-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Stocks</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Stock de Bouteilles Brutes</h3>
              <p>Visualiser le nombre de bouteilles vides disponibles pour remplissage.</p>
              <button className={styles.button}>Voir Stock Brut</button>
            </div>
            <div className={styles.card}>
              <h3>Stock de Bouteilles Remplies</h3>
              <p>Consulter les quantités de bouteilles prêtes à être expédiées.</p>
              <button className={styles.button}>Voir Stock Rempli</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Mouvements</h3>
              <p>Accéder aux entrées et sorties de stock par date.</p>
              <button className={styles.button}>Historique Mouvements</button>
            </div>
          </div>
        </section>

        <section id="expedition" className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition des Bouteilles</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Enregistrer une Expédition</h3>
              <p>Saisir les détails des chargements de bouteilles vers les entrepôts.</p>
              <button className={styles.button}>Enregistrer Expédition</button>
            </div>
            <div className={styles.card}>
              <h3>Suivi des Expéditions</h3>
              <p>Consulter le statut des expéditions en cours ou passées.</p>
              <button className={styles.button}>Suivre Expéditions</button>
            </div>
          </div>
        </section>

        <section id="reports" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rapports de Production</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Rapport Journalier</h3>
              <p>Générer un rapport des activités de production du jour.</p>
              <button className={styles.button}>Rapport Journalier</button>
            </div>
            <div className={styles.card}>
              <h3>Rapport de Performance</h3>
              <p>Analyser l'efficacité de la production sur une période donnée.</p>
              <button className={styles.button}>Rapport Performance</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResponsableUniteProductionDashboard;