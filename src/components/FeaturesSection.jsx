// src/components/FeaturesSection.jsx
import React from 'react';
import styles from '../styles/FeaturesSection.module.css';

// Pour les icônes, nous pouvons utiliser une bibliothèque comme React Icons.
// Si tu ne l'as pas encore installée : npm install react-icons
// Je vais utiliser des icônes génériques pour l'exemple.
// Tu peux choisir des icônes spécifiques à tes fonctionnalités sur https://react-icons.github.io/react-icons/
// Par exemple, pour les icônes de matériaux design (md): import { MdOutlineInventory, MdOutlineTrackChanges, MdOutlineBarChart } from 'react-icons/md';
// Pour l'instant, utilisons des placeholders simples.

const features = [
  {
    icon: '📊', // Placeholder icône: Tableau de bord
    title: 'Suivi de Stock en Temps Réel',
    description: 'Visualisez l\'état de vos bouteilles de gaz à travers tous vos entrepôts et agences, en direct. Ne manquez jamais de stock et optimisez vos réapprovisionnements.'
  },
  {
    icon: '📍', // Placeholder icône: Localisation / Traçabilité
    title: 'Traçabilité Complète des Flux',
    description: 'De l\'unité de production au client final, chaque mouvement de bouteille est enregistré. Identifiez les goulots d\'étranglement et améliorez votre chaîne logistique.'
  },
  {
    icon: '✅', // Placeholder icône: Validation / Conformité
    title: 'Gestion des Ventes et Crédits',
    description: 'Enregistrez les ventes aux revendeurs et ménages, gérez les livraisons à crédit et suivez les versements. Assurez une cohérence comptable parfaite.'
  },
  {
    icon: '🚚', // Placeholder icône: Livraison
    title: 'Optimisation des Livraisons',
    description: 'Évaluez la performance de vos transporteurs, suivez les retards et les retours. Améliorez l\'efficacité de vos opérations de livraison.'
  },
  {
    icon: '📈', // Placeholder icône: Rapports
    title: 'Rapports et KPIs Consolidés',
    description: 'Accédez à des tableaux de bord intuitifs et des indicateurs clés de performance pour piloter l\'activité et prendre des décisions éclairées.'
  },
  {
    icon: '👥', // Placeholder icône: Utilisateurs
    title: 'Gestion des Rôles Utilisateurs',
    description: 'Attribuez des droits d\'accès spécifiques aux administrateurs, responsables d\'entrepôt, transporteurs et clients pour une sécurité optimale.'
  }
];

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Des Fonctionnalités Puissantes pour une Gestion Simplifiée</h2>
      <p className={styles.sectionSubtitle}>
        `gazFlow` vous équipe des outils nécessaires pour maîtriser chaque aspect de votre chaîne logistique de gaz.
      </p>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;