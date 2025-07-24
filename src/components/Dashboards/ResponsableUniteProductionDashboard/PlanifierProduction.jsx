// src/components/Dashboards/ResponsableUniteProductionDashboard/PlanifierProduction.jsx
import React, { useState } from 'react'
import planifierStyles from './PlanifierProduction.module.css'
import { FaPlayCircle, FaCalendarPlus } from 'react-icons/fa'

const PlanifierProduction = () => {
  const [message, setMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage({
      type: 'success',
      text: 'Planification de production enregistrée avec succès !',
    })
    // Simuler un envoi de données
  }

  return (
    <div className={planifierStyles.container}>
      <h2 className={planifierStyles.sectionTitle}>
        <FaPlayCircle /> Planifier une Production
      </h2>

      <p className={planifierStyles.introText}>
        Définissez les objectifs de production pour la période à venir.
      </p>

      {message && (
        <div
          className={`${planifierStyles.message} ${
            planifierStyles[message.type]
          }`}
        >
          {message.text}
        </div>
      )}

      <section className={planifierStyles.section}>
        <form className={planifierStyles.form} onSubmit={handleSubmit}>
          <div className={planifierStyles.formGroup}>
            <label htmlFor='periode'>Période :</label>
            <select id='periode' className={planifierStyles.select}>
              <option value='journaliere'>Journalière</option>
              <option value='hebdomadaire'>Hebdomadaire</option>
            </select>
          </div>
          <div className={planifierStyles.formGroup}>
            <label htmlFor='typeBouteille'>Type de Bouteille :</label>
            <select id='typeBouteille' className={planifierStyles.select}>
              <option value='12kg'>12kg</option>
              <option value='6kg'>6kg</option>
              <option value='5kg'>5kg</option>
            </select>
          </div>
          <div className={planifierStyles.formGroup}>
            <label htmlFor='objectif'>Objectif (quantité) :</label>
            <input
              type='number'
              id='objectif'
              className={planifierStyles.input}
              placeholder='Entrer la quantité en unités'
            />
          </div>
          <button type='submit' className={planifierStyles.submitButton}>
            <FaCalendarPlus /> Planifier
          </button>
        </form>
      </section>
    </div>
  )
}

export default PlanifierProduction
