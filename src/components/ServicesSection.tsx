import { Armchair, Home, PaintBucket, PenTool } from 'lucide-react';
import React from 'react';

const services = [
  {
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Armchair,
    title: "Residential Design",
    description: "Beautiful, functional spaces designed for the way you live."
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Home,
    title: "Commercial Design",
    description: "Inspiring workspaces that elevate brands and people."
  },
  {
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: PaintBucket,
    title: "Interior Styling",
    description: "Curated furniture, decor and finishes to perfect your space."
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: PenTool,
    title: "Design Consultation",
    description: "Expert guidance to help you plan with confidence."
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-beige-100 pb-24 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-olive-900">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight">
            Comprehensive Interior Design Solutions
          </h2>
          <div className="h-px w-24 bg-olive-900/20 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group cursor-pointer">
                <div className="mb-6 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-olive-900/0 group-hover:bg-olive-900/10 transition-colors duration-500"></div>
                </div>
                
                <Icon strokeWidth={1} size={24} className="text-olive-900 mb-4" />
                
                <h3 className="text-lg font-medium tracking-wide uppercase text-olive-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-olive-900/70 font-light mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-xs font-semibold tracking-widest uppercase text-olive-900 group-hover:text-olive-800">
                  <span className="mr-2">Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
