// src/components/Footer.jsx
import React from 'react';
import styles from '../styles/Footer.module.css';

// Pour les icônes de réseaux sociaux, tu peux utiliser React Icons, par exemple :
// import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id ="contact">
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <img src="/logo_gazflow.png" alt="Logo gazFlow" className={styles.footerLogo} /> {/* Assure-toi d'avoir un logo dans /public */}
          <p className={styles.brandTagline}>
            `gazFlow` : Maîtrisez vos flux, optimisez votre gestion.
          </p>
        </div>

        <nav className={styles.footerNav}>
          <h4 className={styles.navTitle}>Navigation</h4>
          <ul>
            <li><a href="#hero" className={styles.navLink}>Accueil</a></li>
            <li><a href="#features" className={styles.navLink}>Fonctionnalités</a></li>
            <li><a href="#roles" className={styles.navLink}>Qui utilise `gazFlow` ?</a></li>
            <li><a href="#how-it-works" className={styles.navLink}>Comment ça marche ?</a></li>
            {/* Si tu ajoutes plus tard des sections (ex: Témoignages, Tarifs, FAQ), tu les ajouteras ici */}
            {/* <li><a href="#testimonials" className={styles.navLink}>Témoignages</a></li> */}
          </ul>
        </nav>

        <div className={styles.footerContact}>
          <h4 className={styles.contactTitle}>Contact</h4>
          <p>
            Email: <a href="mailto:contact@gazflow.com" className={styles.contactLink}>contact@gazflow.com</a>
          </p>
          <p>
            Téléphone: <a href="tel:+2376XXXXXXXX" className={styles.contactLink}>+237 6XXXXXXXX</a>
          </p>
          <div className={styles.socialLinks}>
            {/* Remplace les liens # par tes vrais profils sociaux */}
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}> {/* <FaFacebook /> */} FB</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}> {/* <FaTwitter /> */} X</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}> {/* <FaLinkedin /> */} LI</a>
          </div>
        </div>

        <div className={styles.footerLegal}>
          <h4 className={styles.legalTitle}>Légal</h4>
          <ul>
            <li><a href="/privacy-policy" className={styles.legalLink}>Politique de confidentialité</a></li>
            <li><a href="/terms-of-service" className={styles.legalLink}>Conditions d'utilisation</a></li>
            {/* Ajoutez d'autres liens légaux si nécessaire */}
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          &copy; {currentYear} `gazFlow`. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;