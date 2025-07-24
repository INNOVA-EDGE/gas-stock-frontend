// src/components/Dashboards/ResponsableUniteProductionDashboard/ExpeditionBouteilles.jsx
import React, { useState } from 'react'
import expeditionStyles from './ExpeditionBouteilles.module.css'
import { FaTruckLoading } from 'react-icons/fa'

const ExpeditionBouteilles = () => {
  const [message, setMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage({
      type: 'success',
      text: 'Expédition enregistrée avec succès !',
    })
    // Simuler un envoi de données
  }

  return (
    <div className={expeditionStyles.container}>
      <section className={expeditionStyles.section}>
        <h2 className={expeditionStyles.sectionTitle}>
          <FaTruckLoading /> Enregistrer une Expédition
        </h2>
        <div className={expeditionStyles.formContainer}>
          <p className={expeditionStyles.formDescription}>
            Saisir les détails des chargements de bouteilles vers les
            destinations.
          </p>

          {message && (
            <div
              className={`${expeditionStyles.message} ${
                expeditionStyles[message.type]
              }`}
            >
              {message.text}
            </div>
          )}

          <form className={expeditionStyles.form} onSubmit={handleSubmit}>
            <div className={expeditionStyles.formGroup}>
              <label htmlFor='destination'>Destination :</label>
              <input
                type='text'
                id='destination'
                className={expeditionStyles.input}
                placeholder='Agence, Entrepôt, etc.'
              />
            </div>
            <div className={expeditionStyles.formGroup}>
              <label htmlFor='transporteur'>Transporteur :</label>
              <input
                type='text'
                id='transporteur'
                className={expeditionStyles.input}
                placeholder='Nom du transporteur'
              />
            </div>
            <div className={expeditionStyles.formGroup}>
              <label htmlFor='quantiteExp'>Quantité :</label>
              <input
                type='number'
                id='quantiteExp'
                className={expeditionStyles.input}
                placeholder='Quantité de bouteilles'
              />
            </div>
            <button type='submit' className={expeditionStyles.submitButton}>
              Enregistrer Expédition
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ExpeditionBouteilles
