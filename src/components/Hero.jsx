import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 z-10">
      {/* Dark moody gradient overlay above Three.js fixed background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/30 via-[#0d0d0d]/60 to-[#0d0d0d]/95 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 max-w-[800px] w-full text-center flex flex-col items-center">
        {/* Eyebrow Label */}
        <span 
          className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          Fine Dining · Est. 2018
        </span>

        {/* H1 Heading */}
        <h1 
          className="font-display italic font-light text-5xl md:text-7xl lg:text-8xl text-accent-cream leading-[1.05] tracking-tight mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          Where Fire Meets <br />
          <span className="font-normal">Flavour</span>
        </h1>

        {/* Description Body */}
        <p 
          className="font-sans text-[15px] md:text-[17px] leading-relaxed text-muted-text max-w-[560px] mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          An intimate fine dining experience rooted in seasonal ingredients, open flame cooking, and artisanal craft.
        </p>

        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full opacity-0 animate-fade-up"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <a href="#reserve" className="btn-primary w-full sm:w-auto">
            Reserve a Table
          </a>
          <a href="#menu" className="btn-secondary w-full sm:w-auto">
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-up"
        style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
      >
        <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-accent-gold mb-3">
          Scroll
        </span>
        {/* Pulsing vertical line */}
        <div className="w-[1px] h-10 bg-accent-gold/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold animate-bounce-custom" />
        </div>
      </div>

      {/* Bounce-custom animation style inside a React style tag */}
      <style>{`
        @keyframes lineBounce {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(200%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-bounce-custom {
          animation: lineBounce 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
      `}</style>
    </section>
  );
}
