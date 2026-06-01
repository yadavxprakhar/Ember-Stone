import React, { useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import SignatureDishes from './components/SignatureDishes';
import Events from './components/Events';
import PrivateDining from './components/PrivateDining';
import StatsBar from './components/StatsBar';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  // Global scroll reveal observer hook
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve once revealed to keep layout light
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before full entrance
      }
    );

    reveals.forEach((el) => observer.observe(el));

    // Handle top navbar offset dynamically when announcement bar is closed
    const handleOffset = () => {
      const annBar = document.querySelector('.bg-accent-gold');
      if (annBar) {
        document.documentElement.style.setProperty('--navbar-offset', '44px');
      } else {
        document.documentElement.style.setProperty('--navbar-offset', '0px');
      }
    };

    handleOffset();
    // Observe DOM changes to see if announcement bar is unmounted
    const domObserver = new MutationObserver(handleOffset);
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      domObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Absolute 3D Backdrop canvas */}
      <ThreeBackground />

      {/* Floating Content container with high Z-index */}
      <div className="relative z-10 w-full min-h-screen flex flex-col overflow-x-hidden">
        {/* Top announcement */}
        <AnnouncementBar />

        {/* Global Nav */}
        <Navbar />

        {/* Section flow */}
        <Hero />
        <About />
        <Menu />
        <SignatureDishes />
        <Events />
        <PrivateDining />
        <StatsBar />
        <Gallery />
        <FAQ />
        <Reservation />

        {/* Brand Footer */}
        <Footer />
      </div>
    </>
  );
}
