// src/components/HeroSection.jsx
import React from 'react';
import styles from '../styles/HeroSection.module.css';
import Lottie from 'lottie-react'; // Importe le composant Lottie

// IMPORTE TON FICHIER JSON ICI
// Assure-toi que le chemin et le nom du fichier correspondent exactement à ton fichier téléchargé.
// Par exemple, si ton fichier est 'bouteille-gaz-animee.json', le nom de l'import sera 'bouteilleGazAnimeeData' (convention camelCase).
import gasFlowAnimationData from '../assets/animations/bouteille-gaz-animee.json'; // <--- MODIFIE CE CHEMIN/NOM SI NÉCESSAIRE

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Optimisez Votre Flux de Gaz. Gérez Votre Stock en Toute Simplicité.
        </h1>
        <p className={styles.heroSubtitle}>
          De la production à la livraison, <span className={styles.gazFlowHighlight}>gazFlow</span> assure une traçabilité complète et une gestion efficace de vos bouteilles de gaz.
        </p>
        <div className={styles.heroButtons}>
          <button className={`${styles.ctaButton} ${styles.primaryCta}`}>
            Découvrir les Fonctionnalités
          </button>
          <button className={`${styles.ctaButton} ${styles.secondaryCta}`}>
            Demander une Démo
          </button>
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        {/* Intègre le composant Lottie ici */}
        <Lottie
          animationData={gasFlowAnimationData} // Utilise les données de ton animation
          loop={true} // L'animation se répète en boucle
          autoplay={true} // L'animation démarre automatiquement
          className={styles.lottieAnimation} // Applique des styles via CSS module
        />
      </div>
    </section>
  );
}

export default HeroSection;