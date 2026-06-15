import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 3, label: 'Projects Completed', suffix: '+' },
  { value: 20, label: 'Happy Clients', suffix: '+' },
  { value: 3, label: 'Years Experience', suffix: '+' },
  { value: 15, label: 'Design Experts', suffix: '+' } // Added 4th to match "4 columns" request
];

function Counter({ end, suffix }: { end: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let startTime: number;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-serif text-beige-100 mb-2">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#2c3426] py-16 lg:py-24 relative z-30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-beige-100/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <Counter end={stat.value} suffix={stat.suffix} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-beige-200/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
