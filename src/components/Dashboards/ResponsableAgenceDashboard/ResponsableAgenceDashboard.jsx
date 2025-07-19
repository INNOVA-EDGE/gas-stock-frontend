// src/components/Dashboards/ResponsableAgenceDashboard/ResponsableAgenceDashboard.jsx
import React from 'react';
import styles from './ResponsableAgenceDashboard.module.css';

const ResponsableAgenceDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Gestion Agence</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#stock-reception" className={styles.navLink}>Réception Stocks</a>
            </li>
            <li className={styles.navItem}>
              <a href="#sales-management" className={styles.navLink}>Gestion Ventes</a>
            </li>
            <li className={styles.navItem}>
              <a href="#payment-management" className={styles.navLink}>Gestion Versements</a>
            </li>
            <li className={styles.navItem}>
              <a href="#credit-management" className={styles.navLink}>Gestion Crédits</a>
            </li>
            <li className={styles.navItem}>
              <a href="#reports" className={styles.navLink}>Rapports Agence</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Responsable d'Agence</h1>

        <section id="stock-reception" className={styles.section}>
          <h2 className={styles.sectionTitle}>Réception et Suivi des Stocks</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Enregistrer Réception</h3>
              <p>Saisir les détails des bouteilles reçues de l'entrepôt.</p>
              <button className={styles.button}>Nouvelle Réception</button>
            </div>
            <div className={styles.card}>
              <h3>Voir Stock Actuel</h3>
              <p>Consulter les quantités de bouteilles disponibles par type.</p>
              <button className={styles.button}>Voir Stock</button>
            </div>
            <div className={styles.card}>
              <h3>Historique Mouvements</h3>
              <p>Accéder aux entrées et sorties de stock de l'agence.</p>
              <button className={styles.button}>Historique</button>
            </div>
          </div>
        </section>

        <section id="sales-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Ventes</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Enregistrer Vente Client</h3>
              <p>Saisir les détails d'une vente à un client ménage ou revendeur.</p>
              <button className={styles.button}>Nouvelle Vente</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Ventes</h3>
              <p>Consulter toutes les transactions de vente passées.</p>
              <button className={styles.button}>Voir Historique</button>
            </div>
            <div className={styles.card}>
              <h3>Gestion des Retours Clients</h3>
              <p>Enregistrer les retours de bouteilles par les clients.</p>
              <button className={styles.button}>Gérer Retours</button>
            </div>
          </div>
        </section>

        <section id="payment-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Versements</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Enregistrer Versement</h3>
              <p>Saisir les montants versés à l'entrepôt ou à la banque.</p>
              <button className={styles.button}>Nouveau Versement</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Versements</h3>
              <p>Consulter la liste des versements effectués.</p>
              <button className={styles.button}>Voir Versements</button>
            </div>
          </div>
        </section>

        <section id="credit-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Crédits</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Accorder un Crédit</h3>
              <p>Enregistrer un crédit accordé à un client revendeur.</p>
              <button className={styles.button}>Accorder Crédit</button>
            </div>
            <div className={styles.card}>
              <h3>Suivi des Crédits</h3>
              <p>Visualiser les crédits en cours et leur statut de remboursement.</p>
              <button className={styles.button}>Suivre Crédits</button>
            </div>
            <div className={styles.card}>
              <h3>Enregistrer Remboursement</h3>
              <p>Saisir un paiement partiel ou total pour un crédit.</p>
              <button className={styles.button}>Remboursement</button>
            </div>
          </div>
        </section>

        <section id="reports" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rapports d'Agence</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Rapport Quotidien des Ventes</h3>
              <p>Générer un rapport des ventes et mouvements de stock du jour.</p>
              <button className={styles.button}>Rapport Quotidien</button>
            </div>
            <div className={styles.card}>
              <h3>Rapport de Crédits</h3>
              <p>Analyser l'état des crédits accordés et des recouvrements.</p>
              <button className={styles.button}>Rapport Crédits</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResponsableAgenceDashboard;