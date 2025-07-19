// src/components/Dashboards/TransporteurDashboard/TransporteurDashboard.jsx
import React from 'react';
import styles from './TransporteurDashboard.module.css';

const TransporteurDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Espace Transporteur</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#missions" className={styles.navLink}>Mes Missions</a>
            </li>
            <li className={styles.navItem}>
              <a href="#delivery-updates" className={styles.navLink}>Mises à Jour Livraisons</a>
            </li>
            <li className={styles.navItem}>
              <a href="#returns" className={styles.navLink}>Gestion Retours</a>
            </li>
            <li className={styles.navItem}>
              <a href="#payments" className={styles.navLink}>Mes Versements</a>
            </li>
            <li className={styles.navItem}>
              <a href="#reports" className={styles.navLink}>Rapports Activité</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Transporteur</h1>

        <section id="missions" className={styles.section}>
          <h2 className={styles.sectionTitle}>Mes Missions de Livraison</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Missions Actuelles</h3>
              <p>Voir la liste des livraisons qui vous sont attribuées et leur statut.</p>
              <button className={styles.button}>Voir Missions</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Missions</h3>
              <p>Consulter les missions de livraison terminées ou annulées.</p>
              <button className={styles.button}>Historique</button>
            </div>
          </div>
        </section>

        <section id="delivery-updates" className={styles.section}>
          <h2 className={styles.sectionTitle}>Mises à Jour des Livraisons</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Signaler une Livraison Effectuée</h3>
              <p>Confirmer la livraison de bouteilles chez un client ou une agence.</p>
              <button className={styles.button}>Confirmer Livraison</button>
            </div>
            <div className={styles.card}>
              <h3>Déclarer un Incident</h3>
              <p>Notifier un problème (retard, avarie, refus de livraison) pendant une mission.</p>
              <button className={styles.button}>Déclarer Incident</button>
            </div>
          </div>
        </section>

        <section id="returns" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Retours</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Enregistrer Retour</h3>
              <p>Saisir les bouteilles collectées chez les clients pour retour à l'entrepôt.</p>
              <button className={styles.button}>Enregistrer Retour</button>
            </div>
            <div className={styles.card}>
              <h3>Suivi des Retours</h3>
              <p>Visualiser le statut des retours en attente ou traités.</p>
              <button className={styles.button}>Suivre Retours</button>
            </div>
          </div>
        </section>

        <section id="payments" className={styles.section}>
          <h2 className={styles.sectionTitle}>Mes Versements</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Enregistrer un Versement</h3>
              <p>Déclarer les montants versés à l'entreprise pour les livraisons payées en cash.</p>
              <button className={styles.button}>Nouveau Versement</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Versements</h3>
              <p>Consulter la liste de tous les versements que vous avez effectués.</p>
              <button className={styles.button}>Historique Versements</button>
            </div>
          </div>
        </section>

        <section id="reports" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rapports d'Activité</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Rapport de Missions</h3>
              <p>Générer un rapport sur vos performances de livraison.</p>
              <button className={styles.button}>Rapport Missions</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TransporteurDashboard;