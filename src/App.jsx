// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// ... (vos autres imports)
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UserRolesSection from './components/UserRolesSection';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import InscriptionReussie from './pages/InscriptionReussie';
import AdminDashboard from './components/Dashboards/AdminDashboard/AdminDashboard.jsx';
import ClientDashboard from './components/Dashboards/ClientDashboard/ClientDashboard.jsx';
import ResponsableSuiviDashboard from './components/Dashboards/ResponsableSuiviDashboard/ResponsableSuiviDashboard.jsx';
import ResponsableUniteProductionDashboard from './components/Dashboards/ResponsableUniteProductionDashboard/ResponsableUniteProductionDashboard.jsx';
import ResponsableEntrepotDashboard from './components/Dashboards/ResponsableEntrepotDashboard/ResponsableEntrepotDashboard.jsx';
import ResponsableAgenceDashboard from './components/Dashboards/ResponsableAgenceDashboard/ResponsableAgenceDashboard.jsx';
import TransporteurDashboard from './components/Dashboards/TransporteurDashboard/TransporteurDashboard.jsx';
import DashboardRedirect from './components/DashboardRedirect'; // Importer le nouveau composant

const HomePage = () => (
  <div className="App">
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <UserRolesSection />
      <HowItWorksSection />
    </main>
    <Footer/>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider> {/* On enveloppe toute l'application */}
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/inscription-reussie" element={<InscriptionReussie />} />

          {/* Route de redirection magique */}
          <Route path="/dashboard" element={<DashboardRedirect />} />

          {/* Routes des dashboards (on pourra les protéger plus tard) */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/client" element={<ClientDashboard />} />
          <Route path="/dashboard/responsable-suivi" element={<ResponsableSuiviDashboard />} />
          <Route path="/dashboard/responsable-unite-production" element={<ResponsableUniteProductionDashboard />} />
          <Route path="/dashboard/responsable-entrepot" element={<ResponsableEntrepotDashboard />} />
          <Route path="/dashboard/responsable-agence" element={<ResponsableAgenceDashboard />} />
          <Route path="/dashboard/transporteur" element={<TransporteurDashboard />} />
          
          <Route path="*" element={<div>Page introuvable (404)</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
