import { steps } from '../content';
import SectionLabel from './SectionLabel';

export default function ProcessSection() {
  return (
    <section id="process" className="px-page py-section bg-ink text-sand">
      <div className="mb-[clamp(48px,6vw,72px)] flex flex-col items-center gap-3.5 text-center">
        <SectionLabel telugu="నాలుగు అడుగులు" caption="Naalugu adugulu · Our Process" dark />
        <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-light leading-[1.04]">
          Your Dream Space in <span className="italic">4 Simple Steps</span>
        </h2>
      </div>

      <ol className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <li key={title} className="flex flex-col items-center gap-4 text-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-gold-light">
              <Icon size={32} strokeWidth={1.25} />
              <span className="absolute -right-1.5 -top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-gold-light font-mono text-xs text-ink">
                0{i + 1}
              </span>
            </div>
            <h3 className="font-serif text-[26px] font-normal">{title}</h3>
            <p className="max-w-[240px] text-[15px] font-light leading-[1.55] text-sand/80">{desc}</p>
          </li>
        ))}
      </ol>

      <div
        aria-hidden="true"
        className="mx-auto mt-[clamp(48px,6vw,72px)] h-7 max-w-[640px] bg-center opacity-80"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-gold-light) 2px, transparent 2.5px)',
          backgroundSize: '20px 20px',
        }}
      />
    </section>
  );
}
