"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart, Info, X } from 'lucide-react';

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
  hoverImage?: string; // L'image fournie (bracelet) affichée au clic
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  autoScrollInterval = 5000,
  showDetailsButton = false,
  // hoverImage= '/store-product/hover.png',
  hoverImage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Auto-scroll (pause quand le panel est ouvert)
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        @keyframes panelIn {
          from { opacity: 0; transform: translateX(18px) scale(0.96); }
          to   { opacity: 1; transform: translateX(0)   scale(1); }
        }

        @keyframes iconPop {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes cartSuccess {
          0%,100% { transform: scale(1); }
          40%     { transform: scale(1.25); }
        }

        .panel-enter { animation: panelIn 0.42s cubic-bezier(0.22,1,0.36,1) forwards; }

        .action-icon {
          animation: iconPop 0.35s cubic-bezier(0.22,1,0.36,1) both;
        }
        .action-icon:nth-child(1) { animation-delay: 0.08s; }
        .action-icon:nth-child(2) { animation-delay: 0.16s; }
        .action-icon:nth-child(3) { animation-delay: 0.24s; }

        .cart-success { animation: cartSuccess 0.4s ease; }

        .product-img-clickable {
          cursor: pointer;
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .product-img-clickable:hover {
          transform: scale(1.04);
          filter: brightness(1.08);
        }

        .action-btn {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(8px);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .action-btn:hover {
          background: rgba(255,255,255,0.16);
          border-color: rgba(255,255,255,0.35);
          transform: scale(1.1);
        }
        .action-btn.active-fav {
          background: rgba(232, 90, 120, 0.25);
          border-color: rgba(232, 90, 120, 0.6);
        }
        .action-btn.active-cart {
          background: rgba(180, 140, 80, 0.3);
          border-color: rgba(220, 180, 100, 0.7);
        }

        .panel-price {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-style: italic;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.85);
          font-size: 1.15rem;
          margin-top: 6px;
        }
        .panel-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.95);
          font-size: 0.78rem;
          text-transform: uppercase;
        }
        .close-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .close-btn:hover { background: rgba(255,255,255,0.22); }

        .gold-divider {
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,90,0.8), transparent);
          margin: 8px auto;
        }
      `}</style>

      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="relative">

          {/* ── Main Carousel ── */}
          <div className="flex items-center justify-between gap-4 md:gap-6 mx-0 lg:mx-24">

            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="flex-shrink-0 p-3 hover:bg-white/30 rounded-full transition-colors duration-300 bg-white/10 z-50"
              aria-label="Previous product"
            >
              <ChevronLeft size={15} className="text-white drop-shadow-lg" />
            </button>

            {/* Product + Panel wrapper */}
            <div className="flex-1 flex justify-center items-center overflow-visible">
              <div className="relative flex items-center gap-4">

                {/* Product image */}
                {visibleProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`transition-all duration-500 transform ${
                      index === 1
                        ? 'scale-100 opacity-100 z-10 block'
                        : 'scale-0 opacity-0 z-0 hidden'
                    }`}
                  >
                    <div className="rounded-xl overflow-visible">
                      <div
                        className="relative overflow-hidden rounded-xl h-40 md:h-56 w-48 md:w-48"
                        onClick={() => setIsExpanded((v) => !v)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product-img-clickable w-full h-full object-contain"
                        />
                        {/* Subtle ring glow on hover */}
                        <div
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{
                            boxShadow: isExpanded
                              ? 'inset 0 0 0 1.5px rgba(212,175,90,0.55)'
                              : 'none',
                            transition: 'box-shadow 0.3s',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* ── Side Panel ── */}
                {isExpanded && (
                  <div
                    className="panel-enter flex flex-col items-center"
                    style={{
                      minWidth: 140,
                      background:
                        'linear-gradient(160deg, rgba(30,20,15,0.82) 0%, rgba(15,10,8,0.92) 100%)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 18,
                      border: '1px solid rgba(212,175,90,0.22)',
                      boxShadow:
                        '0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
                      padding: '28px 20px 20px',
                      position: 'relative',
                    }}
                  >
                    {/* Close */}
                    <button
                      className="close-btn"
                      onClick={() => setIsExpanded(false)}
                      aria-label="Fermer"
                    >
                      <X size={11} className="text-white/60" />
                    </button>

                    {/* Hover image (bracelet) */}
                    {hoverImage && (
                      <div style={{ width: 80, height: 80, marginBottom: 6 }}>
                        <img
                          src={hoverImage}
                          alt="product detail"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 0 8px rgba(212,175,90,0.35))',
                          }}
                        />
                      </div>
                    )}

                    {/* Name & price */}
                    <p className="panel-name">{activeProduct.name}</p>
                    <div className="gold-divider" />
                    <p className="panel-price">${activeProduct.price}</p>
                    <div className="gold-divider" />

                    {/* Action icons */}
                    <div className="flex flex-col gap-3 mt-2">

                      {/* Add to Cart */}
                      <button
                        className={`action-btn action-icon ${addedToCart ? 'active-cart cart-success' : ''}`}
                        onClick={handleAddToCart}
                        title="Ajouter au panier"
                      >
                        <ShoppingCart
                          size={17}
                          className={addedToCart ? 'text-yellow-300' : 'text-white/80'}
                        />
                      </button>

                      {/* Favorite */}
                      <button
                        className={`action-btn action-icon ${isFavorite ? 'active-fav' : ''}`}
                        onClick={() => setIsFavorite((v) => !v)}
                        title="Favoris"
                      >
                        <Heart
                          size={17}
                          fill={isFavorite ? 'rgb(232,90,120)' : 'none'}
                          className={isFavorite ? 'text-pink-400' : 'text-white/80'}
                        />
                      </button>

                      {/* Details */}
                      <button
                        className="action-btn action-icon"
                        title="Voir les détails"
                        onClick={() => alert(`Détails : ${activeProduct.name}`)}
                      >
                        <Info size={17} className="text-white/80" />
                      </button>

                    </div>

                    {/* Toast message */}
                    {addedToCart && (
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: '0.65rem',
                          letterSpacing: '0.08em',
                          color: 'rgba(212,175,90,0.9)',
                          marginTop: 10,
                          textAlign: 'center',
                        }}
                      >
                        Ajouté ✓
                      </p>
                    )}
                  </div>
                )}
              </div>
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

        </div>
      </div>
    </>
  );
};

export default ProductCarousel;