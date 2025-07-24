// src/components/Dashboards/ResponsableUniteProductionDashboard/UserProfile.jsx
import React from 'react'
import userProfileStyles from './UserProfile.module.css'
import { FaUserCircle, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa'

const UserProfile = () => {
  return (
    <div className={userProfileStyles.profilePage}>
      <section className={userProfileStyles.section}>
        <div className={userProfileStyles.profileHeader}>
          <FaUserCircle className={userProfileStyles.profileAvatar} />
          <h2 className={userProfileStyles.profileName}>
            Nom du Responsable d'Unité
          </h2>
          <p className={userProfileStyles.profileRole}>
            Responsable Unité de Production
          </p>
        </div>
        <div className={userProfileStyles.profileDetails}>
          <div className={userProfileStyles.detailItem}>
            <FaEnvelope className={userProfileStyles.detailIcon} />
            <p>
              <strong>Email :</strong> responsable.prod@example.com
            </p>
          </div>
          <div className={userProfileStyles.detailItem}>
            <FaPhone className={userProfileStyles.detailIcon} />
            <p>
              <strong>Téléphone :</strong> +237 6xx-xxx-xxx
            </p>
          </div>
          <div className={userProfileStyles.detailItem}>
            <FaBuilding className={userProfileStyles.detailIcon} />
            <p>
              <strong>Unité :</strong> Unité de production de Bafoussam
            </p>
          </div>
        </div>
        <button className={userProfileStyles.editProfileButton}>
          Modifier le profil
        </button>
      </section>
    </div>
  )
}

export default UserProfile
