// src/components/Dashboards/TransporteurDashboard/HistoriqueTransporteurPage.jsx
import React from 'react'
import styles from './TransporteurDashboard.module.css'

const HistoriqueTransporteurPage = () => {
  return (
    <section id='historique-complet' className={styles.section}>
      <h2 className={styles.sectionTitle}>
        Historique Complet de Mes Activités
      </h2>
      <p>
        Cette page récapitule toutes vos missions passées, qu'elles aient été
        livrées, annulées ou qu'elles aient rencontré des anomalies.
      </p>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>Mission #20250720-003</h3>
          <p>Client : Agence Centre</p>
          <p>
            Statut :{' '}
            <span style={{ color: '#28a745', fontWeight: 'bold' }}>Livrée</span>
          </p>
          <p>Date : 20/07/2025</p>
          <button className={styles.button}>Rapport de Mission</button>
        </div>

        <div className={styles.card}>
          <h3>Mission #20250718-002</h3>
          <p>Client : Société BTP Alpha</p>
          <p>
            Statut :{' '}
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
              Anomalie (Client absent)
            </span>
          </p>
          <p>Date : 18/07/2025</p>
          <button className={styles.button}>Détails Anomalie</button>
        </div>

        <div className={styles.card}>
          <h3>Mission #20250715-001</h3>
          <p>Client : Particulier Mme Diallo</p>
          <p>
            Statut :{' '}
            <span style={{ color: '#28a745', fontWeight: 'bold' }}>Livrée</span>
          </p>
          <p>Date : 15/07/2025</p>
          <button className={styles.button}>Voir Reçu</button>
        </div>
      </div>

      {/* Possibilité d'ajouter des filtres par date, statut, etc. */}
    </section>
  )
}

export default HistoriqueTransporteurPage
