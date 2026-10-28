import { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../content';
import Logo from './Logo';

const pillCta = 'rounded-full bg-ink text-paper text-[13px] font-medium uppercase tracking-[.06em]';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(80);
  const navRef = useRef<HTMLElement>(null);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => {
    // The banner above the nav scrolls away, so anchor the overlay to wherever the nav currently ends.
    if (navRef.current) setMenuTop(navRef.current.getBoundingClientRect().bottom);
    setMenuOpen((open) => !open);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 bg-ink px-5 py-2.5 text-center text-sm text-sand">
        <span className="font-telugu text-[17px]">నమస్కారం</span>
        <span className="text-gold-light">·</span>
        <span className="font-serif text-base italic">Namaskaram — welcome home.</span>
        <span className="hidden text-gold-light md:inline">·</span>
        <span className="hidden font-mono text-xs uppercase tracking-[.06em] text-sand/75 md:inline">Kukatpally, హైదరాబాద్</span>
      </div>

      <nav ref={navRef} className="px-page sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-ink/10 bg-cream/95 py-4 backdrop-blur-md">
        <a href="#top" onClick={closeMenu} aria-label="The Livora Interiors home">
          <Logo />
        </a>

        <div className="hidden gap-[clamp(20px,2.4vw,32px)] text-sm lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="py-1.5 hover:text-gold">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className={`${pillCta} hidden whitespace-nowrap px-[22px] py-3.5 md:inline-block`}>
            Free Consultation
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center lg:hidden"
          >
            {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ top: menuTop }} className="fixed inset-x-0 bottom-0 z-[45] flex flex-col overflow-y-auto bg-cream px-5 pb-10 pt-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-ink/12 py-3 font-serif text-[34px] font-light"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className={`${pillCta} mt-7 flex min-h-14 items-center justify-center text-sm`}>
            Book a Free Consultation
          </a>
          <span className="mt-4 text-center font-telugu text-base">
            రండి, మాట్లాడుకుందాం · <span className="font-serif italic">Randi, maatladukundaam</span>
          </span>
        </div>
      )}
    </>
  );
}
