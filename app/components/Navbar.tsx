"use client";
import { useState, useEffect } from 'react';
import Logo from './Logo'; // Your logo component
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (item: string) => {
    setActiveSection(item);
    setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className={`fixed py-2 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills','experience'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActiveSection(item)}
              className={`relative px-2 py-1 uppercase text-sm font-medium transition-all duration-300 group ${activeSection === item ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              {item}
              {/* Animated underline */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 group-hover:w-full ${activeSection === item ? 'w-full' : ''
                }`}></span>

              {/* Floating dots */}
              <div className="absolute -top-3  opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-purple-400 animate-float"
                    style={{
                      left: `${i * 5}px`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:scale-110 transition-transform"
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose className="text-white text-lg" />
          ) : (
            <AiOutlineMenu className="text-white text-lg" />
          )}
        </button>

        {/* Animated star button */}
        <button className="ml-8 p-2 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:scale-110 transition-transform">
          <span className="text-white text-lg animate-pulse">✦</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden h-full bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => handleLinkClick(item)}
                className={`relative px-2 py-2 uppercase text-md font-medium transition-all duration-300 ${activeSection === item ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;