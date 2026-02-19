"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Clock } from 'lucide-react';
import { useScrollCarousel } from './ui/ScrollCarousel';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [currentTime, setCurrentTime] = useState(new Date());
  const { currentSection, totalSections } = useScrollCarousel();

  // useEffect(() => {
  //   const timer = setInterval(() => setCurrentTime(new Date()), 1000);
  //   return () => clearInterval(timer);
  // }, []);

  const scrollToSection = (sectionIndex: number) => {
    const targetScrollY = (sectionIndex / (totalSections - 1)) * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const sectionNames = ['Home', 'Store', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-200/50">
      {/* Scroll Indicator Bar */}
      {/* <div className="w-full h-1 bg-gray-100/50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
          style={{
            width: `${(currentSection / Math.max(totalSections - 1, 1)) * 100}%`,
          }}
        />
      </div> */}

      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <div className="text-xl sm:text-2xl font-bold text-gray-900">Josh</div>
            {/* <div className="hidden sm:block text-sm text-gray-600">
              {currentTime.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
            </div> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {sectionNames.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`transition-colors duration-300 capitalize font-medium ${
                  currentSection === index 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Time Display */}
          {/* <div className="flex items-center space-x-2 sm:space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="hidden md:block">22°</div>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-lg border border-gray-200">
            {sectionNames.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-300 capitalize font-medium ${
                  currentSection === index 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
