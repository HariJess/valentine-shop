"use client";

import React from 'react';
import { useScrollCarousel } from './ui/ScrollCarousel';

const Hero: React.FC = () => {
  const { currentSection, scrollProgress, scrollToSection, totalSections } = useScrollCarousel();
  const isActive = currentSection === 0;

  const scrollToNext = () => {
    scrollToSection(currentSection + 1);
  };

  // Calcul du zoom basé sur le scroll progress
  // La première section représente de 0 à 1/5 du scroll total
  const sectionScrollProgress = scrollProgress * (totalSections - 1);
  const heroProgress = Math.max(0, Math.min(sectionScrollProgress, 1));
  
  // Zoom progressif: de 1 (normal) à 2 (2x zoom)
  const zoomScale = 1 + (heroProgress * 1.2);

  return (
    <section 
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-end bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg_hero.png')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: `scale(${zoomScale})`,
        transformOrigin: 'center center',
        transition: 'transform 0.05s linear',
      }}
    >
      {/* Overlay pour meilleure lisibilité */}
      <div className="absolute inset-0 bg-black/20" />
      {/* Shop Name */}
      <h1 className="absolute top-7 md:top-12 lg:top-6 z-10 text-4xl sm:text-5xl font-bold text-red-950 text-center mb-4">
        Hari
      </h1>
      {/* Button Container */}
      <div className={`relative z-10 bottom-8 pb-12 sm:pb-16 transition-all duration-1000 ${
        isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}>
        <button 
          onClick={() => { if (isActive) scrollToNext(); }}
          className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-red-950 text-red-950 font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          START EXPERIENCE
        </button>
      </div>
    </section>
  );
};

export default Hero;
