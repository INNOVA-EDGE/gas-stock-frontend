// src/components/Dashboards/AdminDashboard/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminDashboard.module.css';
import { apiService } from '../../../services/apiService'; // Assurez-vous que le chemin est correct

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // États pour stocker les données dynamiques venant du backend
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ active: 0, pending: 0, entities: 15, stock: 12345 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // S'exécute une fois quand le composant est affiché pour charger les données
  useEffect(() => {
    fetchUsersAndStats();
  }, []);

  // Fonction pour récupérer toutes les données depuis le backend
  const fetchUsersAndStats = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await apiService.getAllUsers();
      setUsers(response.data);
      
      // Calculer les statistiques à partir des données réelles
      const activeUsers = response.data.filter(u => u.estActif).length;
      const pendingClients = response.data.filter(u => u.statutValidation === 'EN_ATTENTE_VALIDATION').length;
      setStats(prev => ({ ...prev, active: activeUsers, pending: pendingClients }));
    } catch (err) {
      setError("Erreur lors de la récupération des données. Assurez-vous d'être connecté en tant qu'admin.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  // Fonctions pour gérer les clics sur les boutons d'action
  const handleApprove = async (id) => {
    if (window.confirm("Voulez-vous vraiment approuver ce client ?")) {
      try {
        await apiService.approveReseller(id);
        fetchUsersAndStats(); // Recharger les données pour voir le changement
      } catch (err) {
        alert("Erreur lors de l'approbation : " + (err.response?.data || err.message));
      }
    }
  };
  
  const handleToggleStatus = async (id, currentStatus) => {
     const action = currentStatus ? "suspendre" : "activer";
     if (window.confirm(`Voulez-vous vraiment ${action} cet employé ?`)) {
      try {
        await apiService.toggleUserStatus(id);
        fetchUsersAndStats(); // Recharger les données
      } catch (err) {
        alert("Erreur lors du changement de statut : " + (err.response?.data || err.message));
      }
    }
  };
  
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.")) {
      try {
        await apiService.deleteUser(id);
        fetchUsersAndStats(); // Recharger les données
      } catch (err) {
        alert("Erreur lors de la suppression : " + (err.response?.data || err.message));
      }
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Filtrer les listes pour les afficher dans les bonnes sections
  const pendingClients = users.filter(u => u.statutValidation === 'EN_ATTENTE_VALIDATION');
  const employees = users.filter(u => !u.role.startsWith('CLIENT_'));

  // Gérer l'affichage pendant le chargement ou en cas d'erreur
  if (loading) return <div style={{ padding: '20px' }}>Chargement des données administrateur...</div>;
  if (error) return <div style={{ color: 'red', padding: '20px' }}>{error}</div>;

  return (
    <div className={`${styles.dashboardContainer} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
      <button className={styles.sidebarToggleBtn} onClick={toggleSidebar}>
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}></h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#overview" className={styles.navLink}>Aperçu Général</a></li>
            <li className={styles.navItem}><a href="#user-management" className={styles.navLink}>Gestion des Employés</a></li>
            <li className={styles.navItem}><a href="#client-management" className={styles.navLink}>Gestion des Clients</a></li>
            <li className={styles.navItem}><a href="#entity-management" className={styles.navLink}>Gestion des Entités</a></li>
            <li className={styles.navItem}><a href="#system-monitoring" className={styles.navLink}>Suivi Système</a></li>
            <li className={styles.navItem}><a href="#reports" className={styles.navLink}>Rapports & Statistiques</a></li>
          </ul>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>Tableau de Bord Administrateur</h1>

        <section id="overview" className={styles.section}>
          <h2 className={styles.sectionTitle}>Aperçu Général & Indicateurs Clés (KPIs)</h2>
          <div className={styles.gridContainer}>
            <div className={styles.kpiCard}>
              <h3>Utilisateurs Actifs</h3>
              <p className={styles.kpiValue}>{stats.active}</p>
              <p className={styles.kpiDescription}>Employés et clients connectés.</p>
            </div>
            <div className={styles.kpiCard}>
              <h3>Comptes Clients en Attente</h3>
              <p className={styles.kpiValue}>{stats.pending}</p>
              <p className={styles.kpiDescription}>À valider ou refuser.</p>
            </div>
            <div className={styles.kpiCard}>
              <h3>Entités Enregistrées</h3>
              <p className={styles.kpiValue}>{stats.entities}</p>
              <p className={styles.kpiDescription}>Unités, entrepôts, agences.</p>
            </div>
            <div className={styles.kpiCard}>
              <h3>Stock Total Actuel</h3>
              <p className={styles.kpiValue}>{stats.stock.toLocaleString()} Bouteilles</p>
              <p className={styles.kpiDescription}>Toutes unités confondues.</p>
            </div>
          </div>
        </section>

        <section id="user-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Comptes Employés</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Créer un Nouvel Employé</h3>
              <p>Ajouter de nouveaux comptes pour les employés et leur attribuer un rôle.</p>
              <Link to="/admin/create-employee" className={styles.button}>Créer Employé</Link>
            </div>
            <div className={`${styles.card} ${styles.fullWidthCard}`}>
              <h3>Gérer les Employés</h3>
              <p>Consulter la liste des employés, modifier leurs informations, rôles, désactiver ou réinitialiser les comptes.</p>
              <div className={styles.tableWrapper}>
                {employees.length > 0 ? (
                  <table>
                    <thead><tr><th>Nom Complet</th><th>Rôle</th><th>Statut</th><th>Actions</th></tr></thead>
                    <tbody>
                      {employees.map(user => (
                        <tr key={user.id}>
                          <td>{user.prenom} {user.nom}</td>
                          <td>{user.role}</td>
                          <td>
                            <span className={user.estActif ? styles.statusActive : styles.statusInactive}>
                              {user.estActif ? 'Actif' : 'Suspendu'}
                            </span>
                          </td>
                          <td>
                            <button className={styles.buttonToggle} onClick={() => handleToggleStatus(user.id, user.estActif)}>
                              {user.estActif ? 'Suspendre' : 'Activer'}
                            </button>
                            <button className={styles.buttonDecline} onClick={() => handleDelete(user.id)}>
                              Supprimer
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>Aucun employé à afficher.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="client-management" className={styles.section}>
          <h2 className={styles.sectionTitle}>Gestion des Comptes Clients</h2>
          <div className={`${styles.card} ${styles.fullWidthCard}`}>
            <h3>Valider Nouveaux Clients</h3>
            <p>Approuver ou refuser les comptes clients externes en attente.</p>
            <div className={styles.tableWrapper}>
              {pendingClients.length > 0 ? (
                <table>
                  <thead><tr><th>Nom Complet</th><th>Email</th><th>Type</th><th>Actions</th></tr></thead>
                  <tbody>
                    {pendingClients.map(user => (
                      <tr key={user.id}>
                        <td>{user.prenom} {user.nom}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <button className={styles.buttonApprove} onClick={() => handleApprove(user.id)}>Valider</button>
                          <button className={styles.buttonDecline} onClick={() => handleDelete(user.id)}>Refuser</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Aucun compte client en attente de validation.</p>
              )}
            </div>
          </div>
        </section>

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

        <section id="reports" className={styles.section}>
          <h2 className={styles.sectionTitle}>Rapports et Indicateurs de Performance</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Voir Rapports Consolidés</h3>
              <p>Accéder aux rapports généraux et aux indicateurs clés de performance de l'ensemble du système.</p>
              <Link to="/admin/consolidated-reports" className={styles.button}>Voir Rapports</Link>
            </div>
            <div className={styles.card}>
              <h3>Tableau de Bord Global</h3>
              <p>Visualiser les KPIs en temps réel sous forme de graphiques.</p>
              <Link to="/admin/global-dashboard" className={styles.button}>Tableau de Bord Global</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
