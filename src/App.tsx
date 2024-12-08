import React from 'react';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { Scene } from './components/3d/Scene';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-brown-900 to-brown-800">
      <Navigation />
      
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      <div className="relative">
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <Footer />
      </div>
    </div>
  );
}

export default App;