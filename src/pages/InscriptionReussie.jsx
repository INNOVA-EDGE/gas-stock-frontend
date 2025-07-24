import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from '../styles/RegisterPage.module.css'; // On réutilise les mêmes styles

const InscriptionReussie = () => {
    const location = useLocation();
    const { state } = location;

    // Déterminer quel message afficher en fonction de la provenance
    const isEmployeeCreation = state?.isEmployeeCreation;
    const clientType = state?.clientType;
    const employeeName = state?.employeeName;

    let title = "Opération Réussie !";
    let message = "L'action a été effectuée avec succès.";
    let details = "Vous pouvez continuer à naviguer.";
    let linkPath = "/";
    let linkText = "Retour à l'accueil";

    if (isEmployeeCreation) {
        title = "Employé Créé !";
        message = `Le compte pour ${employeeName} a été créé avec succès.`;
        details = "Cet employé peut maintenant se connecter avec ses identifiants. Il sera redirigé vers son tableau de bord personnel.";
        linkPath = "/dashboard/admin";
        linkText = "Retourner au tableau de bord";
    } else if (clientType === 'CLIENT_REVENDEUR') {
        title = "Inscription Reçue !";
        message = "Votre demande d'inscription en tant que revendeur a bien été prise en compte.";
        details = "Votre compte est en attente de validation. Vous recevrez un email de confirmation une fois qu'il sera activé par un administrateur.";
        linkPath = "/login";
        linkText = "Se connecter";
    } else { // Cas par défaut pour CLIENT_MENAGE
        title = "Inscription Réussie !";
        message = "Votre compte a été créé avec succès.";
        details = "Vous pouvez maintenant vous connecter pour accéder à votre espace personnel et passer des commandes.";
        linkPath = "/login";
        linkText = "Se connecter maintenant";
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className={styles.registerBox} style={{ textAlign: 'center' }}>
                    <h2 className={styles.title} style={{ color: '#2ecc71' }}>{title}</h2>
                    <p className={styles.subtitle}>{message}</p>
                    <p style={{ marginBottom: '30px' }}>{details}</p>
                    <Link to={linkPath} className={styles.submitButton}>{linkText}</Link>
                </div>
            </div>
        </div>
    );
};

export default InscriptionReussie;