import axios from 'axios';

// --- Configuration ---
const KEYCLOAK_URL = 'http://localhost:8180/realms/GasStockRealm/protocol/openid-connect/token';
const API_URL = 'http://localhost:8080/api/v1';

// Remplacez cette valeur par le "Client secret" de votre client "gas-stock-backend" dans Keycloak
const KEYCLOAK_CLIENT_SECRET = 'Di0Dz7B4AanMS6Br4zg8pI7XBa1PE0Eq';

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
    params.append('client_id', 'gas-stock-backend');
    params.append('client_secret', KEYCLOAK_CLIENT_SECRET);
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
