// src/components/Dashboards/ClientDashboard/ClientDeliveryTracking.jsx
import React, { useState, useEffect } from 'react';
import styles from './ClientDashboard.module.css'; // Pour les styles de layout généraux
import trackingStyles from './ClientDeliveryTracking.module.css'; // Styles spécifiques au suivi
import { FaTruck, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaHourglassHalf, FaBox, FaTimesCircle, FaClipboardList } from 'react-icons/fa';

const ClientDeliveryTracking = () => {
  // État pour stocker les livraisons en cours de l'utilisateur
  const [deliveries, setDeliveries] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulation du chargement des livraisons depuis un backend
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // Ici, vous feriez un appel API (ex: fetch('/api/client/deliveries/in-progress'))
    const fetchDeliveries = async () => {
      try {
        // Simule un délai réseau
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        
        // Exemple de données factices (à remplacer par les vraies données du backend)
        const fetchedData = [
          /*
          {
            id: 'DEL001',
            orderId: 'ORD00125',
            estimatedDelivery: '2025-07-22 à 14:00',
            status: 'En Route',
            lastUpdate: '2025-07-20 16:30',
            currentLocation: 'À 5km de votre adresse'
          },
          {
            id: 'DEL002',
            orderId: 'ORD00126',
            estimatedDelivery: '2025-07-23 à 10:00',
            status: 'Préparation',
            lastUpdate: '2025-07-20 10:00',
            currentLocation: 'Entrepôt principal'
          }
          */
        ]; // Laissez vide pour l'instant

        setDeliveries(fetchedData);
        setIsLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement des livraisons :", err);
        setError("Impossible de charger le suivi des livraisons. Veuillez réessayer plus tard.");
        setIsLoading(false);
      }
    };

    fetchDeliveries();
  }, []); // S'exécute une seule fois au montage du composant

  const getStatusIcon = (status) => {
    switch (status) {
      case 'En Route':
        return <FaTruck className={trackingStyles.statusIconEnRoute} />;
      case 'Préparation':
        return <FaBox className={trackingStyles.statusIconPreparation} />;
      case 'Livrée': // Bien que cette page soit pour 'en cours', une commande peut passer à 'livrée' ici.
        return <FaCheckCircle className={trackingStyles.statusIconDelivered} />;
      case 'Annulée':
        return <FaTimesCircle className={trackingStyles.statusIconCancelled} />;
      default:
        return <FaHourglassHalf className={trackingStyles.statusIconDefault} />;
    }
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h1 className={styles.welcomeMessage}>Suivi de mes Livraisons</h1>
      </header>

      <section className={`${styles.section} ${trackingStyles.trackingSection}`}>
        <h2 className={styles.sectionTitle}><FaMapMarkerAlt /> Livraisons en Cours</h2>
        
        {isLoading && (
          <div className={trackingStyles.loadingMessage}>Chargement des livraisons en cours...</div>
        )}

        {error && (
          <div className={trackingStyles.errorMessage}>{error}</div>
        )}

        {!isLoading && !error && deliveries.length === 0 && (
          <div className={trackingStyles.noDeliveriesMessage}>
            <p>Aucune livraison en cours pour le moment.</p>
            <p>Passez une <a href="/dashboard/client/new-order" className={trackingStyles.linkToNewOrder}>nouvelle commande</a> pour démarrer un suivi !</p>
          </div>
        )}

        {!isLoading && !error && deliveries.length > 0 && (
          <div className={trackingStyles.deliveryCardsContainer}>
            {deliveries.map(delivery => (
              <div key={delivery.id} className={trackingStyles.deliveryCard}>
                <div className={trackingStyles.cardHeader}>
                  <h3 className={trackingStyles.orderId}>Commande #{delivery.orderId}</h3>
                  <span className={`${trackingStyles.deliveryStatus} ${trackingStyles[`status${delivery.status.replace(/\s/g, '')}`]}`}>
                    {getStatusIcon(delivery.status)} {delivery.status}
                  </span>
                </div>
                <div className={trackingStyles.cardBody}>
                  <p className={trackingStyles.cardDetail}>
                    <FaCalendarAlt /> **Livraison Estimée :** {delivery.estimatedDelivery || 'N/A'}
                  </p>
                  <p className={trackingStyles.cardDetail}>
                    <FaMapMarkerAlt /> **Statut Actuel :** {delivery.currentLocation || 'Mise à jour à venir...'}
                  </p>
                  <p className={trackingStyles.cardDetail}>
                    <FaClipboardList /> **Dernière Mise à Jour :** {delivery.lastUpdate || 'N/A'}
                  </p>
                </div>
                {/* Ici, vous pourriez ajouter un lien ou un bouton pour voir plus de détails sur une carte interactive */}
                {/* <button className={trackingStyles.viewDetailsButton}>Voir les détails de suivi</button> */}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default ClientDeliveryTracking;