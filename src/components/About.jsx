import React from 'react';

export default function About() {
  return (
    <section id="story" className="relative w-full bg-base py-24 md:py-32 z-10 border-t border-b border-accent-gold/15">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left Column: Dramatic Chef Image */}
          <div className="relative aspect-[3/4] overflow-hidden border border-accent-gold/10 reveal-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" 
              alt="Chef crafting dish over wood fire grill" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              loading="lazy"
            />
            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-60" />
          </div>

          {/* Right Column: Vertically Centered Text Block */}
          <div className="flex flex-col justify-center items-start text-left reveal-on-scroll">
            {/* Eyebrow */}
            <span className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-4">
              Our Philosophy
            </span>
            
            {/* H2 Heading */}
            <h2 className="font-display font-light text-4xl md:text-5xl text-accent-cream leading-tight mb-6">
              Food is Memory. <br />
              <span className="italic font-normal">We craft both.</span>
            </h2>
            
            {/* Body */}
            <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-muted-text mb-8 max-w-[480px]">
              Every dish we serve is an exploration of memory and sensory connection. Rooted in traditional open flame cooking, we bring seasonal organic ingredients together with modern culinary artistry to design unforgettable dining stories.
            </p>
            
            {/* Custom Text Link */}
            <a href="#menu" className="text-link group">
              Read Our Story 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                →
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
