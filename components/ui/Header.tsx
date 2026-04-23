"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useScrollCarousel } from './ScrollCarousel';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prevSection = useRef<number>(0);

  const { currentSection, totalSections } = useScrollCarousel();

  const scrollToSection = (sectionIndex: number) => {
    const targetScrollY =
      (sectionIndex / (totalSections - 1)) *
      (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const sectionNames = ['Store', 'Promotions', 'About', 'Contact'];

  // Déclenche l'animation slide-down quand on entre dans Store (section 1)
  useEffect(() => {
    if (prevSection.current === 0 && currentSection >= 1) {
      // On vient d'entrer dans Store → déclenche le slide-down
      setIsVisible(false);
      // Petit délai pour que le navigateur prenne en compte l'état initial avant l'animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else if (currentSection === 0) {
      // Retour à Hero → cache le header
      setIsVisible(false);
    }
    prevSection.current = currentSection;
  }, [currentSection]);

  // Caché sur Hero
  if (currentSection === 0) return null;

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-slide-down {
          animation: slideDown 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .header-hidden {
          opacity: 0;
          transform: translateY(-100%);
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 mx-12 my-12 ${
          isVisible ? 'header-slide-down' : 'header-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">

            {/* Logo — retour Hero */}
            <button
              onClick={() => scrollToSection(0)}
              className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
            >
              <div className="text-xl sm:text-2xl md:text-4xl font-bold text-white hover:text-white/80">
                Hari
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {sectionNames.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index + 1)}
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

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <div className="relative cursor-pointer">
                <ShoppingCart className="text-white/90 w-6 h-6 hover:text-white/50 transition-colors" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </div>
              <div className="relative cursor-pointer">
                <User className="text-white/90 w-6 h-6 hover:text-white/50 transition-colors" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 ml-2 text-white"
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
                  onClick={() => scrollToSection(index + 1)}
                  className={`block w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-300 capitalize font-medium ${
                    currentSection === index + 1
                      ? 'text-[#720B15]'
                      : 'text-[#720B15]/70 hover:text-[#720B15]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;