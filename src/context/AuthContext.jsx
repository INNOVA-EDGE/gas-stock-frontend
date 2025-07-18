import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/authService';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Au chargement de l'app, on vérifie s'il y a un jeton valide dans le localStorage
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // On vérifie si le jeton n'est pas expiré
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser({
            token,
            identifiant: decodedToken.preferred_username,
            role: (decodedToken.realm_access?.roles || []).find(r => r !== 'default-roles-gasstockrealm'),
          });
        } else {
          // Si le jeton est expiré, on le supprime
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
    
    const userData = {
      token: data.access_token,
      identifiant: decodedToken.preferred_username,
      role: (decodedToken.realm_access?.roles || []).find(r => r !== 'default-roles-gasstockrealm'),
    };
    setUser(userData);
    return userData; // On retourne les données pour la redirection
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