// src/components/Dashboards/ResponsableUniteProductionDashboard/EnregistrerProduction.jsx
import React, { useState } from 'react'
import enregistrerStyles from './EnregistrerProduction.module.css'
import { FaCheckCircle, FaCloudUploadAlt, FaSave } from 'react-icons/fa'

const EnregistrerProduction = () => {
  const [message, setMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage({
      type: 'success',
      text: 'Production enregistrée avec succès !',
    })
    // Simuler un envoi de données
  }

  return (
    <div className={enregistrerStyles.container}>
      <h2 className={enregistrerStyles.sectionTitle}>
        <FaCheckCircle /> Enregistrer une Production
      </h2>

      <p className={enregistrerStyles.introText}>
        Saisissez les informations des bouteilles de gaz produites aujourd'hui.
        Vous pouvez les entrer manuellement ou les importer.
      </p>

      {message && (
        <div
          className={`${enregistrerStyles.message} ${
            enregistrerStyles[message.type]
          }`}
        >
          {message.text}
        </div>
      )}

      <section className={enregistrerStyles.section}>
        <h3>Enregistrement Manuel</h3>
        <form className={enregistrerStyles.form} onSubmit={handleSubmit}>
          <div className={enregistrerStyles.formGroup}>
            <label htmlFor='typeBouteille'>Type de Bouteille :</label>
            <select id='typeBouteille' className={enregistrerStyles.select}>
              <option value='12kg'>12kg</option>
              <option value='6kg'>6kg</option>
              <option value='5kg'>5kg</option>
            </select>
          </div>
          <div className={enregistrerStyles.formGroup}>
            <label htmlFor='quantite'>Quantité produite :</label>
            <input
              type='number'
              id='quantite'
              className={enregistrerStyles.input}
              placeholder='Entrer la quantité'
            />
          </div>
          <button type='submit' className={enregistrerStyles.submitButton}>
            <FaSave /> Enregistrer
          </button>
        </form>
      </section>

      <section className={enregistrerStyles.section}>
        <h3>Importer des Bouteilles</h3>
        <div className={enregistrerStyles.importCard}>
          <FaCloudUploadAlt className={enregistrerStyles.importIcon} />
          <p>
            Importez un fichier CSV ou Excel contenant les numéros de série et
            les types des bouteilles.
            <br />
            Cette fonctionnalité est simulée en attendant la connexion au
            backend.
          </p>
          <button className={enregistrerStyles.importButton}>
            Choisir un fichier...
          </button>
          <span className={enregistrerStyles.fileName}>
            Aucun fichier sélectionné
          </span>
        </div>
      </section>
    </div>
  )
}

export default EnregistrerProduction
