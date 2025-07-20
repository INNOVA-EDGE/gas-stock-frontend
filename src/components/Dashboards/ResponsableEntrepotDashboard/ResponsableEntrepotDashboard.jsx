// src/components/Dashboards/ResponsableEntrepotDashboard/ResponsableEntrepotDashboard.jsx
import React from 'react';
import styles from './ResponsableEntrepotDashboard.module.css';

const ResponsableEntrepotDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Gestion Entrepôt</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#stock-reception" className={styles.navLink}>Réception Stocks</a>
            </li>
            <li className={styles.navItem}>
              <a href="#stock-expedition" className={styles.navLink}>Expédition Stocks</a>
            </li>
            <li className={styles.navItem}>
              <a href="#delivery-management" className={styles.navLink}>Gestion Livraisons</a>
            </li>
            <li className={styles.navItem}>
              <a href="#returns-management" className={styles.navLink}>Gestion Retours</a>
            </li>
            <li className={styles.navItem}>
              <a href="#reports" className={styles.navLink}>Rapports Entrepôt</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Responsable d'Entrepôt</h1>

        <section id="stock-reception" className={styles.section}>
          <h2 className={styles.sectionTitle}>Réception des Stocks</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Enregistrer Réception</h3>
              <p>Saisir les détails des bouteilles reçues des unités de production.</p>
              <button className={styles.button}>Nouvelle Réception</button>
            </div>
            <div className={styles.card}>
              <h3>Vérifier Stocks Physiques</h3>
              <p>Comparer les stocks théoriques avec les stocks réels et ajuster.</p>
              <button className={styles.button}>Vérifier Stock</button>
            </div>
          </div>
        </section>

        <section id="stock-expedition" className={styles.section}>
          <h2 className={styles.sectionTitle}>Expédition des Stocks</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Expédier aux Agences</h3>
              <p>Enregistrer les bouteilles expédiées vers les agences.</p>
              <button className={styles.button}>Expédier Agence</button>
            </div>
            <div className={styles.card}>
              <h3>Expédier aux Transporteurs</h3>
              <p>Enregistrer les bouteilles chargées par les transporteurs pour livraison directe.</p>
              <button className={styles.button}>Expédier Transporteur</button>
            </div>
          </div>
        </section>

        <section id="delivery-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Livraisons</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Suivi des Livraisons</h3>
              <p>Voir le statut des livraisons de l'entrepôt vers les agences et clients.</p>
              <button className={styles.button}>Suivre Livraisons</button>
            </div>
            <div className={styles.card}>
              <h3>Confirmer Réception Clients</h3>
              <p>Marquer les livraisons comme reçues par les clients finaux ou agences.</p>
              <button className={styles.button}>Confirmer Réception</button>
            </div>
          </div>
        </section>

        <section id="returns-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Retours</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Enregistrer un Retour</h3>
              <p>Saisir les détails des bouteilles retournées par les clients ou agences.</p>
              <button className={styles.button}>Enregistrer Retour</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Retours</h3>
              <p>Consulter la liste et les détails des retours passés.</p>
              <button className={styles.button}>Voir Historique Retours</button>
            </div>
          </div>
        </section>

        <section id="reports" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rapports d'Entrepôt</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Rapport de Stock</h3>
              <p>Générer des rapports sur les niveaux de stock actuels et les mouvements.</p>
              <button className={styles.button}>Rapport Stock</button>
            </div>
            <div className={styles.card}>
              <h3>Rapport de Livraisons</h3>
              <p>Voir les statistiques des livraisons sortantes.</p>
              <button className={styles.button}>Rapport Livraisons</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResponsableEntrepotDashboard;