import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewSummary, testimonials } from '../content';
import SectionLabel from './SectionLabel';

const ROTATE_MS = 6500;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const current = testimonials[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const navButton = 'flex h-12 w-12 items-center justify-center rounded-full border border-sand/30 hover:border-sand';

  return (
    <section id="testimonials" className="px-page py-section bg-ink text-sand">
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="mx-auto flex max-w-[880px] flex-col items-center gap-6 text-center"
      >
        <SectionLabel telugu="మీ మాటల్లో" caption="Mee maatallo · What Our Clients Say" dark />

        <div
          aria-live="polite"
          className="mt-4 flex w-full flex-col items-center gap-6 rounded-[200px_200px_24px_24px] bg-ink-soft px-[clamp(24px,5vw,64px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(56px,7vw,80px)]"
        >
          <span className="tracking-[4px] text-[#d9b97a]" aria-label="5 out of 5 stars">★★★★★</span>
          <blockquote className="font-serif text-[clamp(24px,3.4vw,40px)] font-light italic leading-[1.3]">
            “{current.text}”
          </blockquote>
          <div className="flex items-center gap-3.5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-serif text-xl">
              {current.author[0]}
            </span>
            <span className="flex flex-col text-left">
              <span className="font-medium">{current.author}</span>
              <span className="text-sm text-sand/70">{current.location}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setIndex((i) => (i - 1 + count) % count)} aria-label="Previous review" className={navButton}>
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-0.5">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Review ${i + 1}`}
                aria-current={i === index}
                className="flex h-7 w-7 items-center justify-center p-0"
              >
                <span className={`h-1.5 rounded-[3px] bg-sand transition-all duration-300 ${i === index ? 'w-6' : 'w-2 opacity-35'}`} />
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setIndex((i) => (i + 1) % count)} aria-label="Next review" className={navButton}>
            <ChevronRight size={20} />
          </button>
        </div>
        <span className="text-sm text-sand/70">{reviewSummary}</span>
      </div>
    </section>
  );
}
