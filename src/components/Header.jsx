// src/components/Header.jsx
import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/"> {/* Lien vers l'accueil */}
          <span className={styles.gaz}>gaz</span>
          <span className={styles.flow}>Flow</span>
        </a>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="#features">Fonctionnalités</a></li>
          <li><a href="#how-it-works">Comment ça Marche ?</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>Se Connecter</button>
        <button className={styles.signUpBtn}>S'inscrire</button>
      </div>
    </header>
  );
}

export default Header;