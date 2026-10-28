import { benefits, stats } from '../content';
import SectionLabel from './SectionLabel';

export default function BenefitsSection() {
  return (
    <section id="highlights" className="px-page py-[clamp(72px,9vw,112px)]">
      <div className="mb-[clamp(40px,5vw,56px)] flex flex-col items-center gap-3 text-center">
        <SectionLabel telugu="ఎందుకు లివోరా?" caption="Enduku Livora? · Why Livora" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center gap-3.5 rounded-[200px_200px_16px_16px] bg-card px-6 pb-8 pt-12 text-center shadow-[0_14px_30px_-20px_rgba(44,52,38,.3)]"
          >
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-sand">
              <Icon size={28} strokeWidth={1.25} />
            </div>
            <h3 className="font-serif text-[26px] font-normal">{title}</h3>
            <p className="text-[15px] font-light leading-[1.55] text-body">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-[clamp(40px,5vw,56px)] grid grid-cols-2 gap-6 border-t border-dashed border-gold/60 pt-[clamp(32px,4vw,40px)] text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1.5">
            <span className="font-serif text-[clamp(44px,5vw,60px)] font-light leading-none">{stat.value}</span>
            <span className="font-mono text-[11px] uppercase tracking-[.1em] text-moss">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
