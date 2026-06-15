import { Armchair, Star, LayoutTemplate, Leaf } from 'lucide-react';
import React from 'react';

const benefits = [
  {
    icon: Armchair,
    title: 'Bespoke Designs',
    description: 'Tailored to your style and needs',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Finest materials and craftsmanship',
  },
  {
    icon: LayoutTemplate,
    title: 'End-to-End Service',
    description: 'From concept to completion',
  },
  {
    icon: Leaf,
    title: 'Timeless Elegance',
    description: 'Designs that are beautiful today and always',
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative bg-olive-900 z-20">
      {/* Decorative Curve - Using SVG for perfect curve overlaying the hero slightly */}
      <div className="absolute left-0 right-0 top-0 -translate-y-[99%] w-full overflow-hidden leading-none text-olive-900">
        <svg viewBox="0 0 1440 120" fill="currentColor" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,120 Q720,0 1440,120 L1440,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border border-beige-200/20 flex items-center justify-center mb-6 text-beige-100">
                  <Icon strokeWidth={1} size={28} />
                </div>
                <h3 className="text-beige-100 font-medium tracking-wider uppercase text-sm mb-3">
                  {benefit.title}
                </h3>
                <p className="text-beige-200/70 font-light text-sm max-w-[200px]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
