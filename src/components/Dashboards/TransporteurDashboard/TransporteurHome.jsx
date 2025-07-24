// src/components/Dashboards/TransporteurDashboard/TransporteurHome.jsx
import React from 'react'
import MainContent from './MainContent' // Importez votre composant MainContent

const TransporteurHome = () => {
  return (
    <div>
      {/* Ce composant sert de point d'entrée pour la page d'accueil du tableau de bord transporteur.
          Il rendra votre composant MainContent qui contient la vue d'ensemble. */}
      <MainContent />
    </div>
  )
}

export default TransporteurHome
