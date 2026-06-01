import React, { useState } from 'react';
import { Compass, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="relative w-full bg-bg-footer border-t border-accent-gold/15 py-20 md:py-24 z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        
        {/* Top: Large Brand Brand Logo & Tagline */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="font-display italic text-3xl font-medium tracking-tight text-accent-cream mb-4">
            EMBER & STONE
          </h2>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-gold">
            Fine Dining · Open Flame · Artisanal Craft
          </p>
          <div className="w-24 h-[1px] bg-accent-gold/20 mt-8" />
        </div>

        {/* 4 columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-16 text-left">
          
          {/* Column 1: Visit Us */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-accent-gold mb-2">
              Visit Us
            </h4>
            <p className="font-sans text-[14px] text-muted-text leading-relaxed">
              123 Hearthwood Way<br />
              New York, NY 10014
            </p>
            <p className="font-sans text-[14px] text-muted-text">
              Monday — Sunday<br />
              5:00 PM — 11:00 PM
            </p>
            <a href="tel:+12125550147" className="font-sans text-[14px] text-accent-cream hover:text-accent-gold transition-colors duration-300">
              +1 (212) 555-0147
            </a>
          </div>

          {/* Column 2: The Restaurant */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-accent-gold mb-2">
              The Restaurant
            </h4>
            <a href="#menu" className="font-sans text-[14px] text-muted-text hover:text-accent-gold transition-colors duration-300 w-fit">
              The Menu
            </a>
            <a href="#story" className="font-sans text-[14px] text-muted-text hover:text-accent-gold transition-colors duration-300 w-fit">
              Our Story
            </a>
            <a href="#story" className="font-sans text-[14px] text-muted-text hover:text-accent-gold transition-colors duration-300 w-fit">
              Meet the Chef
            </a>
            <a href="#story" className="font-sans text-[14px] text-muted-text hover:text-accent-gold transition-colors duration-300 w-fit">
              Sustainability
            </a>
          </div>

          {/* Column 3: Reservations */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-accent-gold mb-2">
              Reservations
            </h4>
            <a href="#reserve" className="font-sans text-[14px] text-muted-text hover:text-accent-gold transition-colors duration-300 w-fit">
              Book Online
            </a>
            <a href="#private-dining" className="font-sans text-[14px] text-muted-text hover:text-accent-gold transition-colors duration-300 w-fit">
              Private Dining
            </a>
            <a href="#events" className="font-sans text-[14px] text-muted-text hover:text-accent-gold transition-colors duration-300 w-fit">
              Special Events
            </a>
            <a href="#reserve" className="font-sans text-[14px] text-muted-text hover:text-accent-gold transition-colors duration-300 w-fit">
              Gift Cards
            </a>
          </div>

          {/* Column 4: Follow Us (Socials + Newsletter) */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-eyebrow text-accent-gold mb-2">
              Follow Us
            </h4>
            {/* Social SVGs */}
            <div className="flex items-center space-x-4 mb-4">
              {/* Instagram custom SVG */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 border border-accent-gold/20 flex items-center justify-center text-accent-cream hover:bg-accent-gold hover:text-base transition-all duration-300"
                style={{ borderRadius: '0px' }}
                aria-label="Instagram link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook custom SVG */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 border border-accent-gold/20 flex items-center justify-center text-accent-cream hover:bg-accent-gold hover:text-base transition-all duration-300"
                style={{ borderRadius: '0px' }}
                aria-label="Facebook link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Compass Lucide Icon */}
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 border border-accent-gold/20 flex items-center justify-center text-accent-cream hover:bg-accent-gold hover:text-base transition-all duration-300"
                style={{ borderRadius: '0px' }}
                aria-label="Tripadvisor link"
              >
                <Compass size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Newsletter row */}
        <div className="border-t border-accent-gold/15 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left w-full md:w-auto">
            <h4 className="font-sans text-[13px] font-semibold uppercase tracking-widest text-accent-cream mb-1">
              Stay at the Table
            </h4>
            <p className="font-sans text-[13px] text-muted-text">
              Subscribe to receive private invitations to hearthside events and seasonal menu updates.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="w-full md:w-[380px] flex items-center">
            {isSubscribed ? (
              <p className="font-sans text-[13px] text-accent-gold font-semibold uppercase tracking-wider py-3">
                Welcome to the Table.
              </p>
            ) : (
              <>
                <input 
                  type="email" 
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow h-12 bg-base border border-accent-gold/20 text-accent-cream px-4 font-sans text-[14px] focus:outline-none focus:border-accent-gold transition-colors"
                  style={{ borderRadius: '0px' }}
                />
                <button 
                  type="submit"
                  className="h-12 bg-transparent text-accent-gold hover:bg-accent-gold hover:text-base border border-l-0 border-accent-gold/20 hover:border-accent-gold transition-all px-5 cursor-pointer flex items-center justify-center"
                  style={{ borderRadius: '0px' }}
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-muted-text gap-4">
          <p>© {new Date().getFullYear()} Ember & Stone. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#reserve" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#reserve" className="hover:text-accent-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
