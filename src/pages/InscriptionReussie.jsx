// Fichier : src/pages/InscriptionReussie.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/RegisterPage.module.css'; // Réutilisation du style

export default function InscriptionReussie() {
  const { state } = useLocation();
  const clientType = state?.clientType;

  const isReseller = clientType === 'CLIENT_REVENDEUR';

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.registerBox} style={{ padding: '40px' }}>
           <Link to="/" className={styles.logoContainer}>
            <span className={styles.gaz}>gaz</span>
            <span className={styles.flow}>Flow</span>
          </Link>
          <h2 className={styles.title}>Inscription Réussie !</h2>

          {isReseller ? (
            <p className={styles.subtitle} style={{ textAlign: 'center', lineHeight: '1.6' }}>
              Votre demande a bien été prise en compte. Un email vous a été envoyé
              avec les instructions pour finaliser la validation de votre compte.
            </p>
          ) : (
            <p className={styles.subtitle} style={{ textAlign: 'center' }}>
              Félicitations ! Votre compte a été créé. Vous pouvez maintenant vous connecter.
            </p>
          )}

          <Link to="/login" className={styles.submitButton} style={{ textDecoration: 'none', textAlign: 'center', marginTop: '20px' }}>
            Aller à la page de connexion
          </Link>
        </div>
      </div>
    </div>
  );
}