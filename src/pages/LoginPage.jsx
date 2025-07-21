import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css';
import { useAuth } from '../context/AuthContext'; // On importe notre hook

export default function LoginPage() {
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
      // La fonction login du contexte met à jour l'état global
      // et nous retourne les infos de l'utilisateur, y compris son rôle
      const userData = await login(identifiant, motDePasse);
      
      // On redirige vers la route générique /dashboard
      // Le composant DashboardRedirect s'occupera du reste
      navigate('/dashboard');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
              <label htmlFor="username">Identifiant ou Email</label>
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

            <p className={styles.registerLink}>
              Pas encore de compte ?{' '}
              <Link to="/register">S'inscrire ici</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
