// src/components/UserRolesSection.jsx
import React from 'react';
import styles from '../styles/UserRolesSection.module.css';

// Pour les icônes, toujours l'idée de React Icons (npm install react-icons)
// Exemples : import { FaUserCog, FaWarehouse, FaStore, FaTruck, FaChartLine, FaUsers } from 'react-icons/fa';
// Utilisons des placeholders pour le moment.

const userRoles = [
  {
    icon: '⚙️', // Icône: Engrenage / Administration
    title: 'Administrateurs',
    description: 'Créez et gérez les comptes utilisateurs, attribuez des rôles et des permissions, et supervisez l\'ensemble du système pour un contrôle total.'
  },
  {
    icon: '📦', // Icône: Entrepôt
    title: 'Responsables d\'Entrepôt',
    description: 'Gérez le stock de bouteilles, enregistrez les entrées et sorties, et planifiez les expéditions vers les agences et les clients directs.'
  },
  {
    icon: '🏪', // Icône: Magasin / Agence
    title: 'Responsables d\'Agence',
    description: 'Suivez les flux de stock de votre agence, gérez les ventes aux ménages et revendeurs, et assurez le suivi des versements.'
  },
  {
    icon: '🚚', // Icône: Camion / Transporteur
    title: 'Transporteurs',
    description: 'Recevez vos missions de livraison, mettez à jour les statuts en temps réel, et suivez vos colis avec une interface mobile intuitive.'
  },
  {
    icon: '📊', // Icône: Tableau de bord / Contrôle
    title: 'Responsables Suivi & Contrôle',
    description: 'Accédez à des rapports consolidés, analysez les performances de livraison et des ventes, et assurez la cohérence comptable de toute la chaîne.'
  },
  {
    icon: '🤝', // Icône: Poignée de main / Clients
    title: 'Clients (Revendeurs & Ménages)',
    description: 'Passez vos commandes, suivez vos livraisons, consultez votre historique d\'achats et gérez vos crédits en toute simplicité.'
  }
];

function UserRolesSection() {
  return (
    <section className={styles.userRolesSection}>
      <h2 className={styles.sectionTitle}>Qui Utilise `gazFlow` ? Des Solutions Adaptées à Chaque Rôle.</h2>
      <p className={styles.sectionSubtitle}>
        Que vous soyez un administrateur, un responsable de stock ou un transporteur, `gazFlow` simplifie vos tâches quotidiennes et optimise votre productivité.
      </p>
      <div className={styles.rolesGrid}>
        {userRoles.map((role, index) => (
          <div key={index} className={styles.roleCard}>
            <div className={styles.roleIcon}>{role.icon}</div>
            <h3 className={styles.roleTitle}>{role.title}</h3>
            <p className={styles.roleDescription}>{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserRolesSection;