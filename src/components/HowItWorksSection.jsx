// src/components/HowItWorksSection.jsx
import React from 'react';
import styles from '../styles/HowItWorksSection.module.css';

// Pour les icônes, toujours l'idée de React Icons (npm install react-icons)
// Exemples : import { FaUserPlus, FaBoxOpen, FaTruckLoading, FaChartLine } from 'react-icons/fa';
// Utilisons des placeholders pour le moment.

const steps = [
  {
    icon: '👤', // Icône: Création de compte
    title: '1. Créez votre Compte',
    description: 'Inscrivez-vous et configurez votre rôle (Administrateur, Responsable d\'Entrepôt, Transporteur, etc.) pour accéder aux fonctionnalités personnalisées de `gazFlow`.'
  },
  {
    icon: '📦', // Icône: Gestion de stock
    title: '2. Gérez votre Stock',
    description: 'Enregistrez les entrées et sorties de bouteilles, suivez les niveaux de stock en temps réel et préparez les expéditions en toute simplicité.'
  },
  {
    icon: '🚚', // Icône: Livraison
    title: '3. Optimisez les Livraisons',
    description: 'Assignez des missions aux transporteurs, suivez l\'état des livraisons en direct et assurez une distribution fluide et rapide.'
  },
  {
    icon: '📈', // Icône: Rapports et analyses
    title: '4. Analysez vos Performances',
    description: 'Accédez à des tableaux de bord intuitifs, générez des rapports détaillés sur les ventes, les stocks et les livraisons pour prendre des décisions éclairées.'
  }
];

function HowItWorksSection() {
  return (
    <section className={styles.howItWorksSection} id = "how-it-works">
      <h2 className={styles.sectionTitle}>Comment `gazFlow` Simplifie Votre Gestion ?</h2>
      <p className={styles.sectionSubtitle}>
        Suivez ces étapes simples pour transformer votre gestion de stock et de flux de gaz.
      </p>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.stepIcon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksSection;