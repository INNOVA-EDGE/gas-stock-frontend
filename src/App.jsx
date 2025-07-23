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


// IMPORTS DES DASHBOARDS PRINCIPAUX

import AdminDashboard from './components/Dashboards/AdminDashboard/AdminDashboard.jsx';
import ResponsableSuiviDashboard from './components/Dashboards/ResponsableSuiviDashboard/ResponsableSuiviDashboard.jsx';
import ResponsableUniteProductionDashboard from './components/Dashboards/ResponsableUniteProductionDashboard/ResponsableUniteProductionDashboard.jsx';
import ResponsableEntrepotDashboard from './components/Dashboards/ResponsableEntrepotDashboard/ResponsableEntrepotDashboard.jsx';
import ResponsableAgenceDashboard from './components/Dashboards/ResponsableAgenceDashboard/ResponsableAgenceDashboard.jsx';
import TransporteurDashboard from './components/Dashboards/TransporteurDashboard/TransporteurDashboard.jsx';
import DashboardRedirect from './components/DashboardRedirect'; // Importer le nouveau composant


// NOUVEL IMPORT : Le ClientDashboard devient le layout parent
import ClientDashboard from './components/Dashboards/ClientDashboard/ClientDashboard.jsx';
// NOUVEL IMPORT : La page d'accueil spécifique au dashboard client
import ClientHomeDashboard from './components/Dashboards/ClientDashboard/ClientHomeDashboard.jsx';

// IMPORTS DES SOUS-PAGES DU CLIENT (placeholders)
import ClientProfile from './components/Dashboards/ClientDashboard/ClientProfile.jsx';
import ClientOrders from './components/Dashboards/ClientDashboard/ClientOrders.jsx';
import ClientReturns from './components/Dashboards/ClientDashboard/ClientReturns.jsx';
// import ClientCredit from './components/Dashboards/ClientDashboard/ClientCredit.jsx';
import ClientInvoices from './components/Dashboards/ClientDashboard/ClientInvoices.jsx';
import ClientDeliveryTracking from './components/Dashboards/ClientDashboard/ClientDeliveryTracking.jsx';
import ClientNewOrder from './components/Dashboards/ClientDashboard/ClientNewOrder.jsx';
// import ClientReturnHistory from './components/Dashboards/ClientDashboard/ClientReturnHistory.jsx';
import ClientNewReturn from './components/Dashboards/ClientDashboard/ClientNewReturn.jsx';
import ClientCartSummary from './components/Dashboards/ClientDashboard/ClientCartSummary.jsx';
import ClientProductDetails from './components/Dashboards/ClientDashboard/ClientProductDetails.jsx';

// Composant pour la page de réinitialisation de mot de passe (placeholder)
const ResetPasswordPage = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Page de Réinitialisation de Mot de Passe</h1>
    <p>Ce composant représentera la logique de réinitialisation du mot de passe.</p>
  </div>
);

// Votre composant HomePage reste le même

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
      <AuthProvider>
        {' '}
        {/* On enveloppe toute l'application */}
        <Routes>
          {/* Routes publiques */}
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/inscription-reussie' element={<InscriptionReussie />} />

          {/* Route de redirection magique */}
          <Route path='/dashboard' element={<DashboardRedirect />} />

          {/* Routes des dashboards (on pourra les protéger plus tard) */}
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
          <Route path='/dashboard/client' element={<ClientDashboard />} />
          <Route
            path='/dashboard/responsable-suivi'
            element={<ResponsableSuiviDashboard />}
          />
          <Route
            path='/dashboard/responsable-unite-production'
            element={<ResponsableUniteProductionDashboard />}
          />
          <Route
            path='/dashboard/responsable-entrepot'
            element={<ResponsableEntrepotDashboard />}
          />
          <Route
            path='/dashboard/responsable-agence'
            element={<ResponsableAgenceDashboard />}
          />
          <Route
            path='/dashboard/transporteur'
            element={<TransporteurDashboard />}
          />

          {/* ROUTES IMBRIQUÉES POUR LE DASHBOARD CLIENT */}
          {/* Le ClientDashboard agit comme le layout parent avec sa sidebar */}
          <Route path='/dashboard/client' element={<ClientDashboard />}>
            {/* Route par défaut pour /dashboard/client (affiche l'aperçu) */}
            <Route index element={<ClientHomeDashboard />} />
            {/* Sous-routes pour les différentes sections du client */}
            <Route path='profile' element={<ClientProfile />} />
            <Route path='orders' element={<ClientOrders />} />
            <Route path='returns' element={<ClientReturns />} />
            {/* <Route path="credit" element={<ClientCredit />} /> */}
            <Route path='invoices' element={<ClientInvoices />} />
            <Route
              path='delivery-tracking'
              element={<ClientDeliveryTracking />}
            />
            <Route path='new-order' element={<ClientNewOrder />} />
            {/* <Route path="returns/history" element={<ClientReturnHistory />} /> */}
            <Route path='returns/new' element={<ClientNewReturn />} />
            <Route
              path='/dashboard/client/cart-summary'
              element={<ClientCartSummary />}
            />
            <Route
              path='/dashboard/client/product-details/:productId'
              element={<ClientProductDetails />}
            />
            {/* Ajoutez d'autres sous-routes ici si nécessaire */}
          </Route>

          <Route path='*' element={<div>Page introuvable (404)</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}


export default App;
