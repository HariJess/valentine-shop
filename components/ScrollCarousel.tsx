"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ScrollCarouselContextType {
  currentSection: number;
  scrollProgress: number;
  totalSections: number;
  scrollToSection: (index: number) => void;
}

const ScrollCarouselContext = createContext<ScrollCarouselContextType>({
  currentSection: 0,
  scrollProgress: 0,
  totalSections: 0,
  scrollToSection: () => {},
});

export const useScrollCarousel = () => useContext(ScrollCarouselContext);

interface ScrollCarouselProviderProps {
  children: React.ReactNode;
  totalSections: number;
}

const ScrollCarouselProvider: React.FC<ScrollCarouselProviderProps> = ({ children, totalSections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, totalSections - 1));
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    
    // Calculate the scroll position for this section
    const sectionProgress = clampedIndex / (totalSections - 1);
    const scrollPosition = sectionProgress * documentHeight;
    
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Calculate overall scroll progress (0 to 1)
      const progress = Math.min(scrollTop / documentHeight, 1);
      setScrollProgress(progress);
      
      // Calculate current section based on scroll position
      const sectionProgress = progress * (totalSections - 1);
      const newCurrentSection = Math.round(sectionProgress);
      setCurrentSection(Math.max(0, Math.min(newCurrentSection, totalSections - 1)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  return (
    <ScrollCarouselContext.Provider value={{ currentSection, scrollProgress, totalSections, scrollToSection }}>
      {children}
    </ScrollCarouselContext.Provider>
  );
};

export default ScrollCarouselProvider;
