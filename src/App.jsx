import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UserRolesSection from './components/UserRolesSection';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; // On importe la nouvelle page
import InscriptionReussie from './pages/InscriptionReussie';

const HomePage = () => (
  <div className="App">
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <UserRolesSection />
      <HowItWorksSection />
      <Footer/>
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/inscription-reussie" element={<InscriptionReussie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;