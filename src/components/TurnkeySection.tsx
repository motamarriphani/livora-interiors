import { useEffect, useState } from 'react';
import { turnkeyOfferings } from '../content';
import SectionLabel from './SectionLabel';

const PLAN_TYPES = ['Turnkey', 'Residential', 'Commercial', 'Hospitality'];
const SWAP_MS = 2500;

type TurnkeySectionProps = {
  onPickType: (type: string) => void;
};

export default function TurnkeySection({ onPickType }: TurnkeySectionProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const planType = PLAN_TYPES[index];

  // Cycle the project type shown in the CTA; hovering or focusing it holds the current one.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % PLAN_TYPES.length), SWAP_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="turnkey" className="px-page py-section bg-paper">
      <div className="mb-[clamp(40px,5vw,64px)] flex flex-col items-center gap-3.5 text-center">
        <SectionLabel telugu="మొదటి నుండి చివరి వరకు" caption="Modati nundi chivari varaku · Start to finish" />
        <h2 className="max-w-[820px] font-serif text-[clamp(40px,5vw,60px)] font-light leading-[1.04]">
          Turnkey Interiors, <span className="italic">Built to Last</span>
        </h2>
        <p className="max-w-[620px] text-[clamp(16px,1.4vw,18px)] font-light leading-[1.6] text-body">
          From the first 3D design to the final handover, we bring factory-finished modular work, skilled on-site
          carpentry and imported furniture together under one team.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {turnkeyOfferings.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col gap-4 rounded-2xl border border-gold/40 bg-card p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand">
              <Icon size={24} strokeWidth={1.25} />
            </div>
            <h3 className="font-serif text-[24px] font-normal">{title}</h3>
            <p className="text-[15px] font-light leading-[1.6] text-body">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-[clamp(32px,4vw,48px)] flex justify-center">
        <a
          href="#contact"
          onClick={() => onPickType(planType)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="min-w-[300px] rounded-full border border-ink px-7 py-4 text-center text-[13px] font-medium uppercase tracking-[.06em] hover:bg-ink hover:text-paper"
        >
          Plan a{' '}
          <span key={planType} className="lv-swap inline-block">
            {planType.toLowerCase()}
          </span>{' '}
          project →
        </a>
      </div>
    </section>
  );
}
