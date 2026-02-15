"use client";

import React from 'react';
import { useScrollCarousel } from './ScrollCarousel';

interface CarouselSectionProps {
  children: React.ReactNode;
  sectionIndex: number;
  className?: string;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ 
  children, 
  sectionIndex, 
  className = '' 
}) => {
  const { currentSection, scrollProgress, totalSections } = useScrollCarousel();
  
  // Calculate section-specific progress
  const sectionProgress = (scrollProgress * (totalSections - 1)) - sectionIndex;
  const isActive = Math.abs(currentSection - sectionIndex) <= 0.5;
  
  // Animation states - juste l'opacité, pas de scale/zoom
  const opacity = Math.max(0, 1 - Math.abs(sectionProgress) * 2);
  
  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${className}`}
      style={{
        opacity: isActive ? opacity : 0,
        zIndex: isActive ? 10 : 1,
        pointerEvents: isActive && opacity > 0.5 ? 'auto' : 'none',
        // Appliquer la marge et border radius
        margin: '16px',
        borderRadius: '24px',
        border: '1px solid rgb(229, 231, 235)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        width: 'calc(100% - 32px)',
        height: 'calc(100% - 32px)',
      }}
    >
      <div className="w-full h-full overflow-hidden rounded-3xl">
        {children}
      </div>
    </div>
  );
};

export default CarouselSection;
