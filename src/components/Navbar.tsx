import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 lg:px-12 flex items-center justify-between">
      <div className="flex flex-col">
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

      <button className="hidden md:block bg-olive-900 text-beige-100 px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors">
        Book a Consultation
      </button>

      <button className="md:hidden text-olive-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </nav>
  );
}
