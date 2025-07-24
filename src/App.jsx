// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

// IMPORTS DES COMPOSANTS DE LA PAGE D'ACCUEIL PUBLIQUE
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import UserRolesSection from './components/UserRolesSection'
import HowItWorksSection from './components/HowItWorksSection'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import InscriptionReussie from './pages/InscriptionReussie'

// IMPORTS DES DASHBOARDS PRINCIPAUX
import AdminDashboard from './components/Dashboards/AdminDashboard/AdminDashboard.jsx'
import ResponsableSuiviDashboard from './components/Dashboards/ResponsableSuiviDashboard/ResponsableSuiviDashboard.jsx'
import ResponsableEntrepotDashboard from './components/Dashboards/ResponsableEntrepotDashboard/ResponsableEntrepotDashboard.jsx'
import ResponsableAgenceDashboard from './components/Dashboards/ResponsableAgenceDashboard/ResponsableAgenceDashboard.jsx'

// Composants du DASHBOARD TRANSPORTEUR
import TransporteurDashboard from './components/Dashboards/TransporteurDashboard/TransporteurDashboard'
import TransporteurHome from './components/Dashboards/TransporteurDashboard/TransporteurHome'
import MesLivraisonsPage from './components/Dashboards/TransporteurDashboard/MesLivraisonsPage' // Assurez-vous que ce fichier existe
import HistoriqueTransporteurPage from './components/Dashboards/TransporteurDashboard/HistoriqueTransporteurPage' // Assurez-vous que ce fichier existe
import ProfileTransporteurPage from './components/Dashboards/TransporteurDashboard/ProfileTransporteurPage' // Assurez-vous que ce fichier existe

import DashboardRedirect from './components/DashboardRedirect' // Importer le nouveau composant

// IMPORTS DES COMPOSANTS DU DASHBOARD CLIENT
import ClientDashboard from './components/Dashboards/ClientDashboard/ClientDashboard.jsx'
import ClientHomeDashboard from './components/Dashboards/ClientDashboard/ClientHomeDashboard.jsx'
import ClientProfile from './components/Dashboards/ClientDashboard/ClientProfile.jsx'
import ClientOrders from './components/Dashboards/ClientDashboard/ClientOrders.jsx'
import ClientReturns from './components/Dashboards/ClientDashboard/ClientReturns.jsx'
import ClientInvoices from './components/Dashboards/ClientDashboard/ClientInvoices.jsx'
import ClientDeliveryTracking from './components/Dashboards/ClientDashboard/ClientDeliveryTracking.jsx'
import ClientNewOrder from './components/Dashboards/ClientDashboard/ClientNewOrder.jsx'
import ClientNewReturn from './components/Dashboards/ClientDashboard/ClientNewReturn.jsx'
import ClientCartSummary from './components/Dashboards/ClientDashboard/ClientCartSummary.jsx'
import ClientProductDetails from './components/Dashboards/ClientDashboard/ClientProductDetails.jsx'

// IMPORTS DES COMPOSANTS DU DASHBOARD RESPONSABLE UNITE DE PRODUCTION
import ResponsableUniteProductionDashboard from './components/Dashboards/ResponsableUniteProductionDashboard/ResponsableUniteProductionDashboard.jsx'
import AccueilDashboard from './components/Dashboards/ResponsableUniteProductionDashboard/AccueilDashboard.jsx'
import GestionProductionLanding from './components/Dashboards/ResponsableUniteProductionDashboard/GestionProductionLanding.jsx'
import PlanifierProduction from './components/Dashboards/ResponsableUniteProductionDashboard/PlanifierProduction.jsx'
import EnregistrerProduction from './components/Dashboards/ResponsableUniteProductionDashboard/EnregistrerProduction.jsx'
import DeclarerIncident from './components/Dashboards/ResponsableUniteProductionDashboard/DeclarerIncident.jsx'
import GestionStocks from './components/Dashboards/ResponsableUniteProductionDashboard/GestionStocks.jsx'
import ExpeditionBouteilles from './components/Dashboards/ResponsableUniteProductionDashboard/ExpeditionBouteilles.jsx'
import SuiviExpeditions from './components/Dashboards/ResponsableUniteProductionDashboard/SuiviExpeditions.jsx'
import RapportsProduction from './components/Dashboards/ResponsableUniteProductionDashboard/RapportsProduction.jsx'
import UserProfile from './components/Dashboards/ResponsableUniteProductionDashboard/UserProfile.jsx'

