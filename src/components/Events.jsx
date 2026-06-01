import React from 'react';

const EVENTS = [
  {
    date: 'Dec 31',
    title: "New Year's Eve Gala",
    time: '8:00 PM — 1:00 AM',
    desc: 'An exclusive multi-course tasting menu with vintage Champagne pairings and live jazz performance.',
  },
  {
    date: 'Jan 15',
    title: 'Open Fire Masterclass',
    time: '6:30 PM — 9:30 PM',
    desc: 'An intimate culinary journey guided by Chef Eric, exploring smoking, curing, and flame-cooking techniques.',
  },
  {
    date: 'Feb 14',
    title: 'Valentine\'s Symphony',
    time: '5:30 PM — 10:30 PM',
    desc: 'A romantic, sensory-themed blind tasting menu designed with organic florals and dry-aged delicacies.',
  },
];

export default function Events() {
  return (
    <section 
      id="events" 
      className="relative w-full min-h-screen flex items-center bg-cover bg-center py-24 md:py-32 z-10"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      {/* Dark moody overlay */}
      <div className="absolute inset-0 bg-base/85 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-20">
        
        {/* Header Block */}
        <div className="max-w-[700px] mb-16 reveal-on-scroll text-left">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-4 block">
            Upcoming Events
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-accent-cream leading-tight">
            An Evening to Remember
          </h2>
        </div>

        {/* Events Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 reveal-on-scroll">
          {EVENTS.map((event, idx) => (
            <div 
              key={idx}
              className="group flex flex-col bg-secondary/65 backdrop-blur-md border border-accent-gold/15 p-6 md:p-8 hover:border-accent-gold/40 transition-all duration-500"
              style={{ borderRadius: '0px' }}
            >
              {/* Date Chip */}
              <div className="mb-6 flex justify-start">
                <span className="bg-accent-gold text-base text-[11px] font-sans font-semibold uppercase tracking-widest px-4 py-2 leading-none">
                  {event.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-accent-cream mb-3 group-hover:text-accent-gold transition-colors duration-300">
                {event.title}
              </h3>

              {/* Time */}
              <span className="text-[12px] font-sans font-medium text-accent-gold/80 uppercase tracking-wider mb-4 block">
                {event.time}
              </span>

              {/* Description */}
              <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-muted-text mb-8 flex-grow">
                {event.desc}
              </p>

              {/* Link CTA */}
              <div className="mt-auto">
                <a href="#reserve" className="text-link group inline-flex items-center text-[13px] font-semibold tracking-wider">
                  Reserve Seat 
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center md:text-left reveal-on-scroll">
          <a href="#reserve" className="btn-primary">
            View All Events
          </a>
        </div>

      </div>
    </section>
  );
}
