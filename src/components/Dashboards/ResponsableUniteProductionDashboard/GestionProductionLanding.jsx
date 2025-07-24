// src/components/Dashboards/ResponsableUniteProductionDashboard/GestionProductionLanding.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import landingStyles from './GestionProductionLanding.module.css'
import {
  FaPlayCircle,
  FaCheckCircle,
  FaExclamationTriangle,
} from 'react-icons/fa'

const GestionProductionLanding = () => {
  return (
    <div className={landingStyles.container}>
      <div className={landingStyles.heroSection}>
        <div className={landingStyles.heroText}>
          <h1 className={landingStyles.welcomeMessage}>
            Gestion de l'Unité de Production
          </h1>
          <p className={landingStyles.heroSubtitle}>
            Planifiez, suivez et optimisez le processus de production au
            quotidien.
          </p>
        </div>
        <div className={landingStyles.heroImageContainer}>
          <img
            src='/src/assets/images/tof8.jpg'
            alt='Usine de production'
            className={landingStyles.heroImage}
          />
        </div>
      </div>

      <div className={landingStyles.featuresGrid}>
        <NavLink to='planifier' className={landingStyles.featureCard}>
          <FaPlayCircle className={landingStyles.cardIcon} />
          <h3 className={landingStyles.cardTitle}>Planifier une Production</h3>
          <p className={landingStyles.cardDescription}>
            Définir les objectifs et les types de bouteilles pour la journée.
          </p>
        </NavLink>
        <NavLink to='enregistrer' className={landingStyles.featureCard}>
          <FaCheckCircle className={landingStyles.cardIcon} />
          <h3 className={landingStyles.cardTitle}>
            Enregistrer une Production
          </h3>
          <p className={landingStyles.cardDescription}>
            Saisir les quantités produites et les références des bouteilles.
          </p>
        </NavLink>
        <NavLink to='declarer-incident' className={landingStyles.featureCard}>
          <FaExclamationTriangle className={landingStyles.cardIcon} />
          <h3 className={landingStyles.cardTitle}>Déclarer un Incident</h3>
          <p className={landingStyles.cardDescription}>
            Notifier les pannes, anomalies ou bouteilles défectueuses.
          </p>
        </NavLink>
      </div>
    </div>
  )
}

export default GestionProductionLanding