// Composant pour la page de réinitialisation de mot de passe (placeholder)
const ResetPasswordPage = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Page de Réinitialisation de Mot de Passe</h1>
    <p>
      Ce composant représentera la logique de réinitialisation du mot de passe.
    </p>
  </div>
)

// Composant pour la page de déconnexion (placeholder)
const LogoutPage = () => (
  <div style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Déconnexion en cours...</h1>
    <p>Vous avez été déconnecté avec succès.</p>
    {/* Ajoutez ici la logique de déconnexion réelle, par exemple redirection vers /login */}
  </div>
)

const HomePage = () => (
  <div className='App'>
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <UserRolesSection />
      <HowItWorksSection />
    </main>
    <Footer />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Routes publiques */}
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/inscription-reussie' element={<InscriptionReussie />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/logout' element={<LogoutPage />} />{' '}
          {/* Route globale pour la déconnexion */}
          {/* Route de redirection magique */}
          <Route path='/dashboard' element={<DashboardRedirect />} />
          {/* Routes des dashboards (on pourra les protéger plus tard) */}
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
          <Route
            path='/dashboard/responsable-suivi'
            element={<ResponsableSuiviDashboard />}
          />
          <Route
            path='/dashboard/responsable-entrepot'
            element={<ResponsableEntrepotDashboard />}
          />
          <Route
            path='/dashboard/responsable-agence'
            element={<ResponsableAgenceDashboard />}
          />
          {/* ROUTES IMBRIQUÉES POUR LE DASHBOARD TRANSPORTEUR */}
          {/* Le TransporteurDashboard agit comme le layout parent avec sa sidebar et son header */}
          <Route path='dashboard/transporteur' element={<TransporteurDashboard />}>
            {/* Route par défaut pour /transporteur : affiche la page d'accueil du transporteur */}
            <Route index element={<TransporteurHome />} />

            {/* Sous-routes pour les sections de la sidebar */}
            <Route path='livraisons' element={<MesLivraisonsPage />} />
            <Route path='historique' element={<HistoriqueTransporteurPage />} />
            <Route path='profil' element={<ProfileTransporteurPage />} />
            {/* La route de déconnexion est maintenant gérée globalement ci-dessus, pas ici */}
          </Route>
          {/* ROUTES IMBRIQUÉES POUR LE DASHBOARD RESPONSABLE UNITE DE PRODUCTION */}
          <Route
            path='/dashboard/production'
            element={<ResponsableUniteProductionDashboard />}
          >
            <Route index element={<AccueilDashboard />} />
            <Route path='gestion-production'>
              <Route index element={<GestionProductionLanding />} />
              <Route path='planifier' element={<PlanifierProduction />} />
              <Route path='enregistrer' element={<EnregistrerProduction />} />
              <Route path='declarer-incident' element={<DeclarerIncident />} />
            </Route>
            <Route path='gestion-stocks' element={<GestionStocks />} />
            <Route path='expedition' element={<ExpeditionBouteilles />} />
            <Route path='suivi-expeditions' element={<SuiviExpeditions />} />
            <Route
              path='rapports-production'
              element={<RapportsProduction />}
            />
            <Route path='profile' element={<UserProfile />} />
          </Route>
          {/* ROUTES IMBRIQUÉES POUR LE DASHBOARD CLIENT */}
          <Route path='/dashboard/client' element={<ClientDashboard />}>
            <Route index element={<ClientHomeDashboard />} />
            <Route path='profile' element={<ClientProfile />} />
            <Route path='orders' element={<ClientOrders />} />
            <Route path='returns' element={<ClientReturns />} />
            <Route path='invoices' element={<ClientInvoices />} />
            <Route
              path='delivery-tracking'
              element={<ClientDeliveryTracking />}
            />
            <Route path='new-order' element={<ClientNewOrder />} />
            <Route path='returns/new' element={<ClientNewReturn />} />
            <Route path='cart-summary' element={<ClientCartSummary />} />
            <Route
              path='product-details/:productId'
              element={<ClientProductDetails />}
            />
          </Route>
          {/* Route 404 - Page introuvable */}
          <Route path='*' element={<div>Page introuvable (404)</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
