// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateEmployeePage from './pages/CreateEmployeePage'; 
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
import TransporteurDashboard from './components/Dashboards/TransporteurDashboard/TransporteurDashboard.jsx'
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
          <Route path='/reset-password' element={<ResetPasswordPage />} />{' '}
          {/* Ajout de la route pour ResetPasswordPage */}
          {/* Route de redirection magique */}
          <Route path='/dashboard' element={<DashboardRedirect />} />
          <Route path="/admin/create-employee" element={<CreateEmployeePage />} /> {/* NOUVELLE ROUTE */}
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
          <Route
            path='/dashboard/transporteur'
            element={<TransporteurDashboard />}
          />
          {/* ROUTES IMBRIQUÉES POUR LE DASHBOARD RESPONSABLE UNITE DE PRODUCTION */}
          <Route
            path='/dashboard/production'
            element={<ResponsableUniteProductionDashboard />}
          >
            <Route index element={<AccueilDashboard />} />{' '}
            {/* Page d'accueil par défaut */}
            <Route path='gestion-production'>
              <Route index element={<GestionProductionLanding />} />{' '}
              {/* Page d'accueil de la gestion de production */}
              <Route path='planifier' element={<PlanifierProduction />} />
              <Route path='enregistrer' element={<EnregistrerProduction />} />
              <Route path='declarer-incident' element={<DeclarerIncident />} />
            </Route>
            <Route path='gestion-stocks' element={<GestionStocks />} />
            <Route path='expedition' element={<ExpeditionBouteilles />} />
            <Route
              path='suivi-expeditions'
              element={<SuiviExpeditions />}
            />{' '}
            {/* Nouvelle route pour le suivi des expéditions */}
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
            <Route path='cart-summary' element={<ClientCartSummary />} />{' '}
            {/* Chemin corrigé */}
            <Route
              path='product-details/:productId'
              element={<ClientProductDetails />}
            />{' '}
            {/* Chemin corrigé */}
          </Route>
          {/* Route 404 - Page introuvable */}
          <Route path='*' element={<div>Page introuvable (404)</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
