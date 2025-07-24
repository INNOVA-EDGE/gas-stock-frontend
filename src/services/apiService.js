import axios from 'axios';

// IMPORTANT : L'URL de l'API doit être lue depuis les variables d'environnement
// pour fonctionner en local ET en production.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';
const createEmployee = (employeeData) => apiClient.post('/utilisateurs/create-employee', employeeData);

const apiClient = axios.create({
  baseURL: API_URL,
});

// Cet "intercepteur" ajoute automatiquement le jeton d'authentification
// à chaque requête envoyée à notre backend. C'est magique !
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Fonctions pour les actions de l'administrateur
const getAllUsers = () => apiClient.get('/utilisateurs');
const approveReseller = (id) => apiClient.post(`/utilisateurs/approve-reseller/${id}`);
const toggleUserStatus = (id) => apiClient.put(`/utilisateurs/${id}/toggle-status`);
const deleteUser = (id) => apiClient.delete(`/utilisateurs/${id}`);
// const createEmployee = (employeeData) => apiClient.post('/utilisateurs/create-employee', employeeData);

export const apiService = {
    getAllUsers,
    approveReseller,
    toggleUserStatus,
    deleteUser,
    createEmployee, // On ajoute la nouvelle fonction ici
  };