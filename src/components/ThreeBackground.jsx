import React from 'react';

export default function ThreeBackground() {
  return (
    <>
      {/* Editorial Organic Base Backdrop */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat transition-all duration-700 pointer-events-none"
        style={{
          backgroundColor: '#0D0D0D',
          backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80')`,
          backgroundBlendMode: 'soft-light',
          opacity: 0.9,
        }}
      >
        {/* Deep Moody Ambient Gradients (Michelin Candlelight Glow) */}
        <div className="absolute inset-0 bg-[#0D0D0D]/40" />

        {/* Golden Light Well (Top Left) */}
        <div 
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent-gold/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"
          style={{ animationDuration: '12s' }}
        />

        {/* Golden Light Well (Bottom Right) */}
        <div 
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-accent-gold/4 rounded-full blur-[160px] pointer-events-none animate-pulse-slow"
          style={{ animationDuration: '18s' }}
        />

        {/* Faint Amber Center Highlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-[#C8A96E]/2 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Tactile Fine Art Noise Filter (Page-wide organic texture overlay) */}
      <svg 
        className="opacity-[0.016] pointer-events-none fixed inset-0 w-full h-full z-[100]" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="emberNoise">
          {/* Generate high-frequency fractal noise */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.75" 
            numOctaves="3" 
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#emberNoise)"/>
      </svg>

      {/* Pulse keyframe custom styles */}
      <style>{`
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
