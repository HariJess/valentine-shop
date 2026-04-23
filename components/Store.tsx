"use client";

import React, { useEffect, useState } from "react";
import { useScrollCarousel } from "./ui/ScrollCarousel";
import ProductCarousel from "@/components/ui/ProductCarousel";
import ProductBottomNavBar from "@/components/ui/ProductBottomNavBar";

const Store: React.FC = () => {
  const { scrollProgress, totalSections } = useScrollCarousel();

  const sectionScrollProgress = scrollProgress * (totalSections - 1);
  const storeProgress = Math.max(0, Math.min(sectionScrollProgress, 1));

  // Desktop inchangé
  const zoomScale = 1 + (storeProgress * 1.2);
  const [deviceScale, setDeviceScale] = useState(zoomScale);

  //Zoom plus modéré pour tablette et mobile
  const zoomScaleTablet = 1 + (storeProgress * 0.9);
  const zoomScaleMobile = 1 + (storeProgress * 0.5);
  // Ajustement dynamique du zoom en fonction de la taille de l'écran
  useEffect(() => {
  const updateScale = () => {
    const width = window.innerWidth;

    if (width <= 640) {
      setDeviceScale(zoomScaleMobile);
    } else if (width <= 1024) {
      setDeviceScale(zoomScaleTablet);
    } else {
      setDeviceScale(zoomScale);
    }
  };

  updateScale();
  window.addEventListener("resize", updateScale);
  return () => window.removeEventListener("resize", updateScale);
}, [zoomScale, zoomScaleTablet, zoomScaleMobile]);
     
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
      <div className="relative z-10 w-full flex flex-col items-center justify-center h-screen"
          style={{
                transform: `scale(${deviceScale})`,
                transformOrigin: "center center",
                transition: "transform 0.05s linear",
            }}
      >
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