import React from 'react';

const TILES = [
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Gourmet French dish close up',
  },
  {
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Chef prepping at the kitchen counter',
  },
  {
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Sommelier pouring red wine',
  },
  {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Steak cooking on fire grill',
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Artisanal ingredients close up',
  },
  {
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Plated sweet pastry dessert',
  },
  {
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Chef plating fine ingredients with tweezers',
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Wood-fired kitchen embers and sparks',
  },
  {
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Candlelit dining details',
  },
  {
    image: 'https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Gourmet smoke cocktail infusion',
  },
  {
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Artisanal hearth-baked sour bread',
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&h=400&q=80',
    alt: 'Dining room perspective',
  },
];

// Double the set to ensure seamless infinite marquee looping
const SLIDE_ITEMS = [...TILES, ...TILES];

export default function Gallery() {
  return (
    <section className="relative w-full bg-base py-24 md:py-32 z-10 overflow-hidden">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16 px-6 reveal-on-scroll">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-4 block">
            Follow the Experience
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-accent-cream mb-4">
            @emberandstone
          </h2>
        </div>

        {/* Cinematic Infinite Moving Film Tape */}
        <div className="relative w-full overflow-hidden border-t border-b border-accent-gold/15 bg-secondary flex select-none pointer-events-auto">
          {/* Marquee sliding track container */}
          <div 
            className="flex w-max animate-marquee hover:[animation-play-state:paused] ease-linear"
          >
            {SLIDE_ITEMS.map((tile, idx) => (
              <div 
                key={idx}
                className="group relative w-[240px] md:w-[350px] aspect-square overflow-hidden cursor-pointer flex-shrink-0 border-r border-accent-gold/10"
              >
                {/* Photo */}
                <img 
                  src={tile.image} 
                  alt={tile.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gold overlay + centered inline Instagram SVG icon */}
                <div className="absolute inset-0 bg-accent-gold/0 group-hover:bg-accent-gold/65 transition-all duration-500 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#0d0d0d" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out shrink-0"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Link */}
        <div className="text-center mt-16 px-6 reveal-on-scroll">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-link group inline-flex items-center text-[13px] tracking-wider"
          >
            Follow on Instagram
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
              →
            </span>
          </a>
        </div>

      </div>

      {/* Marquee loop keyframe animation custom styles */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marqueeScroll 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
