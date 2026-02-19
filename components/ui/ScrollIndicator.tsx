"use client";

import React from 'react';
import { useScrollCarousel } from './ScrollCarousel';

const ScrollIndicator: React.FC = () => {
  const { currentSection, totalSections } = useScrollCarousel();

  const sectionNames = ['Home', 'Store','About', 'Projects', 'Skills', 'Contact'];

  const scrollToSection = (sectionIndex: number) => {
    const targetScrollY = (sectionIndex / (totalSections - 1)) * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
        {Array.from({ length: totalSections }, (_, index) => (
          <button 
            key={index} 
            onClick={() => scrollToSection(index)}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 mb-1 ${
                currentSection === index
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
            />
            <span
              className={`text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                currentSection === index 
                  ? 'text-blue-600 opacity-100' 
                  : 'text-gray-600 opacity-0 group-hover:opacity-100'
              }`}
            >
              {sectionNames[index]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
