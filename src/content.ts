import type { LucideIcon } from 'lucide-react';
import {
  Armchair,
  Clock,
  Factory,
  Hammer,
  Key,
  KeyRound,
  LayoutTemplate,
  Leaf,
  MapPin,
  MessageCircle,
  PenTool,
  Phone,
  Sofa,
  Star,
  Target,
} from 'lucide-react';
import { siteConfig } from './siteConfig';

const unsplash = (id: string, width = 900) =>
  `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${width}&q=80`;

const heroId = '1600210492486-724fe5c67fb0';

export const images = {
  hero: unsplash(heroId, 1200),
  heroSrcSet: [640, 960, 1200, 1600].map((w) => `${unsplash(heroId, w)} ${w}w`).join(', '),
  about: unsplash('1616486338812-3dadae4b4ace', 700),
};

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Turnkey', href: '#turnkey' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

// Alternating English / Telugu locality names for the hero marquee.
export const marqueeLocalities: [string, 'en' | 'te'][] = [
  ['Banjara Hills', 'en'],
  ['జూబ్లీ హిల్స్', 'te'],
  ['Gachibowli', 'en'],
  ['కొండాపూర్', 'te'],
  ['Madhapur', 'en'],
  ['కూకట్‌పల్లి', 'te'],
  ['Jubilee Hills', 'en'],
  ['గచ్చిబౌలి', 'te'],
  ['Kondapur', 'en'],
  ['మాదాపూర్', 'te'],
  ['Kukatpally', 'en'],
  ['బంజారా హిల్స్', 'te'],
];

export const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Armchair, title: 'Bespoke Designs', desc: 'Tailored to your style and needs' },
  { icon: Star, title: 'Premium Quality', desc: 'Finest materials and craftsmanship' },
  { icon: LayoutTemplate, title: 'End-to-End Service', desc: 'From concept to completion' },
  { icon: Leaf, title: 'Timeless Elegance', desc: 'Designs that are beautiful today and always' },
];

export const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Happy Clients' },
  { value: '15+', label: 'Design Experts' },
  { value: '4.9★', label: 'Google Rating' },
];

export const founder = {
  name: 'Dhanunjay',
  role: 'Founder',
  experience: '10+ years in interiors',
  portrait: '/images/founder.webp' as string | null,
};

export const projectTypes = ['Residential', 'Commercial', 'Turnkey', 'Hospitality', 'Renovation', 'Other'] as const;

export const services = [
  {
    image: unsplash('1618219908412-a29a1bb7b86e'),
    title: 'Residential Design',
    desc: 'Beautiful, functional spaces designed for the way you live.',
    type: 'Residential',
  },
  {
    image: unsplash('1497366216548-37526070297c'),
    title: 'Commercial Design',
    desc: 'Inspiring workspaces that elevate brands and people.',
    type: 'Commercial',
  },
  {
    image: unsplash('1616486029423-aaa4789e8c9a'),
    title: 'Interior Styling',
    desc: 'Curated furniture, decor and finishes to perfect your space.',
    type: 'Other',
  },
  {
    image: unsplash('1586023492125-27b2c045efd7'),
    title: 'Design Consultation',
    desc: 'Expert guidance to help you plan with confidence.',
    type: 'Other',
  },
];

export const turnkeyOfferings: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: KeyRound,
    title: 'Turnkey Projects',
    desc: 'One team from design to handover. We manage the work, the trades and the timeline, and hand over a home that is ready to move in.',
  },
  {
    icon: Factory,
    title: 'Modular Factory Finish',
    desc: 'Kitchens, wardrobes and shelving designed in 3D and made with our modular factory support for a precise, factory-grade finish.',
  },
  {
    icon: Hammer,
    title: 'On-site Carpentry',
    desc: 'Skilled carpenters for custom pieces, odd corners and details that are best built by hand, right in your home.',
  },
  {
    icon: Sofa,
    title: 'Imported Furniture',
    desc: 'Explore our imported furniture options and choose the pieces that complete your space.',
  },
];

