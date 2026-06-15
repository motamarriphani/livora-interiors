import React from 'react';

const portfolioImages = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function PortfolioSection() {
  return (
    <section className="bg-beige-200 py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-end">
          
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-olive-900">Our Portfolio</span>
              <div className="h-px w-12 bg-olive-900/30"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight mb-10 pr-4">
              Spaces We're Proud Of<br/>
              Stories We Love To Tell.
            </h2>
            
            <button className="bg-olive-900 text-beige-100 px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors">
              View All Projects
            </button>
          </div>

          <div className="lg:w-2/3 relative">
            <div className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {portfolioImages.map((img, i) => (
                <div key={i} className="flex-none w-[85%] md:w-[45%] snap-center first:pl-0">
                  <img src={img} alt={`Portfolio ${i + 1}`} className="w-full h-[400px] object-cover shadow-sm" />
                </div>
              ))}
            </div>
            
            {/* Nav Button Fake Overlay */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-6 hidden md:block">
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-olive-900 shadow-md hover:bg-beige-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
