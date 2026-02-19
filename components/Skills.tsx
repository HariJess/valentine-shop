"use client";

import React, { useState, useEffect } from 'react';
import { useScrollCarousel } from './ui/ScrollCarousel';

const Skills: React.FC = () => {
  const { currentSection, scrollProgress } = useScrollCarousel();
  const isActive = currentSection === 3;
  const sectionProgress = (scrollProgress * 4) - 3; // Adjust for section 3
  const parallaxOffset = sectionProgress * 30;

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Python/Django', level: 80 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 82 },
  ];


  return (
    <section className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center pt-16 sm:pt-20">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-5 transition-transform duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              I'm constantly learning and improving my skills to stay current with the latest 
              technologies and best practices in web development.
            </p>
          </div>

          <div className={`grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 transition-all duration-1000 delay-300 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            {skills.map(({ name, level }, index) => (
              <div 
                key={name} 
                className={`group transition-all duration-700 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {name}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-600 font-medium">{level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out transform origin-left"
                    style={{
                      width: isActive ? `${level}%` : '0%',
                      transitionDelay: `${800 + index * 200}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Currently exploring AI/ML integration, cloud architecture patterns, and 
                advanced React patterns. I believe in continuous learning and staying 
                ahead of industry trends.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {['AI/ML', 'AWS', 'Docker', 'GraphQL', 'WebAssembly'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
