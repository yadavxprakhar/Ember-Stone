import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Do you accommodate dietary restrictions?',
    answer: 'Absolutely. We offer comprehensive tasting menus tailored for vegan, vegetarian, and gluten-free palates. Please notify us of any severe allergies or dietary considerations at least 48 hours prior to your booking.',
  },
  {
    question: 'What is the dress code at Ember & Stone?',
    answer: 'We recommend smart elegant or business formal attire. To preserve our premium Michelin-starred dining environment, sportswear, beachwear, and casual sandals are not permitted.',
  },
  {
    question: 'How far in advance should I reserve?',
    answer: 'Reservations open on the 1st of every month at 9:00 AM EST for the following month. We highly recommend booking 30 to 45 days in advance, as seating is limited to 48 guests per evening.',
  },
  {
    question: 'Do you offer tasting menus only?',
    answer: 'Yes, we serve an exclusive 9-course seasonal tasting menu centered around open-fire hearth cooking. A curated collection of wine and non-alcoholic pairings are also available to complement the experience.',
  },
  {
    question: 'Is valet parking available?',
    answer: 'Complimentary secure valet parking is provided for all our dining patrons at the main entrance. Self-parking facilities are also available adjacent to our courtyard garden.',
  },
  {
    question: 'Can I host private events or booking buyouts?',
    answer: 'Yes, we host wedding receptions, corporate galas, and private dining counter events. For inquiries regarding custom buyout menus or event bookings, please visit our Private Dining section or contact us directly.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full bg-secondary py-24 md:py-32 z-10 border-b border-accent-gold/15">
      <div className="max-w-[720px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-4 block">
            Questions
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-accent-cream">
            Everything You Need to Know
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col border-t border-accent-gold/15 reveal-on-scroll">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`border-b transition-all duration-500 ease-in-out py-6 ${
                  isOpen ? 'border-accent-gold' : 'border-accent-gold/15'
                }`}
              >
                {/* Header Toggle Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-lg md:text-xl transition-colors duration-300 ${
                    isOpen ? 'text-accent-gold' : 'text-accent-cream group-hover:text-accent-gold'
                  }`}>
                    {item.question}
                  </span>
                  
                  {/* Icon toggler */}
                  <span className="ml-4 text-accent-gold shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus size={18} className="transform rotate-180 transition-transform duration-300" />
                    ) : (
                      <Plus size={18} className="transform rotate-0 transition-transform duration-300" />
                    )}
                  </span>
                </button>

                {/* Body Answer container (smooth collapse height transition) */}
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '250px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? '16px' : '0px',
                  }}
                >
                  <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-muted-text">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
