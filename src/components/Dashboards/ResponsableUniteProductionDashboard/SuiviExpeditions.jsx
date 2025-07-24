// src/components/Dashboards/ResponsableUniteProductionDashboard/SuiviExpeditions.jsx
import React from 'react'
import suiviStyles from './SuiviExpeditions.module.css'
import { FaRoute, FaSearch } from 'react-icons/fa'

const SuiviExpeditions = () => {
  // Données de démo pour le tableau
  const expeditions = [
    {
      id: 1,
      date: '2025-07-23',
      destination: 'Agence A',
      transporteur: 'Transport Express',
      statut: 'En cours',
      quantite: 500,
      reference: 'EXP-1234',
    },
    {
      id: 2,
      date: '2025-07-22',
      destination: 'Agence B',
      transporteur: 'Rapid Truck',
      statut: 'Livré',
      quantite: 200,
      reference: 'LIV-5678',
    },
    {
      id: 3,
      date: '2025-07-21',
      destination: 'Entrepôt central',
      transporteur: 'Logistique Pro',
      statut: 'Livré',
      quantite: 1000,
      reference: 'EXP-1233',
    },
  ]

  return (
    <div className={suiviStyles.container}>
      <section className={suiviStyles.section}>
        <h2 className={suiviStyles.sectionTitle}>
          <FaRoute /> Suivi des Expéditions
        </h2>
        <div className={suiviStyles.filterContainer}>
          <div className={suiviStyles.searchBox}>
            <FaSearch className={suiviStyles.searchIcon} />
            <input
              type='text'
              placeholder='Rechercher par référence, transporteur...'
              className={suiviStyles.searchInput}
            />
          </div>
          <select className={suiviStyles.filterSelect}>
            <option>Tous les statuts</option>
            <option>En cours</option>
            <option>Livré</option>
            <option>Annulé</option>
          </select>
        </div>
        <div className={suiviStyles.tableContainer}>
          <table className={suiviStyles.dataTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Destination</th>
                <th>Transporteur</th>
                <th>Quantité</th>
                <th>Référence</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {expeditions.map((expedition) => (
                <tr key={expedition.id}>
                  <td>{expedition.date}</td>
                  <td>{expedition.destination}</td>
                  <td>{expedition.transporteur}</td>
                  <td>{expedition.quantite}</td>
                  <td>{expedition.reference}</td>
                  <td>{expedition.statut}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default SuiviExpeditions
