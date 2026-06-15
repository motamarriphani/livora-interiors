import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 80);

      // Check if overlapping dark section
      const navbarRect = document.querySelector('nav')?.getBoundingClientRect();
      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      let overlappingDark = false;

      if (navbarRect) {
        const navCenterY = navbarRect.top + navbarRect.height / 2;
        darkSections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (navCenterY >= rect.top && navCenterY <= rect.bottom) {
            overlappingDark = true;
          }
        });
      }
      setIsDarkTheme(overlappingDark);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Find the one that takes up the most space or the last one to enter
        const current = visibleEntries[visibleEntries.length - 1];
        if (current.target.id) {
          setActiveSection(current.target.id);
        }
      }
    }, { threshold: 0.4 });

    navLinks.forEach(link => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  let navClasses = "fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12 flex items-center justify-between transition-all duration-300 ";
  let textClasses = "";
  
  if (isScrolled) {
    if (isDarkTheme) {
      navClasses += "bg-[#2C3426] border-b border-[#2C3426]";
      textClasses = "text-[#F5F3EE]";
    } else {
      navClasses += "bg-[#F2EFEA] border-b border-[rgba(44,52,38,0.1)]";
      textClasses = "text-[#2C3426]";
    }
  } else {
    navClasses += "bg-transparent";
    textClasses = "text-white";
  }

  return (
    <>
      <nav className={navClasses}>
        <div className={`flex flex-col relative z-[60] ${textClasses}`}>
          <a href="#hero" className="font-serif text-2xl tracking-widest uppercase leading-none mb-1 cursor-pointer">
            LIVORA
          </a>
          <span className={`text-[0.65rem] tracking-[0.3em] uppercase ${isScrolled && !isDarkTheme ? 'text-[#2C3426]' : 'text-white/80'}`}>
            Interiors
          </span>
        </div>

        <div className={`hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${isScrolled ? (isDarkTheme ? 'text-[#F5F3EE]/80' : 'text-[#2C3426]/80') : 'text-white/80'}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`pb-1 border-b transition-colors ${activeSection === link.href.substring(1) ? (isScrolled && isDarkTheme ? 'border-[#F5F3EE] text-[#F5F3EE]' : (isScrolled ? 'border-[#2C3426] text-[#2C3426]' : 'border-white text-white')) : 'border-transparent hover:text-opacity-100 hover:text-current'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className={`hidden md:flex items-center space-x-6 relative z-[60] transition-colors duration-300 ${textClasses}`}>
          <a
            href="https://wa.me/918886767991?text=Hi%20Livora%20Interiors!%20I%27d%20like%20to%20discuss%20an%20interior%20design%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#25D366] text-white px-4 py-2 rounded-[2px] text-sm font-medium tracking-wider uppercase hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        <button 
          className={`lg:hidden relative z-[60] transition-colors duration-300 ${isMenuOpen ? 'text-[#2C3426]' : textClasses}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-[#F2EFEA] z-[55] transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-center items-center space-y-6 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={`text-2xl font-serif ${activeSection === link.href.substring(1) ? 'text-[#2C3426] border-b-2 border-[#2C3426]' : 'text-[#2C3426]'}`}
          >
            {link.name}
          </a>
        ))}
        
        <div className="flex flex-col items-center mt-8 space-y-6">
          <a
            href="https://wa.me/918886767991?text=Hi%20Livora%20Interiors!%20I%27d%20like%20to%20discuss%20an%20interior%20design%20project."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center bg-[#25D366] text-white px-6 py-3 rounded-[2px] text-sm font-medium tracking-wider uppercase hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}

