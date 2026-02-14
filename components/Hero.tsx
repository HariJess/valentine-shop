"use client";

import React from 'react';
import { useScrollCarousel } from './ScrollCarousel';

const Hero: React.FC = () => {
  const { currentSection, scrollToSection, totalSections } = useScrollCarousel();
  const isActive = currentSection === 0;

  const scrollToNext = () => {
    scrollToSection(currentSection + 1);
  };

  return (
    <section 
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-end bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg_1.png')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Button Container */}
      <div className={`relative z-10 bottom-16 pb-12 sm:pb-16 transition-all duration-1000 ${
        isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}>
        <button 
          onClick={() => { if (isActive) scrollToNext(); }}
          className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-900 text-gray-900 font-bold text-lg sm:text-xl rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          START EXPERIENCE
        </button>
      </div>
    </section>
  );
};

export default Hero;
