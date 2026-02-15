"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Store from "@/components/Store";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CarouselSection from "@/components/ui/CarouselSection";
// import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const totalSections = 5;

  return (
    <div className="relative bg-gray-500">
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

      <CarouselSection sectionIndex={2}>
        <About />
      </CarouselSection>
      
      <CarouselSection sectionIndex={3}>
        <Projects />
      </CarouselSection>
      
      <CarouselSection sectionIndex={4}>
        <Skills />
      </CarouselSection>
      
      <CarouselSection sectionIndex={5}>
        <Contact />
      </CarouselSection>
      
      {/* <ScrollIndicator /> */}
      <div style={{ height: `${totalSections * 100}vh` }} />
    </div>
  );
}
