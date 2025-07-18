import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className={styles.gaz}>gaz</span>
          <span className={styles.flow}>Flow</span>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="#features">Fonctionnalités</a></li>
          <li><a href="#how-it-works">Comment ça Marche ?</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginBtn} onClick={() => navigate('/login')}>Se Connecter</button>
        <button className={styles.signUpBtn} onClick={() => navigate('/register')}>S'inscrire</button>
      </div>
    </header>
  );
}