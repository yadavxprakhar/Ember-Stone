import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full h-11 bg-accent-gold flex items-center justify-center px-4 z-50 transition-all duration-300">
      <p className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-base text-center">
        Reservations now open for New Year's Eve —{' '}
        <a 
          href="#reserve" 
          className="underline hover:text-accent-gold-hover transition-colors duration-200"
        >
          Book Your Table
        </a>
      </p>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 text-base hover:text-accent-gold-hover transition-colors duration-200 p-1"
        aria-label="Close announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
