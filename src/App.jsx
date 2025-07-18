import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UserRolesSection from './components/UserRolesSection';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; // On importe la nouvelle page

const HomePage = () => (
  <div className="App">
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <UserRolesSection />
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* On ajoute la route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;