// src/components/Dashboards/AdminDashboard/AdminDashboard.jsx
import React from 'react';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Admin Panel</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#user-management" className={styles.navLink}>Gestion des Utilisateurs</a>
            </li>
            <li className={styles.navItem}>
              <a href="#entity-management" className={styles.navLink}>Gestion des Entités</a>
            </li>
            <li className={styles.navItem}>
              <a href="#reports" className={styles.navLink}>Rapports et KPIs</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Administrateur</h1>

        <section id="user-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Utilisateurs</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Créer un Nouvel Utilisateur</h3>
              <p>Ajouter de nouveaux comptes employés et définir leurs rôles.</p>
              <button className={styles.button}>Créer Utilisateur</button>
            </div>
            <div className={styles.card}>
              <h3>Gérer les Comptes</h3>
              <p>Modifier les rôles, désactiver ou réinitialiser les mots de passe.</p>
              <button className={styles.button}>Gérer Comptes</button>
            </div>
            <div className={styles.card}>
              <h3>Valider Comptes Clients</h3>
              <p>Approuver ou refuser les demandes d'inscription des clients externes.</p>
              <button className={styles.button}>Valider Clients</button>
            </div>
            <div className={styles.card}>
              <h3>Historique des Connexions</h3>
              <p>Consulter les journaux de connexion et l'activité des utilisateurs.</p>
              <button className={styles.button}>Voir Historique</button>
            </div>
          </div>
        </section>

        <section id="entity-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Entités</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Créer une Entité</h3>
              <p>Ajouter de nouvelles unités de production, entrepôts ou agences.</p>
              <button className={styles.button}>Créer Entité</button>
            </div>
            <div className={styles.card}>
              <h3>Gérer les Entités</h3>
              <p>Modifier les informations des agences, entrepôts, unités de production.</p>
              <button className={styles.button}>Gérer Entités</button>
            </div>
          </div>
        </section>

        <section id="reports" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rapports et KPIs</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Voir Rapports Consolidés</h3>
              <p>Accéder aux rapports généraux et aux indicateurs clés de performance.</p>
              <button className={styles.button}>Voir Rapports</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;