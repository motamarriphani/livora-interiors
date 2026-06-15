import React from 'react';
import { Target, PenTool, Hammer, Key } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Free Consultation',
    description: 'We understand your vision, budget and timeline'
  },
  {
    icon: PenTool,
    title: 'Design Proposal',
    description: 'Mood boards, 3D layouts and material selections'
  },
  {
    icon: Hammer,
    title: 'Execution',
    description: 'We handle procurement, installation and coordination'
  },
  {
    icon: Key,
    title: 'Handover',
    description: 'Final walkthrough and delivery of your dream space'
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-beige-100 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-olive-900">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight">
            Your Dream Space in 4 Simple Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-olive-900/10 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center relative">
                  {/* Vertical connecting line for Mobile */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute top-24 left-1/2 bottom-[-48px] w-[2px] bg-olive-900/10 -ml-[1px] z-0"></div>
                  )}
                  
                  <div className="w-24 h-24 rounded-full bg-beige-100 border-2 border-olive-900 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_0_8px_var(--color-beige-100)]">
                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-olive-900 text-beige-100 text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <Icon size={32} strokeWidth={1.5} className="text-olive-900" />
                  </div>
                  
                  <h3 className="text-lg font-bold tracking-wide uppercase text-olive-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-olive-900/70 font-light text-sm max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
