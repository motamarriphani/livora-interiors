import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const portfolioProjects = [
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Minimalist Townhouse",
    category: "Residential"
  },
  {
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Urban Workspace",
    category: "Commercial"
  },
  {
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxe Boutique Hotel",
    category: "Hospitality"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern Loft",
    category: "Residential"
  }
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { ref, isVisible } = useFadeInOnScroll();

  const filteredProjects = activeTab === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeTab);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    handleScroll();
  }, [filteredProjects, activeTab]);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="portfolio" 
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease'
      }}
      className="bg-beige-200 py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-end justify-between mb-12">
          
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-olive-900">Our Portfolio</span>
              <div className="h-px w-12 bg-olive-900/30"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight pr-4">
              Spaces We're Proud Of<br/>
              Stories We Love To Tell.
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col items-start lg:items-end w-full">
            <div className="flex space-x-6 text-sm font-medium tracking-wider uppercase mb-2 overflow-x-auto w-full lg:w-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`pb-2 whitespace-nowrap transition-colors ${
                    activeTab === cat 
                      ? 'text-olive-900 border-b-2 border-olive-900' 
                      : 'text-olive-900/50 hover:text-olive-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="hidden lg:block mt-8 bg-olive-900 text-beige-100 px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors">
              View All Projects
            </button>
          </div>

        </div>

        <div className="relative mt-8 relative group">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide relative z-10"
          >
            {filteredProjects.map((project, i) => (
              <div 
                key={`${project.title}-${i}`} 
                className="flex-none w-[85%] md:w-[45%] lg:w-[35%] snap-center first:pl-0 group/card relative overflow-hidden"
                data-category={project.category}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[400px] md:h-[450px] object-cover shadow-sm transition-transform duration-700 group-hover/card:scale-105" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-olive-900/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-2xl font-serif text-white mb-2 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <span className="text-xs tracking-widest uppercase text-white/80 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-75">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Nav Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 pointer-events-none px-4 md:-mx-6 lg:-mx-12">
             <button 
                onClick={scrollLeft}
                className={`w-12 h-12 rounded-full bg-white flex items-center justify-center text-olive-900 shadow-md hover:bg-beige-100 transition-all pointer-events-auto ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
             >
                <ChevronLeft size={20} />
             </button>
             <button 
                onClick={scrollRight}
                className={`w-12 h-12 rounded-full bg-white flex items-center justify-center text-olive-900 shadow-md hover:bg-beige-100 transition-all pointer-events-auto ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
             >
                <ChevronRight size={20} />
             </button>
          </div>
        </div>
        
        <button className="lg:hidden mt-4 w-full bg-olive-900 text-beige-100 px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-olive-800 transition-colors">
          View All Projects
        </button>
      </div>
    </section>
  );
}
