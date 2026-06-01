import React from 'react';

const OCCASIONS = [
  {
    title: 'Anniversary Dinners',
    desc: 'Intimate candlelit enclosures customized with fine floristry and custom pairings.',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Corporate Banquets',
    desc: 'Bespoke multi-course culinary hosting built to inspire high-performance teams.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Wedding Receptions',
    desc: 'A gorgeous, immersive visual dining memory configured for your special day.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: "Private Chef's Table",
    desc: 'Direct culinary counter seating facing the hearth, guided by the Head Chef.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
  },
];

export default function PrivateDining() {
  return (
    <section id="private-dining" className="relative w-full bg-secondary py-24 md:py-32 z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        
        {/* Header Block */}
        <div className="mb-16 reveal-on-scroll text-left">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-4 block">
            Private Spaces
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-accent-cream">
            Occasions Made Eternal
          </h2>
        </div>

        {/* Occasions 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll">
          {OCCASIONS.map((occ, idx) => (
            <div 
              key={idx}
              className="group relative h-[380px] md:h-[480px] overflow-hidden border border-accent-gold/10 cursor-pointer flex flex-col justify-end p-8 md:p-12 hover:border-accent-gold/30 transition-all duration-500"
              style={{ borderRadius: '0px' }}
            >
              {/* Background Image with hover zoom */}
              <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
                <img 
                  src={occ.image} 
                  alt={occ.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500 -z-10" />

              {/* Centered Overlay content that slides up */}
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-start">
                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-accent-cream mb-3 group-hover:text-accent-gold transition-colors duration-300">
                  {occ.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-[13px] md:text-[14px] text-muted-text/90 leading-relaxed mb-6 max-w-[420px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {occ.desc}
                </p>

                {/* Custom Enquire link */}
                <span className="text-[12px] font-sans font-semibold uppercase tracking-widest text-accent-gold border-b border-accent-gold/40 pb-1 group-hover:border-accent-gold transition-all">
                  Enquire Now →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
