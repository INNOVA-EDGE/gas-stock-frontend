import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/authService';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

// --- LA SOLUTION EST ICI ---
// On définit une liste de nos rôles applicatifs par ordre d'importance
const ROLES_PRIORITY = [
  'ADMIN',
  'RESPONSABLE_SUIVI',
  'RESPONSABLE_UNITE_PRODUCTION',
  'RESPONSABLE_ENTREPOT',
  'RESPONSABLE_AGENCE',
  'TRANSPORTEUR',
  'CLIENT_REVENDEUR',
  'CLIENT_MENAGE',
];

// Fonction pour trouver le rôle le plus élevé d'un utilisateur
const getHighestPriorityRole = (userRoles = []) => {
  for (const role of ROLES_PRIORITY) {
    if (userRoles.includes(role)) {
      return role; // On retourne le premier rôle trouvé qui correspond à notre liste
    }
  }
  return null; // Aucun rôle applicatif trouvé
};
// -------------------------

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          // On utilise notre nouvelle fonction intelligente
          const userRole = getHighestPriorityRole(decodedToken.realm_access?.roles);
          setUser({
            token,
            identifiant: decodedToken.preferred_username,
            role: userRole,
          });
        } else {
          authService.logout();
        }
      } catch (error) {
        console.error("Jeton invalide, déconnexion.");
        authService.logout();
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const data = await authService.login(username, password);
    const decodedToken = jwtDecode(data.access_token);
    
    // On utilise notre nouvelle fonction intelligente
    const userRole = getHighestPriorityRole(decodedToken.realm_access?.roles);

    const userData = {
      token: data.access_token,
      identifiant: decodedToken.preferred_username,
      role: userRole,
    };
    setUser(userData);
    return userData;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser facilement le contexte
export const useAuth = () => {
  return useContext(AuthContext);
};
