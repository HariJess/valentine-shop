"use client";

import Header from "@/components/ui/Header";
import Hero from "@/components/Hero";
import Store from "@/components/Store";
import CarouselSection from "@/components/ui/CarouselSection";
// import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const totalSections = 5;

  return (
    <div className="relative Z-10 bg-gray-500">
      <Header />
      <div style={{ height: `${totalSections * 100}vh` }} />
      {/* Create scroll space */}
      
      {/* Hero - Foreground (avec zoom animation) */}
      <CarouselSection sectionIndex={0}>
        <Hero />
      </CarouselSection>
      
      {/* Store - Background (visible dès le début derrière Hero) */}
      <CarouselSection sectionIndex={1} isBackground={true}>
        <Store />
      </CarouselSection>
      
      {/* <ScrollIndicator /> */}
      <div style={{ height: `${totalSections * 100}vh` }} />
    </div>
  );
}
