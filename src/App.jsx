// src/App.jsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import UserRolesSection from './components/UserRolesSection'; // Ajoute cette ligne

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UserRolesSection /> {/* Ajoute cette ligne */}
        {/* Laisse les autres sections commentées pour l'instant */}
      </main>
    </div>
  );
}

export default App;