// src/components/Dashboards/ResponsableUniteProductionDashboard/GestionStocks.jsx
import React from 'react'
import gestionStocksStyles from './GestionStocks.module.css'
import { FaBoxes, FaHistory } from 'react-icons/fa'

const GestionStocks = () => {
  // Données de démo pour le tableau
  const stockMovements = [
    {
      id: 1,
      date: '2025-07-23',
      type: 'Entrée',
      produit: 'Bouteille 12kg',
      quantite: 500,
      reference: 'EXP-1234',
    },
    {
      id: 2,
      date: '2025-07-23',
      type: 'Sortie',
      produit: 'Bouteille 6kg',
      quantite: 200,
      reference: 'LIV-5678',
    },
    {
      id: 3,
      date: '2025-07-22',
      type: 'Entrée',
      produit: 'Bouteille 12kg',
      quantite: 1000,
      reference: 'EXP-1233',
    },
  ]

  return (
    <div className={gestionStocksStyles.container}>
      <section className={gestionStocksStyles.section}>
        <h2 className={gestionStocksStyles.sectionTitle}>
          <FaBoxes /> État des Stocks
        </h2>
        <div className={gestionStocksStyles.stockContainer}>
          <div className={gestionStocksStyles.stockCard}>
            <h3>Bouteilles Brutes</h3>
            <p className={gestionStocksStyles.stockCount}>2500</p>
            <span>unités disponibles</span>
          </div>
          <div className={gestionStocksStyles.stockCard}>
            <h3>Bouteilles Remplies</h3>
            <p className={gestionStocksStyles.stockCount}>1500</p>
            <span>unités prêtes</span>
          </div>
        </div>
      </section>

      <section className={gestionStocksStyles.section}>
        <h2 className={gestionStocksStyles.sectionTitle}>
          <FaHistory /> Historique des Mouvements
        </h2>
        <div className={gestionStocksStyles.tableContainer}>
          <table className={gestionStocksStyles.dataTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Type</th>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Référence</th>
              </tr>
            </thead>
            <tbody>
              {stockMovements.map((mouvement) => (
                <tr key={mouvement.id}>
                  <td>{mouvement.id}</td>
                  <td>{mouvement.date}</td>
                  <td>{mouvement.type}</td>
                  <td>{mouvement.produit}</td>
                  <td>{mouvement.quantite}</td>
                  <td>{mouvement.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default GestionStocks
