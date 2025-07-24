// src/components/Dashboards/TransporteurDashboard/MainContent.jsx
import React from 'react'
import './MainContent.css' // Importez le fichier CSS spécifique pour MainContent
// Note: Ce composant utilise aussi des classes qui peuvent être définies globalement
// ou dans TransporteurDashboard.module.css (par exemple .section, .sectionTitle)
// Pour cet exemple, je garde le MainContent.css tel que vous l'avez indiqué.

const MainContent = () => {
  return (
    <>
      <h2 className='dashboard-overview-title'>Vue d'ensemble des missions</h2>

      <div className='summary-cards-grid'>
        <div className='summary-card'>
          <p className='summary-card-label'>Missions Assignées</p>
          <h3 className='summary-card-value missions-assigned'>5</h3>
        </div>
        <div className='summary-card'>
          <p className='summary-card-label'>Missions en Cours</p>
          <h3 className='summary-card-value missions-in-progress'>1</h3>
        </div>
        <div className='summary-card'>
          <p className='summary-card-label'>Livraisons Terminées</p>
          <h3 className='summary-card-value deliveries-completed'>12</h3>
        </div>
        <div className='summary-card'>
          <p className='summary-card-label'>Anomalies Signalées</p>
          <h3 className='summary-card-value anomalies-reported'>2</h3>
        </div>
      </div>

      <div className='history-section'>
        <h4 className='history-title'>Historique des Livraisons Récentes</h4>
        <p className='history-description'>
          Voici un aperçu de vos dernières activités de livraison.
        </p>

        <ul className='delivery-list'>
          <li className='delivery-item'>
            <div className='delivery-details'>
              <p className='delivery-title'>Mission #10123 - Client A</p>
              <p className='delivery-address'>
                Adresse: 123 Rue de la Livraision, Ville
              </p>
              <p className='delivery-status'>
                Statut: <span className='status-delivered'>Livrée</span> le
                20/07/2025 à 14h30
              </p>
            </div>
            <div className='delivery-actions'>
              <button className='btn btn-details'>Voir Détails</button>
            </div>
          </li>
          <li className='delivery-item'>
            <div className='delivery-details'>
              <p className='delivery-title'>Mission #10124 - Client B</p>
              <p className='delivery-address'>
                Adresse: 456 Avenue des Colis, Village
              </p>
              <p className='delivery-status'>
                Statut: <span className='status-in-progress'>En cours</span>{' '}
                (Départ 21/07/2025)
              </p>
            </div>
            <div className='delivery-actions'>
              <button className='btn btn-details'>Voir Détails</button>
              <button className='btn btn-update-status'>MàJ Statut</button>
              <button className='btn btn-report-anomaly'>
                Signaler Anomalie
              </button>
            </div>
          </li>
          <li className='delivery-item'>
            <div className='delivery-details'>
              <p className='delivery-title'>Mission #10125 - Client C</p>
              <p className='delivery-address'>
                Adresse: 789 Chemin des Bouteilles, Campagne
              </p>
              <p className='delivery-status'>
                Statut: <span className='status-anomaly'>Anomalie</span> (Client
                absent 20/07/2025)
              </p>
            </div>
            <div className='delivery-actions'>
              <button className='btn btn-details'>Voir Détails</button>
              <button className='btn btn-manage-anomaly'>Gérer Anomalie</button>
            </div>
          </li>
        </ul>
        <p className='section-footer-text'>
          Ceci est un aperçu. Pour voir toutes vos missions, utilisez la
          navigation "Mes Livraisons".
        </p>
      </div>
    </>
  )
}

export default MainContent
