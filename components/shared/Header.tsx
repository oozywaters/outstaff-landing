'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-lg border-zinc-800'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-bold tracking-tight hover:text-amber-400 transition-colors"
          >
            Elite Level <span className="text-amber-400">Services</span>
          </button>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-medium rounded-full transition-all hover:scale-105"
            >
              Связаться
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
