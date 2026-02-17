"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useScrollCarousel } from './ScrollCarousel';

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

  const sectionNames = ['Store', 'About', 'Projects', 'Skills', 'Contact'];

  // Cacher le header quand on est à la section Hero (index 0)
  if (currentSection === 0) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-12 my-12">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo/Brand - Cliquable pour aller à Hero */}
          <button 
            onClick={() => scrollToSection(0)}
            className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
          >
            <div className="text-xl sm:text-2xl md:text-4xl font-bold text-white hover:text-white/80">Hari</div>
          </button>

          {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
            {sectionNames.map((item, index) => (
              <button
              key={index}
              onClick={() => scrollToSection(index + 1)} //+1 car on a enlevé Home
              className={`transition-colors duration-300 capitalize font-medium pb-2 ${
                currentSection === index + 1
                ? 'text-white/90 border-b-2 border-white/90' 
                : 'text-white hover:text-white/80 hover:border-white/80 border-b-2 border-transparent'
              }`}
              >
              {item}
              </button>
            ))}
            </div>

          {/* User Section */}
            <div className="flex items-center space-x-4">
            <div className="relative cursor-pointer">
              <ShoppingCart className='text-white/90 w-6 h-6 hover:text-white/50 transition-colors'/>
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span> {/* Badge for cart items */}
            </div>
            <div className="relative cursor-pointer">
              <User className='text-white/90 w-6 h-6 hover:text-white/50 transition-colors'/> {/* User icon for My Account */}
            </div>
            </div>

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
                onClick={() => scrollToSection(index + 1)} //+1 car on a enlevé Home
                className={`block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-300 capitalize font-medium ${
                  currentSection === index + 1
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
