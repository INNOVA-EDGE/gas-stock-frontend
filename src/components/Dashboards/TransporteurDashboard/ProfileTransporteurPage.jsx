// src/components/Dashboards/TransporteurDashboard/ProfileTransporteurPage.jsx
import React from 'react'
import styles from './TransporteurDashboard.module.css'

const ProfileTransporteurPage = () => {
  return (
    <section id='profil-personnel' className={styles.section}>
      <h2 className={styles.sectionTitle}>Mon Profil Transporteur</h2>
      <p>
        Mettez à jour vos informations personnelles et les détails de votre
        véhicule ici.
      </p>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>Informations Personnelles</h3>
          <p>
            <strong>Nom Complet :</strong> Jean DUPONT
          </p>
          <p>
            <strong>Email :</strong> jean.dupont@gazflow.com
          </p>
          <p>
            <strong>Téléphone :</strong> +237 6XX XX XX XX
          </p>
          <p>
            <strong>Adresse :</strong> 10 Rue des Livraisons, Yaoundé
          </p>
          <button className={styles.button}>Modifier Informations</button>
        </div>

        <div className={styles.card}>
          <h3>Détails du Véhicule</h3>
          <p>
            <strong>Type de Véhicule :</strong> Camionnette
          </p>
          <p>
            <strong>Immatriculation :</strong> CE-123-FG
          </p>
          <p>
            <strong>Capacité :</strong> 30 bouteilles
          </p>
          <p>
            <strong>Marque/Modèle :</strong> Renault Master
          </p>
          <button className={styles.button}>Modifier Véhicule</button>
        </div>

        <div className={styles.card}>
          <h3>Coordonnées Bancaires</h3>
          <p>
            <strong>Banque :</strong> BGF Bank
          </p>
          <p>
            <strong>Numéro de Compte :</strong> XXXXXXXXXX
          </p>
          <p>
            <strong>Titulaire :</strong> Jean Dupont
          </p>
          <button className={styles.button}>Gérer Coordonnées</button>
        </div>
      </div>
    </section>
  )
}

export default ProfileTransporteurPage
