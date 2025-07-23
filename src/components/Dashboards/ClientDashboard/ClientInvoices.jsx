// src/components/Dashboards/ClientDashboard/ClientInvoices.jsx
import React, { useState, useEffect } from 'react';
import styles from './ClientDashboard.module.css'; // Pour les styles de layout généraux
import invoicesStyles from './ClientInvoices.module.css'; // Styles spécifiques aux factures
import { FaFileInvoiceDollar, FaCalendarAlt, FaMoneyBillWave, FaDownload, FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa';

const ClientInvoices = () => {
  // État pour stocker les factures de l'utilisateur
  // Ce tableau sera vide au début et sera rempli par les données du backend
  const [invoices, setInvoices] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulation du chargement des factures depuis un backend
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // Ici, vous feriez un appel API (ex: fetch('/api/client/invoices'))
    const fetchInvoices = async () => {
      try {
        // Simule un délai réseau
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        
        // Exemple de données factices (à remplacer par les vraies données du backend)
        const fetchedData = [
          /*
          { 
            id: 'INV001', 
            date: '2025-07-15', 
            amount: 14000, 
            status: 'Payée',
            downloadUrl: '#invoice-download-link-1' // Lien factice
          },
          { 
            id: 'INV002', 
            date: '2025-07-20', 
            amount: 5000, 
            status: 'En Attente',
            downloadUrl: '#invoice-download-link-2' // Lien factice
          }
          */
        ]; // Laissez vide pour l'instant

        setInvoices(fetchedData);
        setIsLoading(false);
      } catch (err) {
        console.error("Erreur lors du chargement des factures :", err);
        setError("Impossible de charger les factures. Veuillez réessayer plus tard.");
        setIsLoading(false);
      }
    };

    fetchInvoices();
  }, []); // S'exécute une seule fois au montage du composant

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Payée':
        return <FaCheckCircle className={invoicesStyles.statusIconPaid} />;
      case 'En Attente':
        return <FaHourglassHalf className={invoicesStyles.statusIconPending} />;
      case 'Annulée':
        return <FaTimesCircle className={invoicesStyles.statusIconCancelled} />;
      default:
        return <FaFileInvoiceDollar className={invoicesStyles.statusIconDefault} />;
    }
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h1 className={styles.welcomeMessage}>Mes Factures</h1>
      </header>

      <section className={`${styles.section} ${invoicesStyles.invoicesSection}`}>
        <h2 className={styles.sectionTitle}><FaFileInvoiceDollar /> Liste de mes Factures</h2>
        
        {isLoading && (
          <div className={invoicesStyles.loadingMessage}>Chargement des factures...</div>
        )}

        {error && (
          <div className={invoicesStyles.errorMessage}>{error}</div>
        )}

        {!isLoading && !error && invoices.length === 0 && (
          <div className={invoicesStyles.noInvoicesMessage}>
            <p>Vous n'avez pas encore de factures.</p>
          </div>
        )}

        {!isLoading && !error && invoices.length > 0 && (
          <div className={invoicesStyles.invoicesTableContainer}>
            <table className={invoicesStyles.invoicesTable}>
              <thead>
                <tr>
                  <th>ID Facture</th>
                  <th>Date</th>
                  <th>Montant</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map(invoice => (
                  <tr key={invoice.id}>
                    <td>{invoice.id}</td>
                    <td>{invoice.date}</td>
                    <td>{invoice.amount.toLocaleString('fr-CM', { style: 'currency', currency: 'XAF' })}</td>
                    <td className={invoicesStyles.statusCell}>
                      {getStatusIcon(invoice.status)} {invoice.status}
                    </td>
                    <td>
                      {invoice.downloadUrl && (
                        <a 
                          href={invoice.downloadUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={invoicesStyles.downloadButton}
                          title="Télécharger la facture"
                        >
                          <FaDownload />
                        </a>
                      )}
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

export default ClientInvoices;