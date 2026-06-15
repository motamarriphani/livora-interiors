import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-beige-100 py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-col mb-6">
            <span className="font-serif text-3xl tracking-widest uppercase leading-none mb-1 text-beige-100">
              LIVORA
            </span>
            <span className="text-[0.7rem] tracking-[0.3em] uppercase text-beige-100/70">
              Interiors
            </span>
          </div>
          <p className="text-beige-200/60 font-light max-w-sm mb-6 text-sm leading-relaxed">
            Redefining spaces and elevating lives through purposeful, beautiful design tailored to your unique story.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-beige-100">Explore</h4>
          <ul className="space-y-4 text-sm font-light text-beige-200/70">
            <li><a href="#" className="hover:text-beige-100 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-beige-100 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-beige-100 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-beige-100 transition-colors">Portfolio</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-beige-100">Contact</h4>
          <ul className="space-y-4 text-sm font-light text-beige-200/70">
            <li>hello@livorainteriors.com</li>
            <li>+1 (555) 123-4567</li>
            <li>123 Design Avenue,<br/>New York, NY 10001</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-beige-100/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-beige-200/50 uppercase tracking-wider mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Livora Interiors. All rights reserved.
        </p>
        <div className="flex text-xs text-beige-200/50 uppercase tracking-wider space-x-6">
          <a href="#" className="hover:text-beige-100 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-beige-100 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
