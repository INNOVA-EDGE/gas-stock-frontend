// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Supprimez 'Navigate' si vous ne l'utilisez plus temporairement

// Importez vos composants de la Landing Page
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UserRolesSection from './components/UserRolesSection';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';

// Importez vos pages d'authentification
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// IMPORTS TEMPORAIRES POUR ACCÈS DIRECT AUX DASHBOARDS
// Note: Le .jsx est important car nous les avons renommés ainsi
import AdminDashboard from './components/Dashboards/AdminDashboard/AdminDashboard.jsx';
import ClientDashboard from './components/Dashboards/ClientDashboard/ClientDashboard.jsx';
import ResponsableSuiviDashboard from './components/Dashboards/ResponsableSuiviDashboard/ResponsableSuiviDashboard.jsx';
// Importez ici les autres dashboards au fur et à mesure que je les fournis :
import ResponsableUniteProductionDashboard from './components/Dashboards/ResponsableUniteProductionDashboard/ResponsableUniteProductionDashboard.jsx';
import ResponsableEntrepotDashboard from './components/Dashboards/ResponsableEntrepotDashboard/ResponsableEntrepotDashboard.jsx';
import ResponsableAgenceDashboard from './components/Dashboards/ResponsableAgenceDashboard/ResponsableAgenceDashboard.jsx';
import TransporteurDashboard from './components/Dashboards/TransporteurDashboard/TransporteurDashboard.jsx';


// Votre composant HomePage reste le même
const HomePage = () => (
	<div className="App">
		<Header />
		<main>
			<HeroSection />
			<FeaturesSection />
			<UserRolesSection />
			<HowItWorksSection />
			{/* <ContactSection /> */}
		</main>
		<Footer/>
	</div>
);

// --- COMMENTEZ OU SUPPRIMEZ TEMPORAIREMENT TOUT LE CODE SUIVANT LIÉ À L'AUTH ET REDIRECTION ---
// import { AuthProvider, useAuth } from './components/AuthContext.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';

// const DashboardRedirect = () => {
//   const { userRole, isAuthenticated } = useAuth();
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }
//   switch (userRole) {
//     case 'administrateur':
//       return <Navigate to="/dashboard/admin" replace />;
//     case 'client':
//     case 'revendeur':
//     case 'menage':
//       return <Navigate to="/dashboard/client" replace />;
//     case 'responsable-suivi-et-controle':
//       return <Navigate to="/dashboard/responsable-suivi" replace />;
//     // ... autres rôles
//     default:
//       return <Navigate to="/login" replace />;
//   }
// };
// --- FIN DU CODE À COMMENTER/SUPPRIMER ---


function App() {
	return (
		<BrowserRouter>
            {/* COMMENTEZ OU SUPPRIMEZ TEMPORAIREMENT AuthProvider si vous le souhaitez, mais ce n'est pas obligatoire */}
            {/* <AuthProvider> */}
			<Routes>
				{/* Route de la Landing Page */}
				<Route path="/" element={<HomePage />} />

				{/* Routes d'authentification */}
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />

                {/* ROUTES DIRECTES VERS LES DASHBOARDS POUR LA VISUALISATION */}
                {/* Vous pouvez accéder à ces dashboards directement via leur URL dans la barre d'adresse de votre navigateur */}
                <Route path="/dashboard/admin" element={<AdminDashboard />} />
                <Route path="/dashboard/client" element={<ClientDashboard />} />
                <Route path="/dashboard/responsable-suivi" element={<ResponsableSuiviDashboard />} />
                {/* Ajoutez ici les routes directes pour les autres dashboards au fur et à mesure : */}
                <Route path="/dashboard/responsable-unite-production" element={<ResponsableUniteProductionDashboard />} />
                <Route path="/dashboard/responsable-entrepot" element={<ResponsableEntrepotDashboard />} />
                <Route path="/dashboard/responsable-agence" element={<ResponsableAgenceDashboard />} />
                <Route path="/dashboard/transporteur" element={<TransporteurDashboard />} />

                {/* --- COMMENTEZ OU SUPPRIMEZ TEMPORAIREMENT LES ROUTES PROTÉGÉES CI-DESSOUS --- */}
                {/* <Route path="/dashboard" element={<DashboardRedirect />} /> */}
                {/* <Route path="/unauthorized" element={<div>Accès non autorisé à cette ressource. Veuillez contacter l'administrateur.</div>} /> */}

                {/* <Route
                    path="/dashboard/admin"
                    element={
                        <PrivateRoute allowedRoles={['administrateur']}>
                            <AdminDashboard />
                        </PrivateRoute>
                    }
                /> */}
                {/* <Route
                    path="/dashboard/client"
                    element={
                        <PrivateRoute allowedRoles={['client', 'revendeur', 'menage']}>
                            <ClientDashboard />
                        </PrivateRoute>
                    }
                /> */}
                {/* <Route
                    path="/dashboard/responsable-suivi"
                    element={
                        <PrivateRoute allowedRoles={['responsable-suivi-et-controle']}>
                            <ResponsableSuiviDashboard />
                        </PrivateRoute>
                    }
                /> */}
                {/* ... (commenter les autres PrivateRoute pour les futurs dashboards) ... */}


				{/* Route pour les chemins non trouvés (doit être la dernière) */}
				<Route path="*" element={<div>Page introuvable (404)</div>} />
			</Routes>
            {/* </AuthProvider> */}
		</BrowserRouter>
	);
}

export default App;