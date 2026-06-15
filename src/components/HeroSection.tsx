import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
          alt="Modern interior living room" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay to make text readable but keep image bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-olive-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-sm">
            Redefining Spaces. <br />
            Elevating Lives.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg font-light leading-relaxed">
            We create timeless, functional and inspiring interiors tailored to your lifestyle and personality.
          </p>
          <button className="bg-white text-olive-900 px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-beige-100 transition-colors">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
