// src/components/Dashboards/ResponsableUniteProductionDashboard/AccueilDashboard.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import accueilStyles from './AccueilDashboard.module.css'
import {
  FaBoxes,
  FaClipboardList,
  FaTruckLoading,
  FaChartBar,
} from 'react-icons/fa'
import tof7image from '/src/assets/images/tof7.jpg'

const AccueilDashboard = () => {
  return (
    <div className={accueilStyles.container}>
      <div className={accueilStyles.heroSection}>
        <div className={accueilStyles.heroText}>
          <h1 className={accueilStyles.welcomeMessage}>
            Bienvenue sur votre tableau de bord, Responsable !
          </h1>
          <p className={accueilStyles.heroSubtitle}>
            Gérez votre unité de production avec efficacité et précision.
          </p>
        </div>
        <div className={accueilStyles.heroImageContainer}>
          <img
            src='/src/assets/images/tof7.jpg'
            alt='Usine de production de gaz'
            className={accueilStyles.heroImage}
          />
        </div>
      </div>

      <div className={accueilStyles.featuresGrid}>
        <NavLink to='gestion-production' className={accueilStyles.featureCard}>
          <FaClipboardList className={accueilStyles.cardIcon} />
          <h3 className={accueilStyles.cardTitle}>Gestion de la Production</h3>
          <p className={accueilStyles.cardDescription}>
            Planifiez et enregistrez la production quotidienne de bouteilles de
            gaz.
          </p>
        </NavLink>
        <NavLink to='gestion-stocks' className={accueilStyles.featureCard}>
          <FaBoxes className={accueilStyles.cardIcon} />
          <h3 className={accueilStyles.cardTitle}>Gestion des Stocks</h3>
          <p className={accueilStyles.cardDescription}>
            Visualisez les stocks de bouteilles brutes et remplies en temps
            réel.
          </p>
        </NavLink>
        <NavLink to='expedition' className={accueilStyles.featureCard}>
          <FaTruckLoading className={accueilStyles.cardIcon} />
          <h3 className={accueilStyles.cardTitle}>Expédition Bouteilles</h3>
          <p className={accueilStyles.cardDescription}>
            Enregistrez et suivez les expéditions vers les entrepôts et agences.
          </p>
        </NavLink>
        <NavLink to='rapports-production' className={accueilStyles.featureCard}>
          <FaChartBar className={accueilStyles.cardIcon} />
          <h3 className={accueilStyles.cardTitle}>Rapports de Production</h3>
          <p className={accueilStyles.cardDescription}>
            Accédez aux rapports et analysez les performances de votre unité.
          </p>
        </NavLink>
      </div>
    </div>
  )
}

export default AccueilDashboard
