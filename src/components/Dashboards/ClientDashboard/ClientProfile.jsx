// src/components/Dashboards/ClientDashboard/ClientProfile.jsx
import React, { useState } from 'react';
import styles from './ClientDashboard.module.css'; // Réutiliser le CSS existant pour la mise en page
import profileStyles from './ClientProfile.module.css'; // Nouveau fichier CSS pour les styles spécifiques
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSignOutAlt, FaTrashAlt, FaKey, FaEdit, FaSave, FaTimes, FaCamera } from 'react-icons/fa';

const ClientProfile = () => {
  const navigate = useNavigate();

  // État initial de l'utilisateur (vide pour l'instant)
  const [user, setUser] = useState({
    nomComplet: "",
    email: "",
    telephone: "",
    adresse: "",
    profilePicture: null, // Pour stocker l'URL temporaire de l'image sélectionnée
  });

  // État pour gérer le mode d'édition
  const [isEditing, setIsEditing] = useState(false);
  // État pour stocker les modifications avant de les enregistrer
  const [editedUser, setEditedUser] = useState({ ...user });

  // Gérer le changement des champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  // Gérer la sélection de la photo de profil
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Créer une URL temporaire pour afficher l'aperçu de l'image
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedUser(prev => ({ ...prev, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Basculer en mode édition
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedUser({ ...user }); // Copier les données actuelles pour l'édition
  };

  // Enregistrer les modifications
  const handleSaveClick = () => {
    // Ici, vous enverriez `editedUser` à votre API backend
    console.log("Enregistrement des modifications :", editedUser);
    // Après un succès (réponse de l'API), mettez à jour l'état `user`
    setUser({ ...editedUser });
    setIsEditing(false);
    // Afficher une notification de succès (optionnel)
    alert("Profil mis à jour avec succès !");
  };

  // Annuler les modifications
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUser({ ...user }); // Réinitialiser `editedUser` aux valeurs originales
  };

  const handleLogout = () => {
    console.log("Déconnexion de l'utilisateur...");
    navigate('/login'); 
  };

  const handleChangePassword = () => {
    console.log("Redirection pour réinitialiser le mot de passe...");
    navigate('/reset-password'); 
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
      console.log("Suppression du compte de l'utilisateur...");
      // Appel API pour supprimer le compte
      navigate('/register'); 
    }
  };

  return (
    <main className={styles.mainContent}>
      <header className={styles.contentHeader}>
        <h1 className={styles.welcomeMessage}>Mon Profil</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes Informations</h2>
        
        <div className={profileStyles.profileHeader}>
          <div className={profileStyles.profilePictureContainer}>
            <img 
              src={editedUser.profilePicture || "https://via.placeholder.com/150?text=Profil"} 
              alt="Photo de profil" 
              className={profileStyles.profilePicture} 
            />
            {isEditing && (
              <label htmlFor="profilePictureInput" className={profileStyles.uploadIconButton}>
                <FaCamera />
                <input 
                  id="profilePictureInput" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  style={{ display: 'none' }} 
                />
              </label>
            )}
          </div>
          <h3 className={profileStyles.userName}>{user.nomComplet || "Nom Complet"}</h3>
        </div>

        <div className={profileStyles.profileInfoGrid}>
          <div className={profileStyles.profileInfoItem}>
            <FaUserCircle className={profileStyles.profileInfoIcon} />
            <div className={profileStyles.profileInfoText}>
              <h4>Nom Complet</h4>
              {isEditing ? (
                <input 
                  type="text" 
                  name="nomComplet" 
                  value={editedUser.nomComplet} 
                  onChange={handleChange} 
                  className={profileStyles.profileInput}
                />
              ) : (
                <p>{user.nomComplet || "Non renseigné"}</p>
              )}
            </div>
          </div>
          <div className={profileStyles.profileInfoItem}>
            <FaEnvelope className={profileStyles.profileInfoIcon} />
            <div className={profileStyles.profileInfoText}>
              <h4>Email</h4>
              {isEditing ? (
                <input 
                  type="email" 
                  name="email" 
                  value={editedUser.email} 
                  onChange={handleChange} 
                  className={profileStyles.profileInput}
                />
              ) : (
                <p>{user.email || "Non renseigné"}</p>
              )}
            </div>
          </div>
          <div className={profileStyles.profileInfoItem}>
            <FaPhone className={profileStyles.profileInfoIcon} />
            <div className={profileStyles.profileInfoText}>
              <h4>Téléphone</h4>
              {isEditing ? (
                <input 
                  type="tel" 
                  name="telephone" 
                  value={editedUser.telephone} 
                  onChange={handleChange} 
                  className={profileStyles.profileInput}
                />
              ) : (
                <p>{user.telephone || "Non renseigné"}</p>
              )}
            </div>
          </div>
          <div className={profileStyles.profileInfoItem}>
            <FaMapMarkerAlt className={profileStyles.profileInfoIcon} />
            <div className={profileStyles.profileInfoText}>
              <h4>Adresse</h4>
              {isEditing ? (
                <input 
                  type="text" 
                  name="adresse" 
                  value={editedUser.adresse} 
                  onChange={handleChange} 
                  className={profileStyles.profileInput}
                />
              ) : (
                <p>{user.adresse || "Non renseigné"}</p>
              )}
            </div>
          </div>
        </div>

        <div className={profileStyles.actionButtons}>
          {isEditing ? (
            <>
              <button onClick={handleSaveClick} className={`${styles.primaryActionButton} ${profileStyles.saveButton}`}>
                <FaSave className={styles.secondaryButtonIcon} /> Enregistrer
              </button>
              <button onClick={handleCancelClick} className={`${styles.secondaryActionButton} ${profileStyles.cancelButton}`}>
                <FaTimes className={styles.secondaryButtonIcon} /> Annuler
              </button>
            </>
          ) : (
            <button onClick={handleEditClick} className={`${styles.primaryActionButton} ${profileStyles.editButton}`}>
              <FaEdit className={styles.secondaryButtonIcon} /> Modifier mes informations
            </button>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Gestion du Compte</h2>
        <div className={styles.accountManagementActions}>
          <button onClick={handleChangePassword} className={`${styles.secondaryActionButton} ${styles.actionButton}`}>
            <FaKey className={styles.secondaryButtonIcon} /> Réinitialiser Mot de Passe
          </button>
          <button onClick={handleLogout} className={`${styles.secondaryActionButton} ${styles.actionButton}`}>
            <FaSignOutAlt className={styles.secondaryButtonIcon} /> Déconnexion
          </button>
          <button onClick={handleDeleteAccount} className={`${styles.secondaryActionButton} ${styles.deleteButton}`}>
            <FaTrashAlt className={styles.secondaryButtonIcon} /> Supprimer le Compte
          </button>
        </div>
      </section>
    </main>
  );
};

export default ClientProfile;