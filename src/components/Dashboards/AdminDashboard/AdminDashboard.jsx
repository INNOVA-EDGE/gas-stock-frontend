// src/components/Dashboards/AdminDashboard/AdminDashboard.jsx
import React, { useState } from 'react'; // Importez useState pour gérer l'état
import { Link } from 'react-router-dom';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // État pour la barre latérale, ouverte par défaut

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Inverse l'état de la barre latérale
  };

  return (
    <div className={`${styles.dashboardContainer} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
      {/* Bouton pour ouvrir/fermer la barre latérale */}
      <button className={styles.sidebarToggleBtn} onClick={toggleSidebar}>
        {isSidebarOpen ? '✕' : '☰'} {/* Affiche 'X' si ouverte, '☰' si fermée */}
      </button>

      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}></h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#overview" className={styles.navLink}>Aperçu Général</a>
            </li>
            <li className={styles.navItem}>
              <a href="#user-management" className={styles.navLink}>Gestion des Utilisateurs</a>
            </li>
            <li className={styles.navItem}>
              <a href="#client-management" className={styles.navLink}>Gestion des Clients</a>
            </li>
            <li className={styles.navItem}>
              <a href="#entity-management" className={styles.navLink}>Gestion des Entités</a>
            </li>
            <li className={styles.navItem}>
              <a href="#system-monitoring" className={styles.navLink}>Suivi Système</a>
            </li>
            <li className={styles.navItem}>
              <a href="#reports" className={styles.navLink}>Rapports & Statistiques</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Administrateur</h1>

        {/* Section: Aperçu Général / Statistiques Clés */}
        <section id="overview" className={styles.section}>
          <h2 className={styles.sectionTitle}>Aperçu Général & Indicateurs Clés (KPIs)</h2>
          <div className={styles.gridContainer}>
            <div className={styles.kpiCard}>
              <h3>Utilisateurs Actifs</h3>
              <p className={styles.kpiValue}>125</p>
              <p className={styles.kpiDescription}>Employés et clients connectés.</p>
            </div>
            <div className={styles.kpiCard}>
              <h3>Comptes Clients en Attente</h3>
              <p className={styles.kpiValue}>8</p>
              <p className={styles.kpiDescription}>À valider ou refuser.</p>
            </div>
            <div className={styles.kpiCard}>
              <h3>Entités Enregistrées</h3>
              <p className={styles.kpiValue}>15</p>
              <p className={styles.kpiDescription}>Unités, entrepôts, agences.</p>
            </div>
            <div className={styles.kpiCard}>
              <h3>Stock Total Actuel</h3>
              <p className={styles.kpiValue}>12,345 Bouteilles</p>
              <p className={styles.kpiDescription}>Toutes unités confondues.</p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Alertes Récentes</h3>
              <p>Nouvelle inscription client : John Doe.</p>
              <p>Activité suspecte détectée sur le compte de Jane Smith.</p>
              <p>Capacité entrepôt Nord-Est atteinte à 90%.</p>
            </div>
          </div>
        </section>

        {/* Section: Gestion des Utilisateurs (Employés) */}
        <section id="user-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Comptes Employés</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Créer un Nouvel Employé</h3>
              <p>Ajouter de nouveaux comptes pour les employés et leur attribuer un rôle.</p>
              <Link to="/admin/create-employee" className={styles.button}>Créer Employé</Link>
            </div>
            <div className={styles.card}>
              <h3>Gérer les Employés</h3>
              <p>Consulter la liste des employés, modifier leurs informations, rôles, désactiver ou réinitialiser les comptes.</p>
              <Link to="/admin/manage-employees" className={styles.button}>Gérer Employés</Link>
            </div>
          </div>
        </section>

        {/* Section: Gestion des Clients Externes */}
        <section id="client-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Comptes Clients</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Valider Nouveaux Clients</h3>
              <p>Approuver ou refuser les comptes clients externes en attente.</p>
              <Link to="/admin/validate-clients" className={styles.button}>Valider Clients</Link>
            </div>
            <div className={styles.card}>
              <h3>Gérer les Clients Existants</h3>
              <p>Consulter la liste des clients, modifier leurs informations, suivre leur statut.</p>
              <Link to="/admin/manage-clients" className={styles.button}>Gérer Clients</Link>
            </div>
          </div>
        </section>

        {/* Section: Gestion des Entités (Unités de Production, Entrepôts, Agences) */}
        <section id="entity-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Entités Physiques</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Créer une Entité</h3>
              <p>Ajouter de nouvelles unités de production, entrepôts ou agences.</p>
              <Link to="/admin/create-entity" className={styles.button}>Créer Entité</Link>
            </div>
            <div className={styles.card}>
              <h3>Gérer les Entités</h3>
              <p>Modifier les informations des entités existantes, assigner les responsables.</p>
              <Link to="/admin/manage-entities" className={styles.button}>Gérer Entités</Link>
            </div>
          </div>
        </section>

        {/* Section: Suivi du Système (Logs et Activités) */}
        <section id="system-monitoring" className={styles.section}>
          <h2 className={styles.sectionTitle}>Suivi et Journalisation du Système</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Journaux de Connexion & Activité</h3>
              <p>Consulter l'historique détaillé des connexions et des actions importantes des utilisateurs.</p>
              <Link to="/admin/activity-logs" className={styles.button}>Voir Journaux</Link>
            </div>
            <div className={styles.card}>
              <h3>Alertes Système</h3>
              <p>Voir la liste des alertes générées par le système (stock bas, transactions suspectes, etc.).</p>
              <Link to="/admin/system-alerts" className={styles.button}>Voir Alertes</Link>
            </div>
          </div>
        </section>

        {/* Section: Rapports et KPIs (Consolidés) */}
        <section id="reports" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rapports et Indicateurs de Performance</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Voir Rapports Consolidés</h3>
              <p>Accéder aux rapports généraux et aux indicateurs clés de performance de l'ensemble du système (production, stock, ventes, livraisons, retours).</p>
              <Link to="/admin/consolidated-reports" className={styles.button}>Voir Rapports</Link>
            </div>
            <div className={styles.card}>
              <h3>Tableau de Bord Global</h3>
              <p>Visualiser les KPIs en temps réel sous forme de graphiques (production/jour, taux de retour, volume vendu, etc.).</p>
              <Link to="/admin/global-dashboard" className={styles.button}>Tableau de Bord Global</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;