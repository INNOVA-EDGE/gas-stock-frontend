// src/components/Dashboards/ResponsableUniteProductionDashboard/DeclarerIncident.jsx
import React, { useState } from 'react'
import incidentStyles from './DeclarerIncident.module.css'
import { FaExclamationTriangle, FaBug } from 'react-icons/fa'

const DeclarerIncident = () => {
  const [message, setMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage({
      type: 'success',
      text: 'Incident déclaré avec succès ! Le service de maintenance a été notifié.',
    })
    // Simuler un envoi de données
  }

  return (
    <div className={incidentStyles.container}>
      <h2 className={incidentStyles.sectionTitle}>
        <FaExclamationTriangle /> Déclarer un Incident
      </h2>

      <p className={incidentStyles.introText}>
        Utilisez ce formulaire pour signaler une panne, une bouteille
        défectueuse ou toute autre anomalie.
      </p>

      {message && (
        <div
          className={`${incidentStyles.message} ${
            incidentStyles[message.type]
          }`}
        >
          {message.text}
        </div>
      )}

      <section className={incidentStyles.section}>
        <form className={incidentStyles.form} onSubmit={handleSubmit}>
          <div className={incidentStyles.formGroup}>
            <label htmlFor='typeIncident'>Type d'Incident :</label>
            <select id='typeIncident' className={incidentStyles.select}>
              <option value='panne'>Panne Machine</option>
              <option value='defautBouteille'>Bouteille Défectueuse</option>
              <option value='autre'>Autre</option>
            </select>
          </div>
          <div className={incidentStyles.formGroup}>
            <label htmlFor='description'>Description détaillée :</label>
            <textarea
              id='description'
              className={incidentStyles.textarea}
              rows='5'
              placeholder="Décrivez l'incident, la machine concernée, le nombre de bouteilles défectueuses, etc."
            ></textarea>
          </div>
          <div className={incidentStyles.formGroup}>
            <label htmlFor='quantite'>
              Quantité de bouteilles concernées (si applicable) :
            </label>
            <input
              type='number'
              id='quantite'
              className={incidentStyles.input}
              placeholder='0'
            />
          </div>
          <button type='submit' className={incidentStyles.submitButton}>
            <FaBug /> Déclarer l'incident
          </button>
        </form>
      </section>
    </div>
  )
}

export default DeclarerIncident
