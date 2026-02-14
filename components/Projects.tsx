"use client";

import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useScrollCarousel } from './ScrollCarousel';

const Projects: React.FC = () => {
  const { currentSection, scrollProgress } = useScrollCarousel();
  const isActive = currentSection === 2;
  const sectionProgress = (scrollProgress * 4) - 2; // Adjust for section 2
  const parallaxOffset = sectionProgress * 30;

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with advanced filtering, real-time inventory management, and seamless checkout experience.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced analytics.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Firebase', 'TypeScript', 'Tailwind'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'An interactive weather dashboard with data visualization, forecasting, and location-based weather alerts.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['React', 'D3.js', 'API Integration', 'Charts'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];


  return (
    <section className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center justify-center pt-16 sm:pt-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 transition-transform duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Here are some of my recent projects that showcase my skills and passion for creating 
              innovative digital solutions.
            </p>
          </div>

          <div className={`grid lg:grid-cols-1 gap-12 transition-all duration-1000 delay-300 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${500 + index * 200}ms` }}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>
                  
                  <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <a
                        href={project.demoUrl}
                        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                      >
                        <ExternalLink size={16} className="mr-2 sm:w-5 sm:h-5" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                      >
                        <Github size={16} className="mr-2 sm:w-5 sm:h-5" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              View All Projects
              <ArrowRight size={16} className="ml-2 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
