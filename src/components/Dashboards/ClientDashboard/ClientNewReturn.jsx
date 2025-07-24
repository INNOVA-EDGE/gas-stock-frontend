// src/components/Dashboards/ClientDashboard/ClientNewReturn.jsx
import React, { useState, useEffect } from 'react';
import styles from './ClientDashboard.module.css'; // Pour les styles de layout généraux
import newReturnStyles from './ClientNewReturn.module.css'; // Styles spécifiques à la nouvelle demande de retour
import { FaBoxOpen, FaClipboardList, FaCommentAlt, FaPaperPlane, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ClientNewReturn = () => {
  const navigate = useNavigate();

  // États pour le formulaire de demande de retour
  const [orderId, setOrderId] = useState('');
  const [productToReturn, setProductToReturn] = useState(''); // Pourrait être une liste déroulante des produits de la commande
  const [quantity, setQuantity] = useState(1);
  const [returnReason, setReturnReason] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  // Simulation de la soumission du formulaire
  const handleSubmitReturnRequest = (e) => {
    e.preventDefault();

    // Validations simples côté client
    if (!orderId.trim()) {
      alert("Veuillez entrer l'ID de la commande.");
      return;
    }
    if (!productToReturn.trim()) {
      alert("Veuillez spécifier le produit à retourner.");
      return;
    }
    if (quantity < 1) {
      alert("La quantité doit être au moins de 1.");
      return;
    }
    if (!returnReason.trim()) {
      alert("Veuillez indiquer la raison du retour.");
      return;
    }

    // LOGIQUE D'ENVOI DE LA DEMANDE DE RETOUR AU BACKEND
    console.log("Demande de retour soumise (à envoyer au backend) :", {
      orderId,
      productToReturn,
      quantity,
      returnReason,
      additionalComments
    });

    alert("Votre demande de retour a été soumise avec succès (simulation) !");
    navigate('/dashboard/client/returns'); // Redirige vers l'historique des retours
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h1 className={styles.welcomeMessage}>Effectuer une Nouvelle Demande de Retour</h1>
      </header>

      <form onSubmit={handleSubmitReturnRequest} className={newReturnStyles.returnForm}>
        <section className={`${styles.section} ${newReturnStyles.formSection}`}>
          <h2 className={styles.sectionTitle}><FaClipboardList /> Détails de la Commande</h2>
          <div className={newReturnStyles.formGroup}>
            <label htmlFor="orderId">ID de la Commande concernée :</label>
            <input
              type="text"
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className={newReturnStyles.textInput}
              placeholder="Ex: ORD00123"
              required
            />
          </div>
          <div className={newReturnStyles.formGroup}>
            <label htmlFor="productToReturn">Produit(s) à retourner :</label>
            <input
              type="text"
              id="productToReturn"
              value={productToReturn}
              onChange={(e) => setProductToReturn(e.target.value)}
              className={newReturnStyles.textInput}
              placeholder="Ex: Bouteille Butane 12kg"
              required
            />
            <small className={newReturnStyles.hintText}>Si plusieurs produits, séparez par des virgules.</small>
          </div>
          <div className={newReturnStyles.formGroup}>
            <label htmlFor="quantity">Quantité :</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className={newReturnStyles.numberInput}
              min="1"
              required
            />
          </div>
        </section>

        <section className={`${styles.section} ${newReturnStyles.formSection}`}>
          <h2 className={styles.sectionTitle}><FaCommentAlt /> Raison du Retour</h2>
          <div className={newReturnStyles.formGroup}>
            <label htmlFor="returnReason">Raison principale du retour :</label>
            <select
              id="returnReason"
              value={returnReason}
              onChange={(e) => setReturnReason(e.target.value)}
              className={newReturnStyles.selectInput}
              required
            >
              <option value="">-- Sélectionner une raison --</option>
              <option value="Produit endommagé">Produit endommagé</option>
              <option value="Produit incorrect">Produit incorrect</option>
              <option value="Ne correspond pas à la description">Ne correspond pas à la description</option>
              <option value="Changement d'avis">Changement d'avis</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className={newReturnStyles.formGroup}>
            <label htmlFor="additionalComments">Commentaires additionnels (facultatif) :</label>
            <textarea
              id="additionalComments"
              value={additionalComments}
              onChange={(e) => setAdditionalComments(e.target.value)}
              className={newReturnStyles.textareaInput}
              rows="4"
              placeholder="Décrivez plus en détail votre problème ou attente."
            ></textarea>
          </div>
        </section>

        <div className={newReturnStyles.buttonGroup}>
          <button type="submit" className={newReturnStyles.submitButton}>
            <FaPaperPlane /> Envoyer la demande
          </button>
          <button type="button" onClick={() => navigate('/dashboard/client/returns')} className={newReturnStyles.cancelButton}>
            <FaTimesCircle /> Annuler
          </button>
        </div>
      </form>
    </main>
  );
};

export default ClientNewReturn;