export const steps: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Target, title: 'Free Consultation', desc: 'We understand your vision, budget and timeline' },
  { icon: PenTool, title: 'Design Proposal', desc: 'Mood boards, 3D layouts and material selections' },
  { icon: Hammer, title: 'Execution', desc: 'We handle procurement, installation and coordination' },
  { icon: Key, title: 'Handover', desc: 'Final walkthrough and delivery of your dream space' },
];

export const portfolioCategories = ['All', 'Residential', 'Commercial', 'Hospitality'] as const;

export const projects: { image: string | null; title: string; category: string; locality: string }[] = [
  { image: unsplash('1600607687920-4e2a09cf159d', 1400), title: 'Minimalist Townhouse', category: 'Residential', locality: '[ప్రాంతం · Locality]' },
  { image: unsplash('1615873968403-89e068629265'), title: 'Urban Workspace', category: 'Commercial', locality: '[ప్రాంతం · Locality]' },
  { image: unsplash('1552566626-52f8b828add9'), title: 'Luxe Boutique Hotel', category: 'Hospitality', locality: '[ప్రాంతం · Locality]' },
  { image: unsplash('1618221195710-dd6b41faaea6'), title: 'Modern Loft', category: 'Residential', locality: '[ప్రాంతం · Locality]' },
];

export const testimonials = [
  { text: 'Transforming our home was seamless — Livora brought our vision to life beyond what we imagined.', author: 'Priya S.', location: 'Banjara Hills' },
  { text: 'Professional, creative and on time. Our office space feels completely reimagined.', author: 'Rahul M.', location: 'Gachibowli' },
  { text: 'The attention to detail is unmatched. Every corner of our villa tells a story.', author: 'Ananya K.', location: 'Jubilee Hills' },
  { text: 'From consultation to handover, the process was smooth and stress-free.', author: 'Vikram T.', location: 'Kondapur' },
];

export const reviewSummary = '4.9 ★ on Google · 120+ Reviews';

export const faqs = [
  { q: 'How long does a typical interior design project take?', a: 'Most residential projects take 6–12 weeks depending on scope. We provide a detailed timeline after the initial consultation.' },
  { q: 'Which areas do you serve?', a: 'Our studio is in Kukatpally, Hyderabad. We take projects across Telangana and Andhra Pradesh.' },
  { q: 'Do you take turnkey interior projects?', a: 'Yes. We handle turnkey projects from design to handover, so you have one team and one point of contact, and a home that is ready to move in.' },
  { q: 'Are your modular kitchens and wardrobes factory made?', a: 'Yes. Modular kitchens, wardrobes and shelving are designed in 3D and made with our modular factory support for a precise, consistent finish. Where a custom piece suits better, our carpenters build it on site.' },
  { q: 'Can I choose imported furniture?', a: 'Yes. You can explore our imported furniture options and pick pieces that suit your design and budget.' },
  { q: 'Do you provide 3D visualizations before starting work?', a: 'Yes — every project includes photorealistic 3D renders so you can visualize your space before a single nail is hammered.' },
  { q: 'What is the starting budget for a project?', a: 'Residential projects typically start from ₹8–10 lakhs. We offer solutions across a range of budgets without compromising quality.' },
  { q: 'Can I supply my own furniture or materials?', a: 'Absolutely. We are happy to incorporate pieces you already own or source yourself into the overall design.' },
  { q: 'Do you handle both residential and commercial projects?', a: 'Yes — we have dedicated teams for residential homes, villas, offices, retail spaces, and hospitality interiors.' },
];

export const contactItems: { icon: LucideIcon; label: string; value: string; href: string; external?: boolean }[] = [
  ...siteConfig.phones.map((phone, i) => ({
    icon: i === 0 ? MessageCircle : Phone,
    label: phone.label,
    value: phone.display,
    href: `tel:${phone.link}`,
  })),
  { icon: MapPin, label: 'Visit Us', value: siteConfig.addressLines.join('\n'), href: siteConfig.mapsUrl, external: true },
  { icon: Clock, label: 'Working Hours', value: siteConfig.hours, href: '#contact' },
];
