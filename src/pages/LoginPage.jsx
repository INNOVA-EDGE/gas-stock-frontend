import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css';
import { useAuth } from '../context/AuthContext'; // On importe notre hook

export default function LoginPage() {
  // Le select de rôle est pour l'instant un guide visuel pour l'utilisateur.
  // La logique de connexion ne l'utilise pas, car Keycloak détermine le rôle.
  const [role, setRole] = useState('CLIENT_MENAGE');
  const [identifiant, setIdentifiant] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userData = await login(identifiant, motDePasse);
      // TODO: Plus tard, nous mettrons une logique de redirection plus intelligente
      // en fonction du rôle (userData.role).
      navigate('/dashboard'); // Redirection générique pour l'instant
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
              <select 
                id="role" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                className={styles.selectField}
              >
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
              <input 
                type="text" 
                id="username" 
                className={styles.inputField} 
                placeholder="votre.identifiant" 
                value={identifiant}
                onChange={(e) => setIdentifiant(e.target.value)}
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Mot de passe</label>
              <input 
                type="password" 
                id="password" 
                className={styles.inputField} 
                placeholder="••••••••" 
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required 
              />
            </div>

            {error && <p style={{ color: '#ff4d4d', textAlign: 'center', fontSize: '0.875rem' }}>{error}</p>}

            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Connexion...' : 'Se Connecter'}
            </button>

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