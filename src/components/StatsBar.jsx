import React, { useState, useEffect, useRef } from 'react';

const STATS_ITEMS = [
  { target: 12, suffix: '', label: 'Years of Excellence' },
  { target: 3, suffix: '', label: 'Michelin Stars' },
  { target: 48, suffix: '', label: 'Seats Only' },
  { target: 100, suffix: '%', label: 'Seasonal Ingredients' },
];

function StatCount({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds count animation
    const increment = target / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center text-center p-4">
      {/* Stat Number */}
      <span className="font-display font-light text-5xl md:text-6xl text-accent-gold mb-2 transition-all">
        {count}
        {suffix}
      </span>
      {/* Stat Label */}
      <span className="font-sans text-[11px] md:text-[12px] font-semibold uppercase tracking-eyebrow text-muted-text">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative w-full bg-bg-footer py-16 md:py-20 z-10 border-b border-accent-gold/15">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 items-center justify-center">
          {STATS_ITEMS.map((item, idx) => (
            <React.Fragment key={idx}>
              {/* Stat Card */}
              <StatCount 
                target={item.target} 
                suffix={item.suffix} 
                label={item.label} 
              />
              
              {/* Vertical Gold Divider (hidden on mobile, and after the last item) */}
              {idx < STATS_ITEMS.length - 1 && (
                <div className="hidden md:block w-[1px] h-16 bg-accent-gold/15 self-center" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
