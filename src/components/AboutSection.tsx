import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-beige-100 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 max-w-xl">
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-olive-900">About Us</span>
              <div className="h-px w-12 bg-olive-900/30"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight mb-8">
              Designing Beautiful Spaces, Crafted Around You.
            </h2>
            
            <p className="text-olive-900/70 leading-relaxed mb-10 font-light text-lg">
              At Livora Interiors, we believe your space should reflect who you are and how you live. Our team combines creativity, functionality and attention to detail to deliver interiors that inspire every day.
            </p>
            
            <button className="bg-olive-900 text-beige-100 px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors">
              Learn More About Us
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Beautiful dining room interior" 
              className="w-full h-auto object-cover rounded-tr-[120px] shadow-sm aspect-[4/3] md:aspect-auto"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
