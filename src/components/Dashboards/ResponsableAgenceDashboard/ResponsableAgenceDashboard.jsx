import React, { useState } from 'react';
// TRÈS IMPORTANT : Importe les styles comme un objet. Le nom 'styles' est courant.
import styles from './ResponsableAgenceDashboard.module.css'; // ASSURE-TOI QUE LE CHEMIN EST CORRECT ET AVEC .module.css

// Import des icônes de react-icons
import {
    FaHome, FaBox, FaCashRegister, FaCreditCard, FaChartBar, FaSignOutAlt,
    FaPlus, FaEye, FaHistory, FaDollarSign, FaUndo, FaMoneyBillWave, FaHandshake,
    FaUserCircle
} from 'react-icons/fa';

// --- Composant Sidebar (utilisation des styles.nomDeClasse) ---
const Sidebar = ({ activeItem, onNavigate }) => {
    return (
        <div className={styles.sidebar}> {/* styles.sidebar au lieu de "sidebar" */}
            <div className={styles['sidebar-header']}>GAZFLOW</div> {/* styles['sidebar-header'] pour les noms avec tirets */}
            <nav className={styles['sidebar-nav']}>
                <ul>
                    <li className={`${styles['sidebar-nav-item']} ${activeItem === 'accueil' ? styles.active : ''}`}>
                        <a href="#accueil" onClick={() => onNavigate('accueil')}>
                            <FaHome className={styles.icon} /> <span>Accueil</span>
                        </a>
                    </li>
                    <li className={`${styles['sidebar-nav-item']} ${activeItem === 'stocks' ? styles.active : ''}`}>
                        <a href="#stocks" onClick={() => onNavigate('stocks')}>
                            <FaBox className={styles.icon} /> <span>Gestion des Stocks</span>
                        </a>
                    </li>
                    <li className={`${styles['sidebar-nav-item']} ${activeItem === 'ventes' ? styles.active : ''}`}>
                        <a href="#ventes" onClick={() => onNavigate('ventes')}>
                            <FaCashRegister className={styles.icon} /> <span>Gestion des Ventes</span>
                        </a>
                    </li>
                    <li className={`${styles['sidebar-nav-item']} ${activeItem === 'versements' ? styles.active : ''}`}>
                        <a href="#versements" onClick={() => onNavigate('versements')}>
                            <FaMoneyBillWave className={styles.icon} /> <span>Gestion des Versements</span>
                        </a>
                    </li>
                    <li className={`${styles['sidebar-nav-item']} ${activeItem === 'credits' ? styles.active : ''}`}>
                        <a href="#credits" onClick={() => onNavigate('credits')}>
                            <FaCreditCard className={styles.icon} /> <span>Gestion des Crédits</span>
                        </a>
                    </li>
                    <li className={`${styles['sidebar-nav-item']} ${activeItem === 'rapports' ? styles.active : ''}`}>
                        <a href="#rapports" onClick={() => onNavigate('rapports')}>
                            <FaChartBar className={styles.icon} /> <span>Rapports d'Agence</span>
                        </a>
                    </li>
                    <li className={`${styles['sidebar-nav-item']} ${activeItem === 'profil' ? styles.active : ''}`}>
                        <a href="#profil" onClick={() => onNavigate('profil')}>
                            <FaUserCircle className={styles.icon} /> <span>Mon Profil</span>
                        </a>
                    </li>
                    <li className={`${styles['sidebar-nav-item']} ${activeItem === 'deconnexion' ? styles.active : ''}`}>
                        <a href="#deconnexion" onClick={() => {
                            alert("Logique de déconnexion ici...");
                            onNavigate('deconnexion');
                        }}>
                            <FaSignOutAlt className={styles.icon} /> <span>Déconnexion</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const DashboardCard = ({ title, value, icon, description, buttonText, onButtonClick, type = 'info' }) => {
    const cardClassName = `${styles['dashboard-card']} ${type === 'info' ? styles['overview-card'] : styles['action-card']}`;
    const iconElement = icon ? <div className={styles['card-icon']}>{icon}</div> : null;

    return (
        <div className={cardClassName}>
            {iconElement}
            {title && <h3 className={styles['card-title']}>{title}</h3>}
            {value !== undefined && <div className={styles['card-value']}>{value}</div>}
            {description && <p className={styles['card-description']}>{description}</p>}
            {buttonText && (
                <button className={styles['primary-button']} onClick={onButtonClick}>
                    {buttonText}
                </button>
            )}
        </div>
    );
};

const ResponsableAgenceDashboard = () => {
    const [activeSection, setActiveSection] = useState('accueil');

    const handleNavigate = (section) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'accueil':
                return (
                    <div>
                        <h1 className={styles['page-header']}>Bienvenue, Responsable d'Agence !</h1>
                        <div className={styles['overview-cards-container']}>
                            <DashboardCard
                                type="info"
                                icon={<FaBox />}
                                value={0}
                                title="Bouteilles en Stock"
                            />
                            <DashboardCard
                                type="info"
                                icon={<FaCashRegister />}
                                value={0}
                                title="Ventes du Jour"
                            />
                            <DashboardCard
                                type="info"
                                icon={<FaCreditCard />}
                                value={0}
                                title="Crédits en Cours"
                            />
                        </div>

                        <h2 className={styles['section-title']}>Activités Récentes</h2>
                        <div className={`${styles['dashboard-section']} ${styles['recent-activities']} ${styles['dashboard-card']}`}>
                            <p>La liste des activités récentes apparaitrait ici.</p>
                        </div>
                    </div>
                );

            case 'stocks':
                return (
                    <div>
                        <h1 className={styles['page-header']}>Gestion des Stocks</h1>
                        <div className={styles['action-cards-container']}>
                            <DashboardCard
                                type="action"
                                icon={<FaPlus />}
                                title="Enregistrer Réception"
                                description="Ajouter de nouvelles bouteilles de gaz au stock de l'agence."
                                buttonText="Nouvelle Réception"
                                onButtonClick={() => alert("Ouvrir formulaire Enregistrer Réception")}
                            />
                            <DashboardCard
                                type="action"
                                icon={<FaEye />}
                                title="Voir Stock Actuel"
                                description="Consulter le détail du stock disponible par type de bouteille."
                                buttonText="Voir le Stock"
                                onButtonClick={() => alert("Ouvrir page Voir Stock Actuel")}
                            />
                            <DashboardCard
                                type="action"
                                icon={<FaHistory />}
                                title="Historique Mouvements"
                                description="Accéder à l'historique détaillé des entrées et sorties de gaz."
                                buttonText="Voir l'Historique"
                                onButtonClick={() => alert("Ouvrir page Historique Mouvements")}
                            />
                        </div>
                        <h2 className={styles['section-title']}>Stock Détaillé par Type</h2>
                        <div className={styles['dashboard-section']}>
                           <table className={styles.table}> {/* Applique le style au tableau */}
                               <thead>
                                   <tr>
                                       <th>Type de Bouteille</th>
                                       <th>Quantité Disponible</th>
                                       <th>Prix Unitaire</th>
                                       <th>Dernier Réapprovisionnement</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       <td>0.0 kg</td>
                                       <td>0</td>
                                       <td>0.000 XAF</td>
                                       <td>--/--/----</td>
                                   </tr>
                                   <tr>
                                       <td>0.0 kg</td>
                                       <td>0</td>
                                       <td>0.000 XAF</td>
                                       <td>--/--/----</td>
                                   </tr>
                               </tbody>
                           </table>
                        </div>
                    </div>
                );

            case 'ventes':
                return (
                    <div>
                        <h1 className={styles['page-header']}>Gestion des Ventes</h1>
                        <div className={styles['action-cards-container']}>
                            <DashboardCard
                                type="action"
                                icon={<FaDollarSign />}
                                title="Enregistrer Vente Client"
                                description="Enregistrer une nouvelle vente de gaz à un client ou revendeur."
                                buttonText="Nouvelle Vente"
                                onButtonClick={() => alert("Ouvrir formulaire Enregistrer Vente")}
                            />
                            <DashboardCard
                                type="action"
                                icon={<FaHistory />}
                                title="Historique des Ventes"
                                description="Consulter toutes les transactions de vente passées."
                                buttonText="Voir Historique"
                                onButtonClick={() => alert("Ouvrir page Historique Ventes")}
                            />
                            <DashboardCard
                                type="action"
                                icon={<FaUndo />}
                                title="Gestion des Retours Clients"
                                description="Enregistrer les retours de bouteilles ou gérer les annulations."
                                buttonText="Gérer Retours"
                                onButtonClick={() => alert("Ouvrir page Gestion Retours")}
                            />
                        </div>
                    </div>
                );

            case 'versements':
                return (
                    <div>
                        <h1 className={styles['page-header']}>Gestion des Versements</h1>
                        <div className={styles['action-cards-container']}>
                            <DashboardCard
                                type="action"
                                icon={<FaMoneyBillWave />}
                                title="Enregistrer Versement"
                                description="Saisir les montants versés à l'entrepôt ou à la banque."
                                buttonText="Nouveau Versement"
                                onButtonClick={() => alert("Ouvrir formulaire Enregistrer Versement")}
                            />
                            <DashboardCard
                                type="action"
                                icon={<FaHistory />}
                                title="Historique des Versements"
                                description="Consulter la liste des versements effectués par l'agence."
                                buttonText="Voir Versements"
                                onButtonClick={() => alert("Ouvrir page Historique Versements")}
                            />
                        </div>
                    </div>
                );

            case 'credits':
                return (
                    <div>
                        <h1 className={styles['page-header']}>Gestion des Crédits</h1>
                        <div className={styles['action-cards-container']}>
                             <DashboardCard
                                type="action"
                                icon={<FaHandshake />}
                                title="Accorder Crédit"
                                description="Enregistrer un crédit accordé à un client ou revendeur."
                                buttonText="Accorder Crédit"
                                onButtonClick={() => alert("Ouvrir formulaire Accorder Crédit")}
                            />
                            <DashboardCard
                                type="action"
                                icon={<FaEye />}
                                title="Suivi des Crédits"
                                description="Visualiser les crédits en cours et leur statut de remboursement."
                                buttonText="Suivre Crédits"
                                onButtonClick={() => alert("Ouvrir page Suivi Crédits")}
                            />
                             <DashboardCard
                                type="action"
                                icon={<FaMoneyBillWave />}
                                title="Enregistrer Remboursement"
                                description="Saisir un paiement partiel ou total pour un crédit."
                                buttonText="Rembourser"
                                onButtonClick={() => alert("Ouvrir formulaire Enregistrer Remboursement")}
                            />
                        </div>
                    </div>
                );

            case 'rapports':
                return (
                    <div>
                        <h1 className={styles['page-header']}>Rapports d'Agence</h1>
                        <div className={styles['action-cards-container']}>
                            <DashboardCard
                                type="action"
                                icon={<FaChartBar />}
                                title="Rapport Quotidien des Ventes"
                                description="Générer un rapport des ventes et mouvements de stock du jour."
                                buttonText="Rapport Quotidien"
                                onButtonClick={() => alert("Générer Rapport Quotidien des Ventes")}
                            />
                            <DashboardCard
                                type="action"
                                icon={<FaChartBar />}
                                title="Rapport de Crédits"
                                description="Analyser l'état des crédits accordés et des recouvrements."
                                buttonText="Rapport Crédits"
                                onButtonClick={() => alert("Générer Rapport de Crédits")}
                            />
                        </div>
                    </div>
                );

            case 'profil':
                return (
                    <div>
                        <h1 className={styles['page-header']}>Mon Profil</h1>
                        <div className={styles['dashboard-card']} style={{ padding: '30px' }}>
                            <p>Informations de profil du responsable d'agence :</p>
                            <ul>
                                <li>**Nom Complet :** Jean Dupont</li>
                                <li>**Email :** responsable.agence@gazflow.com</li>
                                <li>**Agence :** Agence Yaoundé Centre</li>   
                            </ul>
                            <button className={styles['primary-button']} onClick={() => alert("Ouvrir page modifier profil")}>
                                Modifier mon Profil
                            </button>
                        </div>
                    </div>
                );

            case 'deconnexion':
                return (
                    <div>
                        <h1 className={styles['page-header']}>Déconnexion</h1>
                        <p>Vous avez été déconnecté(e). Au revoir !</p>
                    </div>
                );

            default:
                return (
                    <div>
                        <h1 className={styles['page-header']}>Section Inconnue</h1>
                        <p>Oups ! Cette section n'existe pas ou est en construction.</p>
                        <p>Vérifie si le nom de la section dans la sidebar correspond au 'case' dans le `renderContent`.</p>
                    </div>
                );
        }
    };

    return (
        <div className={styles['dashboard-container']}>
            <Sidebar activeItem={activeSection} onNavigate={handleNavigate} />
            <div className={styles['main-content']}>
                {renderContent()}
            </div>
        </div>
    );
};

export default ResponsableAgenceDashboard;