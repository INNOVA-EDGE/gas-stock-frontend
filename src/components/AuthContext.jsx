// src/components/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Simulez l'état de connexion et le rôle.
  // En production, ces valeurs viendraient de l'authentification réelle (login).
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // ex: "administrateur", "client", etc.

  // Pour le test, récupérons le rôle du localStorage au chargement initial
  useEffect(() => {
    const storedRole = localStorage.getItem('mockUserRole');
    if (storedRole) {
      setUserRole(storedRole);
      setIsAuthenticated(true);
    }
    // Pour un test rapide, vous pouvez décommenter la ligne ci-dessous
    // et changer le rôle pour voir différents dashboards par défaut au démarrage.
    // login("administrateur"); // ou "client", "responsable-suivi", etc.
  }, []);

  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('mockUserRole', role); // Simule le stockage du rôle
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('mockUserRole');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};