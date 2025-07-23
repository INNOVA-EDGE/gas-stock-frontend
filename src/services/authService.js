import axios from 'axios';

// --- Configuration ---
const KEYCLOAK_URL = 'http://localhost:8180/realms/GasStockRealm/protocol/openid-connect/token';
const API_URL = 'https://gas-stock-management-t57r.onrender.com/api/v1';

// --- SUPPRIMÉ ---
// Le secret ne doit JAMAIS être dans le code du frontend.
// const KEYCLOAK_CLIENT_SECRET = '...'; 

const apiClient = axios.create({
  baseURL: API_URL,
});

/**
 * Tente de connecter un utilisateur en échangeant son identifiant/mot de passe contre un jeton.
 * @param {string} username L'identifiant de l'utilisateur.
 * @param {string} password Le mot de passe de l'utilisateur.
 * @returns {Promise<object>} Les données de la réponse de Keycloak, incluant l'access_token.
 */
const login = async (username, password) => {
  try {
    const params = new URLSearchParams();
    // MODIFIÉ : On utilise le client public "gas-stock-frontend"
    params.append('client_id', 'gas-stock-frontend');
    
    // SUPPRIMÉ : Un client public n'a pas besoin de secret pour cette opération.
    // params.append('client_secret', KEYCLOAK_CLIENT_SECRET);
    
    params.append('grant_type', 'password');
    params.append('username', username);
    params.append('password', password);

    const response = await axios.post(KEYCLOAK_URL, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // On stocke les jetons dans le localStorage pour la persistance de session
    if (response.data.access_token) {
      localStorage.setItem('accessToken', response.data.access_token);
    }

    if (response.data.refresh_token) {
      localStorage.setItem('refreshToken', response.data.refresh_token);
    }

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la connexion :", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.error_description || "Identifiants invalides ou erreur serveur."
    );
  }
};

/**
 * Appelle l'API backend pour inscrire un nouveau client.
 * Cette fonction était déjà correcte.
 * @param {object} registrationData Les données du formulaire d'inscription.
 * @returns {Promise<object>} La réponse de l'API backend.
 */
const register = (registrationData) => {
  return apiClient.post('/utilisateurs/register-client', registrationData);
};

/**
 * Déconnecte l'utilisateur en supprimant les jetons.
 */
const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const authService = {
  login,
  register,
  logout,
};
