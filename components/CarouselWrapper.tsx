'use client'

import React from 'react'

interface CarouselWrapperProps {
  children: React.ReactNode
}

/**
 * Wrapper pour les sections carousel
 * Crée l'espace centré avec bordures et marge
 */
export function CarouselWrapper({ children }: CarouselWrapperProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 pointer-events-none">
      {/* Conteneur avec bordures arrondies et marge */}
      <div className="w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-3xl border-4 border-gray-200 shadow-2xl pointer-events-auto overflow-hidden">
        {/* Le contenu réel (sections) se placera ici via position fixed */}
        {children}
      </div>
    </div>
  )
}
