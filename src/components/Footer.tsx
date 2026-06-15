import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-beige-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-3xl tracking-widest uppercase leading-none mb-1 text-beige-100">
                LIVORA
              </span>
              <span className="text-[0.7rem] tracking-[0.3em] uppercase text-beige-100/70">
                Interiors
              </span>
            </div>
            <p className="text-beige-200/60 font-light max-w-sm mb-8 text-sm leading-relaxed">
              Redefining spaces and elevating lives through purposeful, beautiful design tailored to your unique story.
            </p>
            
            <div className="flex items-center space-x-6 text-beige-100/80">
              <a href="#" className="hover:text-beige-100 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-beige-100 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-beige-100 transition-colors"><Youtube size={20} /></a>
              <a href="#" className="hover:text-beige-100 transition-colors" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.288 1.178c-.046.182-.147.228-.337.139-1.261-.582-2.05-2.409-2.05-3.882 0-3.158 2.296-6.059 6.621-6.059 3.481 0 6.185 2.482 6.185 5.795 0 3.461-2.181 6.248-5.207 6.248-1.018 0-1.975-.529-2.302-1.155l-.64 2.418c-.232.883-.859 1.988-1.282 2.661 1.028.318 2.113.488 3.235.488 6.627 0 12.023-5.385 12.023-12.009C24.041 5.367 18.669 0 12.017 0z"/>
                </svg>
              </a>
            </div>
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
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-beige-100">Our Services</h4>
            <ul className="space-y-4 text-sm font-light text-beige-200/70">
              <li><a href="#" className="hover:text-beige-100 transition-colors">Residential Design</a></li>
              <li><a href="#" className="hover:text-beige-100 transition-colors">Commercial Design</a></li>
              <li><a href="#" className="hover:text-beige-100 transition-colors">Interior Styling</a></li>
              <li><a href="#" className="hover:text-beige-100 transition-colors">Design Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-beige-100">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-beige-200/70">
              <li>hello@livorainteriors.com</li>
              <li>+91 8886767991</li>
              <li className="leading-relaxed">123 Design Avenue,<br/>Jubilee Hills, Hyderabad,<br/>Telangana 500033</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-beige-100/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-beige-200/50 uppercase tracking-wider mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Livora Interiors. All rights reserved.
          </p>
          <div className="flex text-xs text-beige-200/50 uppercase tracking-wider space-x-2">
            <a href="#" className="hover:text-beige-100 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-beige-100 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
