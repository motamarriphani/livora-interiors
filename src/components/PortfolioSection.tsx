import { useState, type CSSProperties } from 'react';
import { portfolioCategories, projects } from '../content';
import SectionLabel from './SectionLabel';

const TILTS = ['-1.5deg', '1deg', '-.5deg', '1.5deg'];

type Category = (typeof portfolioCategories)[number];

export default function PortfolioSection() {
  const [category, setCategory] = useState<Category>('All');
  const visible = category === 'All' ? projects : projects.filter((p) => p.category === category);

  return (
    <section id="portfolio" className="px-page py-section">
      <div className="mb-[clamp(40px,5vw,64px)] flex flex-col items-center gap-3.5 text-center">
        <SectionLabel telugu="మీ ఇల్లు, మీ కథ" caption="Mee illu, mee katha · your home, your story" teluguClassName="text-[30px]" />
        <h2 className="max-w-[820px] font-serif text-[clamp(40px,5vw,60px)] font-light leading-[1.04]">
          Spaces We're Proud Of. <span className="italic">Stories We Love To Tell.</span>
        </h2>
        <div role="tablist" aria-label="Filter projects" className="mt-2 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((name) => {
            const on = name === category;
            return (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setCategory(name)}
                className={`min-h-[42px] rounded-full border px-[18px] text-[13px] ${
                  on ? 'border-ink bg-ink text-paper' : 'border-ink/30 bg-transparent text-ink hover:border-ink'
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid items-start gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {visible.map((project, i) => (
          <figure
            key={project.title}
            className="lv-polaroid flex flex-col gap-3.5 bg-card px-3.5 pb-5 pt-3.5 shadow-[0_14px_30px_-16px_rgba(44,52,38,.35)]"
            style={{ '--tilt': TILTS[i % TILTS.length], '--drop': i % 2 === 1 ? '40px' : '0px' } as CSSProperties}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} loading="lazy" className="block aspect-[4/5] w-full object-cover" />
            ) : (
              <div className="flex aspect-[4/5] w-full items-end bg-[repeating-linear-gradient(135deg,#ece6da_0_10px,#e4dccd_10px_20px)] p-3.5">
                <span className="font-mono text-[11px] text-moss">project photo · {project.title}</span>
              </div>
            )}
            <figcaption className="flex flex-col gap-1">
              <span className="font-serif text-[22px]">{project.title}</span>
              <span className="text-[13px] text-moss">
                {project.category} · {project.locality}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
