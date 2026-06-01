import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-base/90 backdrop-blur-md border-b border-accent-gold/10 py-4 shadow-xl' 
            : 'bg-transparent py-6'
        }`}
        style={{ top: 'var(--navbar-offset, 0px)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display italic text-xl font-medium tracking-tight text-accent-cream hover:opacity-85 transition-opacity">
            EMBER & STONE
          </a>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="font-sans text-[14px] font-medium text-accent-cream hover:text-accent-gold transition-colors duration-300">
              Menu
            </a>
            <a href="#story" className="font-sans text-[14px] font-medium text-accent-cream hover:text-accent-gold transition-colors duration-300">
              Story
            </a>
            <a href="#events" className="font-sans text-[14px] font-medium text-accent-cream hover:text-accent-gold transition-colors duration-300">
              Events
            </a>
            <a href="#private-dining" className="font-sans text-[14px] font-medium text-accent-cream hover:text-accent-gold transition-colors duration-300">
              Private Dining
            </a>
            <a href="#faq" className="font-sans text-[14px] font-medium text-accent-cream hover:text-accent-gold transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Right Section (Desktop CTA + Language) */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#reserve" className="btn-primary py-2 px-6 text-[12px] tracking-btn leading-none border-accent-gold">
              Reserve a Table
            </a>
            
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 text-[12px] font-sans font-medium text-accent-cream">
              <button 
                onClick={() => setLang('EN')} 
                className={`transition-colors hover:text-accent-gold ${lang === 'EN' ? 'text-accent-gold font-bold' : ''}`}
              >
                EN
              </button>
              <span className="text-muted-text">/</span>
              <button 
                onClick={() => setLang('FR')} 
                className={`transition-colors hover:text-accent-gold ${lang === 'FR' ? 'text-accent-gold font-bold' : ''}`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-accent-cream hover:text-accent-gold transition-colors p-1"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 w-full h-full bg-base/98 backdrop-blur-lg z-30 flex flex-col justify-center items-center px-8 transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center">
          <a 
            href="#menu" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display italic text-3xl text-accent-cream hover:text-accent-gold transition-colors duration-300"
          >
            The Menu
          </a>
          <a 
            href="#story" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display italic text-3xl text-accent-cream hover:text-accent-gold transition-colors duration-300"
          >
            Our Story
          </a>
          <a 
            href="#events" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display italic text-3xl text-accent-cream hover:text-accent-gold transition-colors duration-300"
          >
            Upcoming Events
          </a>
          <a 
            href="#private-dining" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display italic text-3xl text-accent-cream hover:text-accent-gold transition-colors duration-300"
          >
            Private Occasions
          </a>
          <a 
            href="#faq" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-display italic text-3xl text-accent-cream hover:text-accent-gold transition-colors duration-300"
          >
            Contact & FAQ
          </a>
          
          <div className="pt-6">
            <a 
              href="#reserve" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary block w-full text-center"
            >
              Reserve a Table
            </a>
          </div>

          <div className="flex justify-center items-center space-x-4 pt-4 text-sm font-sans text-accent-cream">
            <button 
              onClick={() => setLang('EN')} 
              className={`hover:text-accent-gold ${lang === 'EN' ? 'text-accent-gold font-bold' : ''}`}
            >
              ENGLISH
            </button>
            <span className="text-muted-text">|</span>
            <button 
              onClick={() => setLang('FR')} 
              className={`hover:text-accent-gold ${lang === 'FR' ? 'text-accent-gold font-bold' : ''}`}
            >
              FRANÇAIS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
