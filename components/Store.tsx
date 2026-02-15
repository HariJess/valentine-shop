"use client";

import React from 'react';
import { useScrollCarousel } from './ScrollCarousel';
import ProductCarousel from './ProductCarousel';

const Store: React.FC = () => {
    const { scrollProgress, totalSections } = useScrollCarousel();

    // Calcul du zoom basé sur le scroll progress
    // Store zoom EN MÊME TEMPS que Hero (pendant la première section)
    const sectionScrollProgress = scrollProgress * (totalSections - 1);
    const storeProgress = Math.max(0, Math.min(sectionScrollProgress, 1));
    
    // Zoom progressif: de 1 (normal) à 2.2x zoom, puis revient à 1
    const zoomScale = 1 + (storeProgress * 1.2);
    
    // Transition progressive de backgroundSize: 100% -> 80% progressivement
    // On utilise un calcul continu au lieu d'un changement brusque
    const backgroundSizePercent = 100 - (storeProgress * 20); // 100% -> 80%

    // Produits exemple
    const products = [
        { id: 1, name: 'Premium Chocolate', image: '/store-product/pr-1.png', price: 29.99 },
        { id: 2, name: 'Dark Delight', image: '/store-product/pr-2.png', price: 34.99 },
        { id: 3, name: 'Sweet Dreams', image: '/store-product/pr-3.png', price: 24.99 },
        { id: 4, name: 'Golden Truffle', image: '/store-product/pr-4.png', price: 39.99 },
        { id: 5, name: 'Velvet Cocoa', image: '/store-product/pr-5.png', price: 27.99 },
    ];

    return (
        <section 
            className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-center"
            style={{
                backgroundImage: "url('/bg_store.png')",
                backgroundSize: `${backgroundSizePercent}%`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: `scale(${zoomScale})`,
                transformOrigin: 'center center',
                transition: 'transform 0.05s linear',
            }}
        >
            {/* Overlay pour meilleure lisibilité */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Carousel Container */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center h-screen">
                <ProductCarousel products={products} autoScrollInterval={5000} />
            </div>
        </section>
    );
};

export default Store;