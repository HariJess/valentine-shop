"use client";

import React from "react";
import { useScrollCarousel } from "./ui/ScrollCarousel";
import ProductCarousel from "@/components/ui/ProductCarousel";
import ProductBottomNavBar from "@/components/ui/ProductBottomNavBar";

const Store: React.FC = () => {
  const { scrollProgress, totalSections } = useScrollCarousel();

  const sectionScrollProgress = scrollProgress * (totalSections - 1);
  const storeProgress = Math.max(0, Math.min(sectionScrollProgress, 1));

  // Desktop inchangé
  const zoomScale = 1 + storeProgress * 1.2;
  const backgroundSizePercent = 100 - storeProgress * 20;

  // Ajustements seulement pour tablette / mobile
  const backgroundSizeTabletPercent = 200 - storeProgress * 18;
  const backgroundSizeMobilePercent = 275 - storeProgress * 15;

  const products = [
    { id: 1, name: "Premium Chocolate", image: "/store-product/pr-1.png", price: 29.99 },
    { id: 2, name: "Dark Delight", image: "/store-product/pr-2.png", price: 34.99 },
    { id: 3, name: "Sweet Dreams", image: "/store-product/pr-3.png", price: 24.99 },
    { id: 4, name: "Golden Truffle", image: "/store-product/pr-4.png", price: 39.99 },
    { id: 5, name: "Velvet Cocoa", image: "/store-product/pr-5.png", price: 27.99 },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* Fond séparé pour ne pas toucher au carousel */}
      <div
        className="store-bg absolute inset-0 pointer-events-none"
        style={
          {
            "--bg-size": `${backgroundSizePercent}%`,
            "--bg-size-tablet": `${backgroundSizeTabletPercent}%`,
            "--bg-size-mobile": `${backgroundSizeMobilePercent}%`,
            "--bg-scale": `${zoomScale}`,
          } as React.CSSProperties
        }
      />

      {/* Overlay pour meilleure lisibilité */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Carousel Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center h-screen">
        <ProductCarousel products={products} showDetailsButton={true} />
      </div>

      <style jsx>{`
        .store-bg {
          background-image: url("/bg_store.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: var(--bg-size);
          transform: scale(var(--bg-scale));
          transform-origin: center center;
          transition: transform 0.05s linear;
        }

        @media (max-width: 1024px) {
          .store-bg {
            background-size: var(--bg-size-tablet);
          }
        }

        @media (max-width: 640px) {
          .store-bg {
            background-size: var(--bg-size-mobile);
          }
        }
      `}</style>
    </section>
  );
};

export default Store;