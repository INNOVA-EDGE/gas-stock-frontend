import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/RegisterPage.module.css'; // On importe le style

export default function RegisterPage() {
  const [clientType, setClientType] = useState('CLIENT_MENAGE');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Tentative d'inscription en tant que : ${clientType}`);
    // TODO: Logique d'inscription et appel API Backend
  };

  return (
    <div className={styles.loginPage}> {/* On réutilise la classe de fond */}
      <div className={styles.loginContainer}>
        <Link to="/" className={styles.logoContainer}>
          <span className={styles.gaz}>gaz</span>
          <span className={styles.flow}>Flow</span>
        </Link>

        <div className={styles.registerBox}>
          <h2 className={styles.title}>Créer un Compte</h2>
          <p className={styles.subtitle}>Rejoignez-nous en quelques étapes.</p>
          
          <form onSubmit={handleRegister} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="clientType">Je suis un</label>
              <select id="clientType" value={clientType} onChange={(e) => setClientType(e.target.value)} className={styles.selectField}>
                <option value="CLIENT_MENAGE">Client Ménage (Particulier)</option>
                <option value="CLIENT_REVENDEUR">Client Revendeur (Professionnel)</option>
              </select>
            </div>

            {/* Champs communs */}
            <div className={styles.inputGroup}><label htmlFor="nom">Nom Complet</label><input type="text" id="nom" className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="email">Email</label><input type="email" id="email" className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="telephone">Téléphone</label><input type="tel" id="telephone" className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="adresse">Adresse</label><input type="text" id="adresse" className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="password">Mot de passe</label><input type="password" id="password" className={styles.inputField} required /></div>
            
            <button type="submit" className={styles.submitButton}>S'inscrire</button>

            <p className={styles.registerLink}>
              Déjà un compte ?{' '}
              <Link to="/login">Se connecter</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}