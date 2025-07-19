// src/components/Dashboards/ClientDashboard/ClientDashboard.jsx
import React from 'react';
import styles from './ClientDashboard.module.css';

const ClientDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Mon Espace Client</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#order-management" className={styles.navLink}>Mes Commandes</a>
            </li>
            <li className={styles.navItem}>
              <a href="#returns" className={styles.navLink}>Mes Retours</a>
            </li>
            {/* Le lien "Mon Crédit" peut être affiché conditionnellement en fonction du rôle exact (Revendeur) */}
            <li className={styles.navItem}>
              <a href="#credit" className={styles.navLink}>Mon Crédit</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Client</h1>

        <section id="order-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Commandes</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Passer une Nouvelle Commande</h3>
              <p>Explorer le catalogue et commander des bouteilles de gaz.</p>
              <button className={styles.button}>Nouvelle Commande</button>
            </div>
            <div className={styles.card}>
              <h3>Suivre mes Commandes</h3>
              <p>Voir le statut actuel de mes commandes en cours.</p>
              <button className={styles.button}>Suivre Commande</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Commandes</h3>
              <p>Consulter toutes mes commandes passées et leurs détails.</p>
              <button className={styles.button}>Voir Historique</button>
            </div>
          </div>
        </section>

        <section id="returns" className={styles.section}>
          <h2 className={styles.sectionTitle}>Mes Retours</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Effectuer un Retour</h3>
              <p>Demander un échange ou un remboursement pour des bouteilles vides.</p>
              <button className={styles.button}>Faire un Retour</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Retours</h3>
              <p>Consulter toutes mes demandes de retour.</p>
              <button className={styles.button}>Voir Retours</button>
            </div>
          </div>
        </section>

        <section id="credit" className={styles.section}>
          <h2 className={styles.sectionTitle}>Mon Crédit (Revendeurs)</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Visualiser mon Solde</h3>
              <p>Consulter le montant de crédit disponible et les échéances.</p>
              <button className={styles.button}>Voir Crédit</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClientDashboard;