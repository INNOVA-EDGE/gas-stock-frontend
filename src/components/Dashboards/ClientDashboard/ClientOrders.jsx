// src/components/Dashboards/ClientDashboard/ClientOrders.jsx
import React, { useState, useEffect } from 'react';
import styles from './ClientDashboard.module.css'; // Pour les styles de layout généraux
import ordersStyles from './ClientOrders.module.css'; // Styles spécifiques aux commandes
import { FaBox, FaCalendarAlt, FaMoneyBillAlt, FaTruck, FaInfoCircle, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';

const ClientOrders = () => {
  // État pour stocker les commandes de l'utilisateur
  // Ce tableau sera vide au début et sera rempli par les données du backend
  const [orders, setOrders] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulation du chargement des commandes depuis un backend
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // Ici, vous feriez un appel API (ex: fetch('/api/client/orders'))
    // Pour l'instant, nous laissons le tableau vide ou ajoutons un délai pour simuler le chargement
    const fetchOrders = async () => {
      try {
        // Simule un délai réseau
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        
        // Exemple de données factices (à remplacer par les vraies données du backend)
        const fetchedData = [
          /*
          {
            id: 'ORD001',
            date: '2025-07-15',
            items: [{ name: 'Bouteille Butane 12kg', quantity: 2 }],
            total: 14000,
            status: 'Livrée'
          },
          {
            id: 'ORD002',
            date: '2025-07-20',
            items: [{ name: 'Bouteille Propane 6kg', quantity: 1 }],
            total: 5000,
            status: 'En Attente'
          }
          */
        ]; // Laissez vide pour l'instant comme demandé

        setOrders(fetchedData);
        setIsLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement des commandes :", err);
        setError("Impossible de charger les commandes. Veuillez réessayer plus tard.");
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []); // S'exécute une seule fois au montage du composant

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Livrée':
        return <FaCheckCircle className={ordersStyles.statusIconDelivered} />;
      case 'En Attente':
        return <FaHourglassHalf className={ordersStyles.statusIconPending} />;
      case 'Annulée':
        return <FaTimesCircle className={ordersStyles.statusIconCancelled} />;
      case 'En Cours':
        return <FaTruck className={ordersStyles.statusIconInTransit} />;
      default:
        return <FaInfoCircle className={ordersStyles.statusIconDefault} />;
    }
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h1 className={styles.welcomeMessage}>Mes Commandes</h1>
      </header>

      <section className={`${styles.section} ${ordersStyles.ordersSection}`}>
        <h2 className={styles.sectionTitle}><FaBox /> Historique des Commandes</h2>
        
        {isLoading && (
          <div className={ordersStyles.loadingMessage}>Chargement des commandes...</div>
        )}

        {error && (
          <div className={ordersStyles.errorMessage}>{error}</div>
        )}

        {!isLoading && !error && orders.length === 0 && (
          <div className={ordersStyles.noOrdersMessage}>
            <p>Vous n'avez pas encore passé de commande.</p>
            <p>Commencez par <a href="/dashboard/client/new-order" className={ordersStyles.linkToNewOrder}>passer une nouvelle commande</a> !</p>
          </div>
        )}

        {!isLoading && !error && orders.length > 0 && (
          <div className={ordersStyles.ordersTableContainer}>
            <table className={ordersStyles.ordersTable}>
              <thead>
                <tr>
                  <th>ID Commande</th>
                  <th>Date</th>
                  <th>Produits</th>
                  <th>Quantité</th>
                  <th>Total</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>
                      {order.items.map((item, index) => (
                        <div key={index}>{item.name}</div>
                      ))}
                    </td>
                    <td>
                      {order.items.reduce((acc, item) => acc + item.quantity, 0)}
                    </td>
                    <td>{order.total.toLocaleString('fr-CM', { style: 'currency', currency: 'XAF' })}</td>
                    <td className={ordersStyles.statusCell}>
                      {getStatusIcon(order.status)} {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default ClientOrders;