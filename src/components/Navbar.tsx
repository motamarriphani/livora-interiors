import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    setIsMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 lg:px-12 flex items-center justify-between">
        <div className="flex flex-col relative z-[60]">
          <span className="font-serif text-2xl tracking-widest uppercase text-olive-900 leading-none mb-1">
            LIVORA
          </span>
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-olive-900">
            Interiors
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide uppercase text-olive-900/80">
          <a href="#" className="border-b border-olive-900 pb-1 text-olive-900">Home</a>
          <a href="#" className="hover:text-olive-900 transition-colors">About</a>
          <a href="#" className="hover:text-olive-900 transition-colors">Services</a>
          <a href="#" className="hover:text-olive-900 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-olive-900 transition-colors">Blog</a>
          <a href="#" className="hover:text-olive-900 transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-6 relative z-[60]">
          <div className="flex items-center text-olive-900 text-sm font-medium">
            <Phone size={14} className="mr-2" />
            +91 8886767991
          </div>
          <button 
            onClick={scrollToContact}
            className="bg-olive-900 text-beige-100 px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors"
          >
            Book a Consultation
          </button>
        </div>

        <button 
          className="md:hidden text-olive-900 relative z-[60]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-beige-100 z-50 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-olive-900">Home</a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-olive-900">About</a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-olive-900">Services</a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-olive-900">Portfolio</a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-olive-900">Blog</a>
        <a href="#" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-olive-900">Contact</a>
        
        <div className="flex flex-col items-center mt-8 space-y-6">
          <div className="flex items-center text-olive-900">
            <Phone size={18} className="mr-2" />
            +91 8886767991
          </div>
          <button 
            onClick={scrollToContact}
            className="bg-olive-900 text-beige-100 px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </>
  );
}
