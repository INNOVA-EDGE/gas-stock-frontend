// src/components/Dashboards/ClientDashboard/ClientReturns.jsx
import React, { useState, useEffect } from 'react';
import styles from './ClientDashboard.module.css'; // Pour les styles de layout généraux
import returnsStyles from './ClientReturns.module.css'; // Styles spécifiques aux retours
import { FaUndoAlt, FaCalendarAlt, FaBoxOpen, FaInfoCircle, FaCheckCircle, FaHourglassHalf, FaTimesCircle, FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Pour la navigation vers une page de demande de retour

const ClientReturns = () => {
  const navigate = useNavigate();
  // État pour stocker les demandes de retour de l'utilisateur
  // Ce tableau sera vide au début et sera rempli par les données du backend
  const [returns, setReturns] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulation du chargement des demandes de retour depuis un backend
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // Ici, vous feriez un appel API (ex: fetch('/api/client/returns'))
    const fetchReturns = async () => {
      try {
        // Simule un délai réseau
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        
        // Exemple de données factices (à remplacer par les vraies données du backend)
        const fetchedData = [
          /*
          { 
            id: 'RET001', 
            requestDate: '2025-06-28', 
            items: [{ name: 'Bouteille Butane 12kg', quantity: 1 }],
            status: 'Approuvé',
            reason: 'Bouteille endommagée'
          },
          { 
            id: 'RET002', 
            requestDate: '2025-07-05', 
            items: [{ name: 'Bouteille Propane 6kg', quantity: 2 }],
            status: 'En Cours',
            reason: 'Erreur de commande'
          }
          */
        ]; // Laissez vide pour l'instant

        setReturns(fetchedData);
        setIsLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement des retours :", err);
        setError("Impossible de charger les retours. Veuillez réessayer plus tard.");
        setIsLoading(false);
      }
    };

    fetchReturns();
  }, []); // S'exécute une seule fois au montage du composant

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approuvé':
        return <FaCheckCircle className={returnsStyles.statusIconApproved} />;
      case 'En Cours':
        return <FaHourglassHalf className={returnsStyles.statusIconPending} />;
      case 'Refusé':
        return <FaTimesCircle className={returnsStyles.statusIconRejected} />;
      default:
        return <FaInfoCircle className={returnsStyles.statusIconDefault} />;
    }
  };

  const handleNewReturnRequest = () => {
    // Naviguer vers une page ou ouvrir un modal pour faire une nouvelle demande de retour
    // alert("Redirection vers le formulaire de nouvelle demande de retour (à implémenter)");
    navigate('/dashboard/client/returns/new'); // Exemple de route future
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h1 className={styles.welcomeMessage}>Mes Retours</h1>
      </header>

      <section className={`${styles.section} ${returnsStyles.returnsSection}`}>
        <h2 className={styles.sectionTitle}><FaUndoAlt /> Historique des Retours</h2>
        
        {isLoading && (
          <div className={returnsStyles.loadingMessage}>Chargement des retours...</div>
        )}

        {error && (
          <div className={returnsStyles.errorMessage}>{error}</div>
        )}

        {!isLoading && !error && returns.length === 0 && (
          <div className={returnsStyles.noReturnsMessage}>
            <p>Vous n'avez pas encore effectué de demandes de retour.</p>
            <button 
              onClick={handleNewReturnRequest} 
              className={returnsStyles.newReturnButton}
            >
              <FaPlusCircle /> Faire une nouvelle demande de retour
            </button>
          </div>
        )}

        {!isLoading && !error && returns.length > 0 && (
          <>
            <div className={returnsStyles.returnsTableContainer}>
              <table className={returnsStyles.returnsTable}>
                <thead>
                  <tr>
                    <th>ID Retour</th>
                    <th>Date de Demande</th>
                    <th>Article(s) Retourné(s)</th>
                    <th>Raison</th>
                    <th>Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {returns.map(retour => (
                    <tr key={retour.id}>
                      <td>{retour.id}</td>
                      <td>{retour.requestDate}</td>
                      <td>
                        {retour.items.map((item, index) => (
                          <div key={index}>{item.name} x {item.quantity}</div>
                        ))}
                      </td>
                      <td>{retour.reason}</td>
                      <td className={returnsStyles.statusCell}>
                        {getStatusIcon(retour.status)} {retour.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={returnsStyles.newRequestContainer}>
                <button 
                    onClick={handleNewReturnRequest} 
                    className={returnsStyles.newReturnButton}
                >
                    <FaPlusCircle /> Faire une nouvelle demande de retour
                </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default ClientReturns;