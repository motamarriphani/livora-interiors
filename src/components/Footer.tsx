import { Instagram, MessageCircle } from 'lucide-react';
import { navLinks } from '../content';
import { siteConfig } from '../siteConfig';
import { whatsappGreetingUrl } from '../utils/whatsapp';
import Logo from './Logo';

const socialLinks = [
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: Instagram },
  { label: 'WhatsApp', href: whatsappGreetingUrl, Icon: MessageCircle },
].filter((link) => link.href);

export default function Footer() {
  return (
    <footer className="px-page bg-ink pb-8 pt-[clamp(56px,7vw,80px)] text-sand">
      <div className="flex flex-col items-center gap-2.5 border-b border-sand/15 pb-10 text-center">
        <span lang="te" className="font-telugu text-[clamp(40px,6vw,64px)] leading-[1.5] text-gold-light">ధన్యవాదాలు</span>
        <span className="font-serif text-lg italic text-sand/85">Dhanyavaadaalu — thank you for stopping by.</span>
      </div>

      <div className="grid gap-8 pt-10 text-sm leading-[1.7] text-sand/80 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3.5">
          <Logo dark className="self-start text-sand" />
          <span className="font-serif text-lg italic text-gold-light">
            Elegance begins here · <span lang="te" className="font-telugu not-italic">లివోరా</span>
          </span>
          <p className="max-w-[280px] font-light">
            Turnkey interiors, factory-finished modular work and on-site carpentry for homes and workspaces across
            Telangana and Andhra Pradesh.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="self-start hover:text-sand">
              {link.name}
            </a>
          ))}
        </nav>

        <address className="flex flex-col not-italic">
          {siteConfig.phones.map((phone) => (
            <a key={phone.link} href={`tel:${phone.link}`} className="self-start hover:text-sand">
              {phone.display}
            </a>
          ))}
          <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="self-start hover:text-sand">
            {siteConfig.addressLines.join(' ')}
          </a>
          <span>{siteConfig.hours}</span>
        </address>

        <div className="-ml-2.5 flex gap-1">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center hover:text-sand"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 font-mono text-[11px] uppercase tracking-[.08em] text-sand/60">
        © {new Date().getFullYear()} {siteConfig.name} · Interior designers in Kukatpally, Hyderabad
      </div>
    </footer>
  );
}
