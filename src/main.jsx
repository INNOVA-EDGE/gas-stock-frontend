import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import { AuthProvider } from './context/AuthContext'; // Importez le AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  {/* Enveloppez App avec AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);