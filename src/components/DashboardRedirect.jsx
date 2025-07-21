import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Ce dictionnaire fait le lien entre un rôle et l'URL de son dashboard
const roleDashboardMap = {
  ADMIN: '/dashboard/admin',
  CLIENT_MENAGE: '/dashboard/client',
  CLIENT_REVENDEUR: '/dashboard/client',
  RESPONSABLE_SUIVI: '/dashboard/responsable-suivi',
  RESPONSABLE_UNITE_PRODUCTION: '/dashboard/responsable-unite-production',
  RESPONSABLE_ENTREPOT: '/dashboard/responsable-entrepot',
  RESPONSABLE_AGENCE: '/dashboard/responsable-agence',
  TRANSPORTEUR: '/dashboard/transporteur',
};

export default function DashboardRedirect() {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Chargement de votre session...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }
    
    const dashboardPath = roleDashboardMap[user.role];

    if (dashboardPath) {
        return <Navigate to={dashboardPath} />;
    }

    // Si le rôle n'est pas trouvé, on redirige vers l'accueil
    return <Navigate to="/" />;
};
