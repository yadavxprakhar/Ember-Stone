import React, { useState } from 'react';

export default function Reservation() {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [time, setTime] = useState('7:00 PM');
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setDate('');
    }, 4000);
  };

  return (
    <section id="reserve" className="relative w-full min-h-screen flex items-center justify-center py-24 md:py-32 z-10">
      {/* Soft overlay gradient to anchor text blocks */}
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-base/95 pointer-events-none" />

      <div className="relative z-10 max-w-[800px] w-full mx-auto px-6 text-center">
        
        {/* Header Block */}
        <div className="mb-12 reveal-on-scroll">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-4 block animate-pulse">
            Your Table Awaits
          </span>
          <h2 className="font-display font-light italic text-4xl md:text-5xl lg:text-6xl text-accent-cream leading-tight">
            Reserve Your Evening
          </h2>
        </div>

        {/* Booking Interactive Dashboard */}
        <div className="bg-secondary/70 backdrop-blur-md border border-accent-gold/15 p-8 md:p-12 mb-8 reveal-on-scroll" style={{ borderRadius: '0px' }}>
          {isBooked ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <span className="text-accent-gold text-4xl mb-4">✓</span>
              <h3 className="font-display text-2xl text-accent-cream mb-2">Reservation Request Received</h3>
              <p className="font-sans text-[14px] text-muted-text max-w-sm">
                A confirmation email containing your digital dining itinerary has been sent to your inbox. We look forward to hosting you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch justify-center gap-4">
              
              {/* Date Input */}
              <div className="flex-1 text-left">
                <label className="block font-sans text-[10px] font-semibold uppercase tracking-widest text-accent-gold mb-2 pl-1">
                  Select Date
                </label>
                <input 
                  type="date" 
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-12 bg-base border border-accent-gold/20 text-accent-cream px-4 font-sans text-[14px] focus:outline-none focus:border-accent-gold transition-colors"
                  style={{ borderRadius: '0px', colorScheme: 'dark' }}
                />
              </div>

              {/* Guests Dropdown */}
              <div className="flex-1 text-left">
                <label className="block font-sans text-[10px] font-semibold uppercase tracking-widest text-accent-gold mb-2 pl-1">
                  Party Size
                </label>
                <select 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full h-12 bg-base border border-accent-gold/20 text-accent-cream px-4 font-sans text-[14px] focus:outline-none focus:border-accent-gold transition-colors appearance-none cursor-pointer"
                  style={{ borderRadius: '0px' }}
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6 Guests</option>
                  <option>Private Room (7+)</option>
                </select>
              </div>

              {/* Time Dropdown */}
              <div className="flex-1 text-left">
                <label className="block font-sans text-[10px] font-semibold uppercase tracking-widest text-accent-gold mb-2 pl-1">
                  Time Slot
                </label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full h-12 bg-base border border-accent-gold/20 text-accent-cream px-4 font-sans text-[14px] focus:outline-none focus:border-accent-gold transition-colors appearance-none cursor-pointer"
                  style={{ borderRadius: '0px' }}
                >
                  <option>5:00 PM</option>
                  <option>6:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:00 PM</option>
                </select>
              </div>

              {/* Submit Button (Filled gold for gorgeous focus!) */}
              <div className="flex justify-end items-end">
                <button 
                  type="submit"
                  className="w-full md:w-auto h-12 bg-accent-gold text-[#0D0D0D] font-sans text-[13px] font-semibold uppercase tracking-btn px-8 border border-accent-gold hover:bg-transparent hover:text-accent-gold transition-all duration-300 cursor-pointer flex items-center justify-center whitespace-nowrap"
                  style={{ borderRadius: '0px' }}
                >
                  Find a Table
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Muted Call Options */}
        <div className="reveal-on-scroll">
          <p className="font-sans text-[13px] text-muted-text">
            Prefer to speak with our maître d’?{' '}
            <a 
              href="tel:+12125550147" 
              className="text-accent-cream border-b border-accent-gold/40 hover:border-accent-gold transition-colors pb-0.5"
            >
              Call us directly — +1 (212) 555-0147
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
