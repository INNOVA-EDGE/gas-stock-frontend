// src/components/Dashboards/ResponsableUniteProductionDashboard/RapportsProduction.jsx
import React from 'react'
import rapportsStyles from './RapportsProduction.module.css'
import { FaDownload, FaChartPie, FaFilePdf } from 'react-icons/fa'

const RapportsProduction = () => {
  return (
    <div className={rapportsStyles.container}>
      <section className={rapportsStyles.section}>
        <h2 className={rapportsStyles.sectionTitle}>Rapports de Production</h2>
        <div className={rapportsStyles.cardContainer}>
          <div className={rapportsStyles.card}>
            <h3>Rapport Journalier</h3>
            <p>
              Synthèse des activités de production pour la journée en cours.
            </p>
            <button className={rapportsStyles.button}>
              <FaDownload /> Générer Rapport
            </button>
          </div>
          <div className={rapportsStyles.card}>
            <h3>Rapport de Performance</h3>
            <p>Analyse des indicateurs clés sur une période donnée.</p>
            <button className={rapportsStyles.button}>
              <FaChartPie /> Rapport Performance
            </button>
          </div>
        </div>
      </section>

      <div className={`${rapportsStyles.section} ${rapportsStyles.pdfSection}`}>
        <h2 className={rapportsStyles.sectionTitle}>
          Générer des documents PDF
        </h2>
        <p className={rapportsStyles.pdfDescription}>
          Vous pouvez créer un document PDF à partir de vos rapports.
        </p>
        <div className={rapportsStyles.pdfActionCard}>
          <FaFilePdf className={rapportsStyles.pdfIcon} />
          <p>Générer un PDF consolidé de votre rapport journalier.</p>
          <button className={rapportsStyles.pdfButton}>
            Générer Rapport PDF
          </button>
        </div>
        <p className={rapportsStyles.pdfNote}>
          Note : Pour des raisons techniques (limitation de l'outil), cette
          fonctionnalité est simulée et ne génère pas de fichier réel.
        </p>
      </div>
    </div>
  )
}

export default RapportsProduction
