import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css';

export default function LoginPage() {
  const [role, setRole] = useState('CLIENT_MENAGE');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Tentative de connexion avec le rôle : ${role}`);
    // TODO: Logique de connexion avec Keycloak
  };

  const isClientRole = role === 'CLIENT_MENAGE' || role === 'CLIENT_REVENDEUR';

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <Link to="/" className={styles.logoContainer}>
          <span className={styles.gaz}>gaz</span>
          <span className={styles.flow}>Flow</span>
        </Link>

        <div className={styles.loginBox}>
          <h2 className={styles.title}>Bienvenue !</h2>
          <p className={styles.subtitle}>Connectez-vous à votre espace.</p>
          
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="role">Je me connecte en tant que</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className={styles.selectField}>
                <option value="CLIENT_MENAGE">Client Ménage</option>
                <option value="CLIENT_REVENDEUR">Client Revendeur</option>
                <option value="ADMIN">Administrateur</option>
                <option value="RESPONSABLE_AGENCE">Responsable d'Agence</option>
                <option value="RESPONSABLE_ENTREPOT">Responsable d'Entrepôt</option>
                <option value="RESPONSABLE_PRODUCTION">Responsable d'Unité de Production</option>
                <option value="RESPONSABLE_SUIVI">Responsable de Suivi</option>
                <option value="TRANSPORTEUR">Transporteur</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="username">Identifiant</label>
              <input type="text" id="username" className={styles.inputField} placeholder="votre.identifiant" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" className={styles.inputField} placeholder="••••••••" required />
            </div>

            <button type="submit" className={styles.submitButton}>Se Connecter</button>

            {isClientRole && (
              <p className={styles.registerLink}>
                Pas encore de compte ?{' '}
                <Link to="/register">S'inscrire ici</Link>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}