import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/authService';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          // AMÉLIORATION : On s'assure de filtrer les deux rôles par défaut
          const userRole = (decodedToken.realm_access?.roles || []).find(r => r !== 'default-roles-gasstockrealm' && r !== 'uma_authorization');
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
    
    // AMÉLIORATION : On s'assure de filtrer les deux rôles par défaut
    const userRole = (decodedToken.realm_access?.roles || []).find(r => r !== 'default-roles-gasstockrealm' && r !== 'uma_authorization');

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
