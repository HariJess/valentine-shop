"use client";

import React from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { useScrollCarousel } from './ui/ScrollCarousel';

const About: React.FC = () => {
  const { currentSection, scrollProgress } = useScrollCarousel();
  const isActive = currentSection === 1;
  const sectionProgress = (scrollProgress * 4) - 1; // Adjust for section 1
  const parallaxOffset = sectionProgress * 30;

  const skills = [
    { icon: Code2, title: 'Development', description: 'Full-stack development with modern technologies and best practices.' },
    { icon: Palette, title: 'Design', description: 'UI/UX design focused on user experience and visual aesthetics.' },
    { icon: Rocket, title: 'Performance', description: 'Optimized solutions that are fast, scalable, and reliable.' },
    { icon: Users, title: 'Collaboration', description: 'Strong communication and teamwork in agile environments.' },
  ];


  return (
    <section id='about-section' className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-5 transition-transform duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              I'm a passionate developer with over 5 years of experience creating digital solutions 
              that make a difference. I love combining technical expertise with creative design.
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500"></div>
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Working"
                  className="relative rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Started my journey in web development during college, where I discovered my passion 
                  for creating beautiful and functional digital experiences. Since then, I've worked 
                  with startups and established companies, always pushing the boundaries of what's possible.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I believe in writing clean, maintainable code and creating user interfaces that are 
                  not only visually appealing but also intuitive and accessible to everyone.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-1000 delay-600 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            {skills.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className={`group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon size={24} className="text-blue-600 group-hover:text-white transition-colors duration-300 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
