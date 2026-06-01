import React from 'react';

const DISHES = [
  {
    name: 'Dry-Aged Flame Tomahawk',
    description: '45-day dry aged rib roast, smoked tallow, coal-charred onion petals.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tag: "Chef's Pick",
  },
  {
    name: 'Glacier Stream Salmon',
    description: 'Pan-seared river trout, butter-emulsified dashi broth, smoked roe.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tag: 'Seasonal',
  },
  {
    name: 'Coal-Smoked Fig Tart',
    description: 'Black mission figs, lavender goat cheese mousse, roasted praline.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    tag: 'Limited Edition',
  },
];

export default function SignatureDishes() {
  return (
    <section className="relative w-full bg-base py-24 md:py-32 z-10 border-b border-accent-gold/15">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        
        {/* Section Title */}
        <div className="mb-16 reveal-on-scroll text-left">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-4 block">
            Chef's Selection
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-accent-cream">
            Dishes Worth Traveling For
          </h2>
        </div>

        {/* Dishes 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 reveal-on-scroll">
          {DISHES.map((dish, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col bg-secondary border border-accent-gold/10 transition-all duration-500 ease-in-out hover:border-accent-gold/45 overflow-hidden"
              style={{ borderRadius: '0px' }}
            >
              {/* Image Frame with hover scaling */}
              <div className="w-full aspect-square overflow-hidden relative">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-40" />
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Tag Chip */}
                <div className="mb-4">
                  <span className="tag-chip">
                    {dish.tag}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-display text-2xl text-accent-cream mb-2 group-hover:text-accent-gold transition-colors duration-300">
                  {dish.name}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-muted-text mt-1">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
