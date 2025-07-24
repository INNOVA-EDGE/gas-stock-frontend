// src/components/Dashboards/TransporteurDashboard/MesLivraisonsPage.jsx
import React from 'react'
// Importez les styles du dashboard pour la cohérence
import styles from './TransporteurDashboard.module.css'

const MesLivraisonsPage = () => {
  return (
    <section id='mes-livraisons-details' className={styles.section}>
      <h2 className={styles.sectionTitle}>
        Mes Missions de Livraison Détaillées
      </h2>
      <p>
        Ici, vous trouverez la liste complète de toutes vos missions de
        livraison, leur statut actuel, les détails des clients et les options de
        gestion.
      </p>

      <div className={styles.cardContainer}>
        {/* Exemple de carte pour une mission */}
        <div className={styles.card}>
          <h3>Mission #20250724-001</h3>
          <p>Client : SARL Gaz Confort</p>
          <p>Adresse : 123, Rue des Gaziers, Ville, Pays</p>
          <p>
            Statut :{' '}
            <span style={{ color: '#ffc107', fontWeight: 'bold' }}>
              En Cours
            </span>
          </p>
          <p>Date prévue : 24/07/2025</p>
          <button className={styles.button}>Voir Détails</button>
          <button
            className={styles.button}
            style={{ marginLeft: '10px', backgroundColor: '#28a745' }}
          >
            Confirmer Livraison
          </button>
        </div>

        <div className={styles.card}>
          <h3>Mission #20250723-005</h3>
          <p>Client : Distrib Gaz Express</p>
          <p>Adresse : 45, Av. du Carburant, AutreVille, Pays</p>
          <p>
            Statut :{' '}
            <span style={{ color: '#007bff', fontWeight: 'bold' }}>
              Assignée
            </span>
          </p>
          <p>Date prévue : 25/07/2025</p>
          <button className={styles.button}>Voir Détails</button>
        </div>

        <div className={styles.card}>
          <h3>Mission #20250722-010</h3>
          <p>Client : Particulier M. Dubois</p>
          <p>Adresse : 789, Imp. des Flacons, Village, Pays</p>
          <p>
            Statut :{' '}
            <span style={{ color: '#28a745', fontWeight: 'bold' }}>Livrée</span>
          </p>
          <p>Date réelle : 22/07/2025</p>
          <button className={styles.button}>Voir Facture</button>
        </div>
      </div>

      {/* Vous pouvez ajouter une pagination ou des filtres ici */}
    </section>
  )
}

export default MesLivraisonsPage
