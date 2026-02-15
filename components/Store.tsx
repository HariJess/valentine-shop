"use client";

import React from 'react';
import { useScrollCarousel } from './ScrollCarousel';

const Store: React.FC = () => {
    const { scrollProgress, totalSections } = useScrollCarousel();

    // Calcul du zoom basé sur le scroll progress
    // Store commence son zoom après que Hero soit complètement zoomé (sectionIndex 1)
    const sectionScrollProgress = scrollProgress * (totalSections - 1);
    const storeProgress = Math.max(0, Math.min(sectionScrollProgress - 1, 1));
    
    // Zoom progressif: de 1 (normal) à 2.2x zoom
    const zoomScale = 1 + (storeProgress * 1.2);

    return (
        <section 
            className="min-h-screen relative overflow-hidden flex flex-col items-center justify-end bg-cover bg-center"
            style={{
                backgroundImage: "url('/bg_store.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: `scale(${zoomScale})`,
                transformOrigin: 'center center',
                transition: 'transform 0.05s linear',
            }}
        >
            {/* section Container */}
            {/* <div className="relative z-10 bottom-8 pb-12 sm:pb-16">
                <button 
                    className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-900 text-gray-900 font-bold text-lg sm:text-xl rounded-lg sm:rounded-xl"
                >
                    ENTER STORE
                </button>
            </div> */}
        </section>
    );
};

export default Store;