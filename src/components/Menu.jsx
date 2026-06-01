import React, { useState } from 'react';

const MENU_DATA = {
  Starters: [
    {
      name: 'Wood-Fired Beetroot',
      description: 'Roast organic heirloom beets, whipped goat cheese, wild honey, smoked hazelnuts.',
      price: '$24',
    },
    {
      name: 'Cured Amberjack',
      description: 'Thinly sliced wild amberjack, charred lemon emulsion, sea fennel, crispy capers.',
      price: '$28',
    },
    {
      name: 'Coal-Roasted Bone Marrow',
      description: 'Hand-sliced sourdough toast, fresh herb salad, sea salt, pickled baby shallots.',
      price: '$26',
    },
    {
      name: 'Wild Forest Broth',
      description: 'Fire-steeped chanterelle mushrooms, pine needle oil, preserved winter truffle.',
      price: '$22',
    },
  ],
  Mains: [
    {
      name: '45-Day Dry-Aged Tomahawk',
      description: 'Prime rib roast cooked over cherrywood, smoked tallow butter, ash-roasted sweet onions.',
      price: '$115',
    },
    {
      name: 'Line-Caught Salmon',
      description: 'Crispy skin salmon, coastal sea greens, butter-emulsified dashi, smoked trout roe.',
      price: '$46',
    },
    {
      name: 'Fire-Roasted Venison Loin',
      description: 'Wild forest berry glaze, burnt parsnip purée, pine extract, wild juniper berries.',
      price: '$52',
    },
    {
      name: 'Charred Cauliflower Steak',
      description: 'Roasted yeast glaze, smoked almonds, pickled golden raisins, garden herb oil.',
      price: '$38',
    },
  ],
  Desserts: [
    {
      name: 'Smoked Chocolate Ganache',
      description: 'Single-origin dark chocolate, whiskey woodsmoke infusion, flaky sea salt, cold-pressed olive oil.',
      price: '$18',
    },
    {
      name: 'Burnt Honey Tart',
      description: 'Caramelised orange blossom honey, organic buttermilk ice cream, sea salt honeycomb.',
      price: '$16',
    },
    {
      name: 'Wood-Fired Orchard Pear',
      description: 'Cardamom-poached heirloom pear, ginger oat crumble, toasted bay leaf ice cream.',
      price: '$16',
    },
    {
      name: 'Coal-Roasted Fig Tart',
      description: 'Fire-baked black mission figs, lavender goat cheese mousse, wild pistachio praline.',
      price: '$18',
    },
  ],
  Wine: [
    {
      name: 'Château Margaux 2015',
      description: 'Bordeaux, France — elegant structure, deep dark fruits, rich earthy wood tannin.',
      price: '$95 / glass',
    },
    {
      name: 'Domaine de la Romanée-Conti 2018',
      description: 'Burgundy, France — refined cherry blossom notes, wild herb forest floor complexity.',
      price: '$110 / glass',
    },
    {
      name: 'Krug Clos d\'Ambonnay 2002',
      description: 'Champagne, France — intense mineral-forward palate, roasted brioche and toasted hazelnut finish.',
      price: '$135 / glass',
    },
    {
      name: 'Barolo Riserva Monfortino',
      description: 'Piedmont, Italy — powerful leather notes, dry rose, bitter orange peel, persistent finish.',
      price: '$85 / glass',
    },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Starters');

  return (
    <section id="menu" className="relative w-full bg-secondary py-24 md:py-32 z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        
        {/* Header Block */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-[11px] font-sans font-semibold uppercase tracking-eyebrow text-accent-gold mb-4 block">
            The Menu
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-accent-cream">
            Crafted with Intention
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-accent-gold/15 mb-16 overflow-x-auto whitespace-nowrap scrollbar-hide max-w-lg mx-auto">
          {Object.keys(MENU_DATA).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-sans text-[13px] font-semibold uppercase tracking-btn border-b-2 transition-all duration-300 ${
                activeTab === tab
                  ? 'border-accent-gold text-accent-cream'
                  : 'border-transparent text-muted-text hover:text-accent-cream'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16 reveal-on-scroll">
          {MENU_DATA[activeTab].map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col border-b border-accent-gold/10 pb-6 transition-all duration-300 hover:border-accent-gold/30"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-display text-xl text-accent-cream">
                  {item.name}
                </h3>
                <span className="font-sans text-[14px] font-semibold text-accent-gold ml-4 shrink-0">
                  {item.price}
                </span>
              </div>
              <p className="font-sans text-[14px] leading-relaxed text-muted-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center reveal-on-scroll">
          <a href="#reserve" className="text-link group inline-flex items-center">
            Download Full Menu 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
