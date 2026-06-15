import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Transforming our home was seamless — Livora brought our vision to life beyond what we imagined.",
    author: "Priya S.",
    location: "Banjara Hills"
  },
  {
    text: "Professional, creative and on time. Our office space feels completely reimagined.",
    author: "Rahul M.",
    location: "Gachibowli"
  },
  {
    text: "The attention to detail is unmatched. Every corner of our villa tells a story.",
    author: "Ananya K.",
    location: "Jubilee Hills"
  },
  {
    text: "From consultation to handover, the process was smooth and stress-free.",
    author: "Vikram T.",
    location: "Kondapur"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" data-theme="dark" className="bg-[#2c3426] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-beige-100/70">Client Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-beige-100 leading-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative cursor-grab active:cursor-grabbing">
          <div className="overflow-hidden w-full rounded-2xl relative">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 box-border p-8 md:p-12 bg-[#3A4232] rounded-2xl">
                  <div className="flex mb-6 text-yellow-500">
                    {/* 5 Stars */}
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-lg mr-1">{star}</span>
                    ))}
                  </div>
                  
                  <p className="font-serif italic text-2xl md:text-3xl text-beige-100/90 leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-olive-900 flex items-center justify-center text-beige-100 font-serif mr-4 shrink-0">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-beige-100 font-medium">{t.author}</h4>
                      <p className="text-beige-200/50 text-sm">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 hidden md:flex">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-beige-100/20 flex items-center justify-center text-beige-100 hover:bg-beige-100/10 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeIndex ? 'bg-beige-100' : 'bg-beige-100/20'}`} 
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full border border-beige-100/20 flex items-center justify-center text-beige-100 hover:bg-beige-100/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8 md:hidden">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? 'bg-beige-100' : 'bg-beige-100/20'}`} 
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-12 text-beige-100/60 text-sm">
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          4.9 ★ on Google · 120+ Reviews
        </div>
      </div>
    </section>
  );
}
