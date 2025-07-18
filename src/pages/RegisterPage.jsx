// Fichier : src/pages/RegisterPage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/RegisterPage.module.css';
import { authService } from '../services/authService';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    typeClient: 'CLIENT_MENAGE',
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    motDePasse: '',
    confirmPassword: '',
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.motDePasse !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    
    setLoading(true);

    const payload = {
      // On génère un identifiant simple à partir de l'email pour commencer
      identifiant: formData.email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/gi, '') + Math.floor(Math.random() * 1000),
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      motDePasse: formData.motDePasse,
      typeClient: formData.typeClient,
      adresse: formData.adresse,
    };

    try {
      const response = await authService.register(payload);
      setSuccess(response.data + " Vous allez être redirigé...");
      setTimeout(() => navigate('/login'), 4000);
    } catch (err) {
      setError(err.response?.data || "Une erreur est survenue lors de l'inscription.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <div className={styles.registerBox}>
          <Link to="/" className={styles.logoContainer}>
            <span className={styles.gaz}>gaz</span>
            <span className={styles.flow}>Flow</span>
          </Link>
          <h2 className={styles.title}>Créer un Compte</h2>
          <p className={styles.subtitle}>Rejoignez-nous en quelques étapes.</p>
          
          <form onSubmit={handleRegister} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="typeClient">Je suis un</label>
              <select id="typeClient" value={formData.typeClient} onChange={handleChange} className={styles.selectField}>
                <option value="CLIENT_MENAGE">Client Ménage (Particulier)</option>
                <option value="CLIENT_REVENDEUR">Client Revendeur (Professionnel)</option>
              </select>
            </div>

            <div className={styles.inputGroup}><label htmlFor="prenom">Prénom</label><input type="text" id="prenom" value={formData.prenom} onChange={handleChange} className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="nom">Nom</label><input type="text" id="nom" value={formData.nom} onChange={handleChange} className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="email">Email</label><input type="email" id="email" value={formData.email} onChange={handleChange} className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="telephone">Téléphone</label><input type="tel" id="telephone" value={formData.telephone} onChange={handleChange} className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="adresse">Adresse</label><input type="text" id="adresse" value={formData.adresse} onChange={handleChange} className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="motDePasse">Mot de passe</label><input type="password" id="motDePasse" value={formData.motDePasse} onChange={handleChange} className={styles.inputField} required /></div>
            <div className={styles.inputGroup}><label htmlFor="confirmPassword">Confirmer le mot de passe</label><input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={styles.inputField} required /></div>
            
            {success && <p style={{ color: 'lime', textAlign: 'center' }}>{success}</p>}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Inscription...' : "S'inscrire"}
            </button>

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
