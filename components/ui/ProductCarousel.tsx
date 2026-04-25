"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart, Info } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductCarouselProps {
  products: Product[];
  autoScrollInterval?: number;
  showDetailsButton?: boolean;
  hoverImage?: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  autoScrollInterval = 5000,
  hoverImage = '/store-product/hover.png',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isStoreVisible, setIsStoreVisible] = useState(false);

  // Détecte si Store est la section active via le scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Store est sectionIndex={1}, donc active entre 1*vh et 2*vh
      const storeStart = vh * 1;
      const storeEnd = vh * 2;
      setIsStoreVisible(scrollY >= storeStart);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check au mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll — pause quand panel ouvert
  useEffect(() => {
    if (isExpanded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, autoScrollInterval);
    return () => clearInterval(interval);
  }, [products.length, autoScrollInterval, isExpanded]);

  const goToPrevious = () => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  const visibleProducts = [
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  const activeProduct = products[currentIndex];

  const actionButtons = [
    {
      key: 'cart',
      icon: (
        <ShoppingCart
          size={14}
          className={addedToCart ? 'text-yellow-300' : 'text-white'}
        />
      ),
      onClick: handleAddToCart,
      title: 'Ajouter au panier',
      position: { top: '15%', left: '69%' },
      delay: '80ms',
      activeClass: 'bg-yellow-500/30 border-yellow-400/60',
      isActive: addedToCart,
    },
    {
      key: 'fav',
      icon: (
        <Heart
          size={14}
          fill={isFavorite ? 'rgb(232,90,120)' : 'none'}
          className={isFavorite ? 'text-pink-400' : 'text-white'}
        />
      ),
      onClick: () => setIsFavorite((v) => !v),
      title: 'Favoris',
      position: { top: '43%', left: '83%' },
      delay: '150ms',
      activeClass: 'bg-pink-500/30 border-pink-400/60',
      isActive: isFavorite,
    },
    {
      key: 'info',
      icon: <Info size={14} className="text-white" />,
      onClick: () => alert(`Détails : ${activeProduct.name}`),
      title: 'Détails',
      position: { top: '71%', left: '70%' },
      delay: '220ms',
      activeClass: '',
      isActive: false,
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
      <div className="relative">
        <div className="relative flex items-center justify-center md:justify-between gap-2 mx-0 lg:mx-24">
          {/* Product zone */}
          <div className="flex-1 min-w-0 flex justify-center items-center lg:my-0 px-14 sm:px-16 md:px-0">
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-500 my-12 lg:my-8 transform ${
                  index === 1
                    ? 'scale-100 opacity-100 z-10 block'
                    : 'scale-0 opacity-0 z-0 hidden'
                }`}
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div
                    className={[
                      "absolute inset-0 flex items-center justify-center",
                      isExpanded ? "pr-12" : "mr-0 transition-all duration-200 ease-in-out",
                      "cursor-pointer z-10"
                    ].join(" ")}
                    onClick={() => setIsExpanded((v) => !v)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={[
                        'w-2/3 h-2/3 object-contain',
                        'transition-all duration-300',
                        isExpanded
                          ? 'scale-90 brightness-75'
                          : 'scale-100 brightness-100 hover:scale-95 hover:brightness-90',
                      ].join(' ')}
                    />
                  </div>

                  <div
                    className={[
                      'absolute inset-0 z-20 pointer-events-none',
                      'transition-all duration-500 ease-out',
                      isExpanded
                        ? 'opacity-100 scale-100 rotate-0'
                        : 'opacity-0 scale-75 -rotate-12',
                    ].join(' ')}
                  >
                    <img
                      src={hoverImage}
                      alt=""
                      aria-hidden
                      className="w-full h-full object-cover"
                      style={{ mixBlendMode: 'screen' }}
                    />
                  </div>

                  {actionButtons.map((btn) => (
                    <button
                      key={btn.key}
                      onClick={btn.onClick}
                      title={btn.title}
                      className={[
                        'absolute z-30 w-9 h-9 rounded-full',
                        'flex items-center justify-center',
                        'border backdrop-blur-sm',
                        'transition-all duration-300',
                        isExpanded
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-50 pointer-events-none',
                        btn.isActive
                          ? btn.activeClass
                          : 'bg-white/10 border-white/20 hover:bg-white/25 hover:border-white/40 hover:scale-110',
                      ].join(' ')}
                      style={{
                        top: btn.position.top,
                        left: btn.position.left,
                        transitionDelay: isExpanded ? btn.delay : '0ms',
                      }}
                    >
                      {btn.icon}
                    </button>
                  ))}

                  <p
                    className={[
                      'absolute -bottom-6 lg:-bottom-3 left-1/2 -translate-x-1/2 z-30',
                      'text-xs tracking-widest whitespace-nowrap font-light text-yellow-300/90',
                      'transition-all duration-300',
                      addedToCart
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-1 pointer-events-none',
                    ].join(' ')}
                  >
                    Ajouté ✓
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flèches — animées selon la section active */}
        <div
          className={[
            'flex justify-center items-center gap-4',
            'transition-all duration-500 ease-out',
            isStoreVisible
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-8 pointer-events-none',
          ].join(' ')}
        >
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 p-2 w-10 h-10 hover:bg-white/30 rounded-full transition-colors duration-300 bg-white/10"
            aria-label="Previous product"
            style={{ transitionDelay: isStoreVisible ? '80ms' : '0ms' }}
          >
            <ChevronLeft size={15} className="text-white drop-shadow-lg mx-auto" />
          </button>
          <button
            onClick={goToNext}
            className="flex-shrink-0 p-2 w-10 h-10 hover:bg-white/30 rounded-full transition-colors duration-300 bg-white/10"
            aria-label="Next product"
            style={{ transitionDelay: isStoreVisible ? '160ms' : '0ms' }}
          >
            <ChevronRight size={15} className="text-white drop-shadow-lg mx-auto" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCarousel;