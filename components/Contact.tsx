"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollCarousel } from './ScrollCarousel';

const Contact: React.FC = () => {
  const { currentSection, scrollProgress } = useScrollCarousel();
  const isActive = currentSection === 4;
  const sectionProgress = (scrollProgress * 4) - 4; // Adjust for section 4
  const parallaxOffset = sectionProgress * 30;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'josh@example.com', href: 'mailto:josh@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
  ];


  return (
    <section className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center justify-center pt-16 sm:pt-20">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-5 transition-transform duration-700"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500 rounded-full" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 transition-all duration-1000 delay-300 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Let's Connect</h3>
              
              <div className={`space-y-6 sm:space-y-8 mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
                isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}>
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center group hover:text-blue-600 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4 sm:mr-6 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {label}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-1000 delay-700 ${
                isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Response</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to call me directly.
                </p>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Available for freelance projects
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${
              isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}>
              <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="mb-6 sm:mb-8">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={16} className="mr-2 sm:w-5 sm:h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
        isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm sm:text-base text-gray-600 px-4">
            © 2025 Josh. Built with ❤️ using Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
