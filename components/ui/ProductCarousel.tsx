"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductCarouselProps {
  products: Product[];
  autoScrollInterval?: number; // en millisecondes (default: 5000)
  showDetailsButton?: boolean; // Affiche le bouton Détails (default: false)
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ 
  products, 
  autoScrollInterval = 5000,
  showDetailsButton = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [products.length, autoScrollInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const visibleProducts = [
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="relative">
        {/* Main Carousel */}
        <div className="flex items-center justify-between gap-4 md:gap-6 mx-0 lg:mx-24">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 p-3 hover:bg-white/30 rounded-full transition-colors duration-300 bg-white/10 z-50"
            aria-label="Previous product"
          >
            <ChevronLeft size={15} className="text-white drop-shadow-lg" />
          </button>

          {/* Products Container - Affiche seulement le produit du centre */}
          <div className="flex-1 flex justify-center overflow-hidden">
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 transform ${
                  index === 1
                    ? 'scale-100 opacity-100 z-10 block'
                    : 'scale-0 opacity-0 z-0 hidden'
                }`}
              >
                <div className="rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden hover:cursor-pointer h-40 md:h-56 w-48 md:w-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Bouton Détails personnalisé - Affiche uniquement si showDetailsButton est true */}
                  {/* {showDetailsButton && (
                    <div className="flex justify-center mt-4">
                      <BoutonSaveurs
                        label="Détails"
                        bgColor="#d6a93b"
                        bgColorLight="#f3d08ab7"
                        bgColorDark="#e6b95a"
                        textColor="#ffffffc0"
                        stripeColor="#ffffffc0"
                        fontSize=".9rem"
                      />
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="flex-shrink-0 p-3 hover:bg-white/30 rounded-full transition-colors duration-300 bg-white/10 z-50"
            aria-label="Next product"
          >
            <ChevronRight size={15} className="text-white drop-shadow-lg" />
          </button>
        </div>

        {/* Indicators - Barre améliorée */}
        {/* <div className="flex justify-center items-center gap-2 mt-4 md:mt-6">
          <span className="text-white text-xs md:text-sm font-medium drop-shadow-lg">
            {currentIndex + 1} / {products.length}
          </span>
          <div className="flex gap-1">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-white w-6 md:w-8 h-2 md:h-2.5'
                    : 'bg-white/40 w-2 md:w-2.5 h-2 md:h-2.5 hover:bg-white/60'
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCarousel;
