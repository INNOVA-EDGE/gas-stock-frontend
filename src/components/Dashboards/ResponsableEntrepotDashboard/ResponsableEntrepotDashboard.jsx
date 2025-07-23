import React, { useState } from 'react';
import Styles from './ResponsableEntrepotDashboard.module.css';

const ResponsableEntrepotDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('stock');

  // Données d'exemple pour le Cameroun
  const stockData = [
    {
      id: '1',
      type: 'Bouteille 6kg',
      capacity: '6kg',
      quantity: 450,
      minStock: 100,
      price: 3500,
      lastUpdated: '2024-01-23',
    },
    {
      id: '2',
      type: 'Bouteille 12.5kg',
      capacity: '12.5kg',
      quantity: 320,
      minStock: 80,
      price: 6500,
      lastUpdated: '2024-01-23',
    },
    {
      id: '3',
      type: 'Bouteille 35kg',
      capacity: '35kg',
      quantity: 85,
      minStock: 50,
      price: 18000,
      lastUpdated: '2024-01-23',
    },
    {
      id: '4',
      type: 'Bouteille 50kg',
      capacity: '50kg',
      quantity: 25,
      minStock: 30,
      price: 25000,
      lastUpdated: '2024-01-22',
    },
  ];

  const recentTransactions = [
    {
      id: 'T001',
      type: 'sortie',
      destination: 'Agence Douala Centre',
      bottles: [
        { type: '6kg', quantity: 50 },
        { type: '12.5kg', quantity: 30 },
      ],
      date: '2024-01-23',
      status: 'terminé',
      amount: 370000,
    },
    {
      id: 'T002',
      type: 'entrée',
      bottles: [{ type: '35kg', quantity: 20 }],
      date: '2024-01-23',
      status: 'terminé',
      amount: 360000,
    },
    {
      id: 'T003',
      type: 'sortie',
      destination: 'Client Direct - Yaoundé',
      bottles: [{ type: '12.5kg', quantity: 15 }],
      date: '2024-01-22',
      status: 'en_cours',
      amount: 97500,
    },
    {
      id: 'T004',
      type: 'sortie',
      destination: 'Agence Bafoussam',
      bottles: [
        { type: '6kg', quantity: 25 },
        { type: '35kg', quantity: 10 },
      ],
      date: '2024-01-22',
      status: 'en_attente',
      amount: 267500,
    },
  ];

  const agencies = [
    {
      id: 'A001',
      name: 'Agence Douala Centre',
      location: 'Akwa, Douala',
      manager: 'Jean Mballa',
      phone: '+237 677 123 456',
      lastOrder: '2024-01-23',
      status: 'actif',
    },
    {
      id: 'A002',
      name: 'Agence Yaoundé Mfoundi',
      location: 'Centre-ville, Yaoundé',
      manager: 'Marie Ngo',
      phone: '+237 699 234 567',
      lastOrder: '2024-01-22',
      status: 'actif',
    },
    {
      id: 'A003',
      name: 'Agence Bafoussam',
      location: 'Marché A, Bafoussam',
      manager: 'Paul Kamga',
      phone: '+237 655 345 678',
      lastOrder: '2024-01-20',
      status: 'actif',
    },
    {
      id: 'A004',
      name: 'Agence Garoua',
      location: 'Quartier Plateau, Garoua',
      manager: 'Amadou Bello',
      phone: '+237 677 456 789',
      lastOrder: '2024-01-18',
      status: 'inactif',
    },
    {
      id: 'A005',
      name: 'Agence Bamenda',
      location: 'Commercial Avenue, Bamenda',
      manager: 'Grace Fon',
      phone: '+237 682 567 890',
      lastOrder: '2024-01-21',
      status: 'actif',
    },
  ];

  const totalStock = stockData.reduce((sum, item) => sum + item.quantity, 0);
  const lowStockItems = stockData.filter((item) => item.quantity <= item.minStock);
  const totalValue = stockData.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const getStatusColor = (status) => {
    switch (status) {
      case 'terminé':
        return 'status-completed';
      case 'en_cours':
        return 'status-in-progress';
      case 'en_attente':
        return 'status-pending';
      case 'actif':
        return 'status-active';
      case 'inactif':
        return 'status-inactive';
      default:
        return 'status-default';
    }
  };

  const handleNewTransaction = () => {
    alert('Fonctionnalité à implémenter : Nouvelle Transaction');
  };

  const handleViewDetails = (id) => {
    alert(`Voir détails pour l'item ${id}`);
  };

  const handleEditItem = (id) => {
    alert(`Modifier l'item ${id}`);
  };

  const filteredStock = stockData.filter((item) =>
    item.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="warehouse-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-info">
            <h1>Dashboard Entrepôt</h1>
            <p>Gestion des stocks de bouteilles de gaz - gazFlow</p>
          </div>
          <div className="header-actions">
            <div className="date-badge">
              <span className="icon">📅</span>
              {new Date().toLocaleDateString('fr-FR')}
            </div>
            <button className="btn-primary" onClick={handleNewTransaction}>
              <span className="icon">➕</span>
              Nouvelle Transaction
            </button>
          </div>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Stock Total</span>
            <span className="stat-icon">📦</span>
          </div>
          <div className="stat-content">
            <div className="stat-value">{totalStock.toLocaleString()}</div>
            <p className="stat-description">bouteilles en stock</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Valeur du Stock</span>
            <span className="stat-icon">📈</span>
          </div>
          <div className="stat-content">
            <div className="stat-value">{(totalValue / 1000000).toFixed(1)}M</div>
            <p className="stat-description">FCFA</p>
          </div>
        </div>

        <div className="stat-card alert">
          <div className="stat-header">
            <span className="stat-title">Alertes Stock</span>
            <span className="stat-icon">⚠️</span>
          </div>
          <div className="stat-content">
            <div className="stat-value alert-value">{lowStockItems.length}</div>
            <p className="stat-description">articles en rupture</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-title">Agences Actives</span>
            <span className="stat-icon">👥</span>
          </div>
          <div className="stat-content">
            <div className="stat-value">{agencies.filter((a) => a.status === 'actif').length}</div>
            <p className="stat-description">sur {agencies.length} agences</p>
          </div>
        </div>
      </div>

      {/* Onglets */}
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab ${activeTab === 'stock' ? 'active' : ''}`}
            onClick={() => setActiveTab('stock')}
          >
            Gestion Stock
          </button>
          <button
            className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
            onClick={() => setActiveTab('transactions')}
          >
            Transactions
          </button>
          <button
            className={`tab ${activeTab === 'agencies' ? 'active' : ''}`}
            onClick={() => setActiveTab('agencies')}
          >
            Agences
          </button>
          <button
            className={`tab ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            Rapports
          </button>
        </div>

        {/* Contenu des onglets */}
        <div className="tab-content">
          {/* Onglet Gestion du Stock */}
          {activeTab === 'stock' && (
            <div className="stock-management">
              <div className="card">
                <div className="card-header">
                  <h2>Inventaire des Bouteilles</h2>
                  <div className="card-actions">
                    <div className="search-container">
                      <span className="search-icon">🔍</span>
                      <input
                        type="text"
                        placeholder="Rechercher un produit..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                      />
                    </div>
                    <button className="btn-outline">
                      <span className="icon">📊</span>
                      Analyser
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <div className="stock-list">
                    {filteredStock.map((item) => (
                      <div key={item.id} className="stock-item">
                        <div className="stock-info">
                          <div className="stock-icon">📦</div>
                          <div className="stock-details">
                            <h3>{item.type}</h3>
                            <p>Capacité: {item.capacity}</p>
                            <p className="last-updated">Mis à jour: {item.lastUpdated}</p>
                          </div>
                        </div>

                        <div className="stock-metrics">
                          <div className="metric">
                            <div className="metric-value">{item.quantity}</div>
                            <div className="metric-label">En stock</div>
                          </div>

                          <div className="metric">
                            <div className="metric-value">{item.price.toLocaleString()} FCFA</div>
                            <div className="metric-label">Prix unitaire</div>
                          </div>

                          <div className="metric">
                            <span
                              className={`status-badge ${
                                item.quantity <= item.minStock ? 'low-stock' : 'ok-stock'
                              }`}
                            >
                              {item.quantity <= item.minStock ? 'Stock Faible' : 'OK'}
                            </span>
                            <div className="metric-label">Min: {item.minStock}</div>
                          </div>

                          <div className="stock-actions">
                            <button
                              className="btn-icon"
                              onClick={() => handleViewDetails(item.id)}
                              title="Voir détails"
                            >
                              👁️
                            </button>
                            <button
                              className="btn-icon"
                              onClick={() => handleEditItem(item.id)}
                              title="Modifier"
                            >
                              ✏️
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Onglet Transactions */}
          {activeTab === 'transactions' && (
            <div className="transactions-management">
              <div className="card">
                <div className="card-header">
                  <h2>Transactions Récentes</h2>
                  <button className="btn-outline">
                    <span className="icon">➕</span>
                    Nouvelle Expédition
                  </button>
                </div>
                <div className="card-content">
                  <div className="transactions-list">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="transaction-item">
                        <div className="transaction-info">
                          <div className={`transaction-icon ${transaction.type}`}>
                            {transaction.type === 'entrée' ? '📈' : '🚛'}
                          </div>
                          <div className="transaction-details">
                            <h3>
                              {transaction.type === 'entrée' ? 'Réception Stock' : 'Expédition'}
                            </h3>
                            <p>{transaction.destination || 'Réapprovisionnement'}</p>
                            <p className="bottles-info">
                              {transaction.bottles.map((b) => `${b.quantity} x ${b.type}`).join(', ')}
                            </p>
                          </div>
                        </div>

                        <div className="transaction-summary">
                          <div className="transaction-amount">
                            <div className="amount">{transaction.amount.toLocaleString()} FCFA</div>
                            <div className="date">{transaction.date}</div>
                          </div>
                          <span className={`status-badge ${getStatusColor(transaction.status)}`}>
                            {transaction.status.replace('_', ' ')}
                          </span>
                          <button className="btn-icon" title="Voir détails">
                            👁️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Onglet Agences */}
          {activeTab === 'agencies' && (
            <div className="agencies-management">
              <div className="card">
                <div className="card-header">
                  <h2>Gestion des Agences</h2>
                  <button className="btn-outline">
                    <span className="icon">➕</span>
                    Ajouter Agence
                  </button>
                </div>
                <div className="card-content">
                  <div className="agencies-grid">
                    {agencies.map((agency) => (
                      <div key={agency.id} className="agency-card">
                        <div className="agency-header">
                          <div className="agency-info">
                            <h3>{agency.name}</h3>
                            <p className="location">
                              <span className="icon">📍</span>
                              {agency.location}
                            </p>
                          </div>
                          <span className={`status-badge ${getStatusColor(agency.status)}`}>
                            {agency.status}
                          </span>
                        </div>

                        <div className="agency-details">
                          <div className="detail-item">
                            <span className="label">Responsable:</span> {agency.manager}
                          </div>
                          <div className="detail-item">
                            <span className="label">Téléphone:</span> {agency.phone}
                          </div>
                          <div className="detail-item">
                            <span className="label">Dernière commande:</span> {agency.lastOrder}
                          </div>
                        </div>

                        <div className="agency-actions">
                          <button className="btn-outline small">Voir Détails</button>
                          <button className="btn-outline small">Nouvelle Expédition</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Onglet Rapports */}
          {activeTab === 'reports' && (
            <div className="reports-management">
              <div className="reports-grid">
                <div className="card">
                  <div className="card-header">
                    <h2>Rapport Mensuel - Janvier 2024</h2>
                  </div>
                  <div className="card-content">
                    <div className="report-metrics">
                      <div className="report-item">
                        <span>Entrées totales:</span>
                        <span className="value">1,250 bouteilles</span>
                      </div>
                      <div className="report-item">
                        <span>Sorties totales:</span>
                        <span className="value">1,180 bouteilles</span>
                      </div>
                      <div className="report-item">
                        <span>Stock restant:</span>
                        <span className="value">{totalStock.toLocaleString()} bouteilles</span>
                      </div>
                      <div className="report-item">
                        <span>Chiffre d'affaires:</span>
                        <span className="value">15,750,000 FCFA</span>
                      </div>
                      <div className="report-item">
                        <span>Rotation stock:</span>
                        <span className="value">85%</span>
                      </div>
                      <div className="report-item">
                        <span>Agences servies:</span>
                        <span className="value">
                          {agencies.filter((a) => a.status === 'actif').length} agences
                        </span>
                      </div>
                    </div>
                    <button className="btn-outline full-width">Télécharger Rapport PDF</button>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h2>Prévisions & Analyses</h2>
                  </div>
                  <div className="card-content">
                    <div className="report-metrics">
                      <div className="report-item">
                        <span>Réapprovisionnement suggéré:</span>
                        <span className="value warning">3 jours</span>
                      </div>
                      <div className="report-item">
                        <span>Demande prévue:</span>
                        <span className="value success">+15%</span>
                      </div>
                      <div className="report-item">
                        <span>Meilleure vente:</span>
                        <span className="value">Bouteille 12.5kg</span>
                      </div>
                      <div className="report-item">
                        <span>Agence la plus active:</span>
                        <span className="value">Douala Centre</span>
                      </div>
                      <div className="report-item">
                        <span>Taux de rupture:</span>
                        <span className="value error">
                          {((lowStockItems.length / stockData.length) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="report-item">
                        <span>Efficacité livraison:</span>
                        <span className="value success">92%</span>
                      </div>
                    </div>
                    <button className="btn-outline full-width">Voir Analyse Complète</button>
                  </div>
                </div>
              </div>

              {/* Graphiques de performance */}
              <div className="card">
                <div className="card-header">
                  <h2>Performance par Type de Bouteille</h2>
                </div>
                <div className="card-content">
                  <div className="performance-chart">
                    {stockData.map((item) => (
                      <div key={item.id} className="performance-item">
                        <span className="performance-label">{item.type}</span>
                        <div className="performance-bar-container">
                          <div className="performance-bar">
                            <div
                              className="performance-fill"
                              style={{ width: `${(item.quantity / 500) * 100}%` }}
                            ></div>
                          </div>
                          <span className="performance-percentage">
                            {((item.quantity / 500) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsableEntrepotDashboard;