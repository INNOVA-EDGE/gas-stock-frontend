// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    // Si pas authentifié, rediriger vers la page de connexion
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Si authentifié mais rôle non autorisé, rediriger vers une page d'accès refusé
    return <Navigate to="/unauthorized" replace />; // Créez une page /unauthorized si besoin
  }

  return children;
};

export default PrivateRoute;