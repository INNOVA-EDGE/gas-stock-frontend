// src/components/Dashboards/ResponsableSuiviDashboard/ResponsableSuiviDashboard.jsx
import React from 'react';
import styles from './ResponsableSuiviDashboard.module.css';

const ResponsableSuiviDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Suivi & Contrôle</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#production-monitoring" className={styles.navLink}>Suivi Production</a>
            </li>
            <li className={styles.navItem}>
              <a href="#warehouse-monitoring" className={styles.navLink}>Suivi Entrepôts</a>
            </li>
            <li className={styles.navItem}>
              <a href="#agency-monitoring" className={styles.navLink}>Suivi Agences</a>
            </li>
            <li className={styles.navItem}>
              <a href="#delivery-performance" className={styles.navLink}>Performances Livraisons</a>
            </li>
            <li className={styles.navItem}>
              <a href="#sales-cash-control" className={styles.navLink}>Contrôle Ventes/Versements</a>
            </li>
            <li className={styles.navItem}>
              <a href="#consolidated-reports" className={styles.navLink}>Rapports Consolidés</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Responsable Suivi et Contrôle</h1>

        <section id="production-monitoring" className={styles.section}>
          <h2 className={styles.sectionTitle}>Suivi des Unités de Production</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Synthèse de Production</h3>
              <p>Visualiser les quantités produites et les objectifs par unité.</p>
              <button className={styles.button}>Voir Production</button>
            </div>
            <div className={styles.card}>
              <h3>Alertes Qualité</h3>
              <p>Accéder aux rapports d'anomalies ou de non-conformités.</p>
              <button className={styles.button}>Voir Alertes</button>
            </div>
            <div className={styles.card}>
              <h3>Historique de Stock Unités</h3>
              <p>Consulter les mouvements de stock bruts et remplis au niveau des unités.</p>
              <button className={styles.button}>Historique Stock</button>
            </div>
          </div>
        </section>

        <section id="warehouse-monitoring" className={styles.section}>
          <h2 className={styles.sectionTitle}>Suivi des Entrepôts</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Niveaux de Stock Entrepôts</h3>
              <p>Visualiser les stocks disponibles et les seuils d'alerte par entrepôt.</p>
              <button className={styles.button}>Voir Stocks</button>
            </div>
            <div className={styles.card}>
              <h3>Approvisionnements Entrepôts</h3>
              <p>Suivre les livraisons des unités de production vers les entrepôts.</p>
              <button className={styles.button}>Voir Approvisionnements</button>
            </div>
          </div>
        </section>

        <section id="agency-monitoring" className={styles.section}>
          <h2 className={styles.sectionTitle}>Suivi des Agences</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Stock Agences</h3>
              <p>Contrôler les niveaux de stock et les besoins de réapprovisionnement des agences.</p>
              <button className={styles.button}>Voir Stock Agences</button>
            </div>
            <div className={styles.card}>
              <h3>Ventes Agences</h3>
              <p>Suivre les performances de vente par agence et par type de client.</p>
              <button className={styles.button}>Voir Ventes Agences</button>
            </div>
            <div className={styles.card}>
              <h3>Crédits Clients Revendeurs</h3>
              <p>Gérer et suivre les crédits accordés aux revendeurs.</p>
              <button className={styles.button}>Gérer Crédits</button>
            </div>
          </div>
        </section>

        <section id="delivery-performance" className={styles.section}>
          <h2 className={styles.sectionTitle}>Performances des Livraisons</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Statistiques des Livraisons</h3>
              <p>Taux de retards, retours, échecs et temps moyen par transporteur.</p>
              <button className={styles.button}>Voir Stats</button>
            </div>
            <div className={styles.card}>
              <h3>Missions de Transporteurs</h3>
              <p>Tableau des missions, statuts, durées et anomalies rencontrées.</p>
              <button className={styles.button}>Voir Missions</button>
            </div>
          </div>
        </section>

        <section id="sales-cash-control" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contrôle des Ventes et Versements</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Suivi des Ventes</h3>
              <p>Consulter les ventes réalisées par agence, période ou utilisateur.</p>
              <button className={styles.button}>Voir Ventes</button>
            </div>
            <div className={styles.card}>
              <h3>Suivi des Versements</h3>
              <p>Visualiser les versements effectués par les transporteurs et responsables.</p>
              <button className={styles.button}>Voir Versements</button>
            </div>
            <div className={styles.card}>
              <h3>Alertes Écarts/Manquants</h3>
              <p>Recevoir des notifications en cas de divergence entre ventes et versements.</p>
              <button className={styles.button}>Voir Alertes</button>
            </div>
          </div>
        </section>

        <section id="consolidated-reports" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rapports et KPIs Consolidés</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Générer Rapports</h3>
              <p>Accéder aux rapports consolidés (Excel, PDF, CSV) pour analyse globale.</p>
              <button className={styles.button}>Générer Rapport</button>
            </div>
            <div className={styles.card}>
              <h3>Tableau de Bord KPIs</h3>
              <p>Visualiser les indicateurs clés de performance de l'entreprise.</p>
              <button className={styles.button}>Voir KPIs</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResponsableSuiviDashboard;