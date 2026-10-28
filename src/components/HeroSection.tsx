import { images, marqueeLocalities } from '../content';

function MarqueeRun({ copy }: { copy: string }) {
  return (
    <>
      {marqueeLocalities.map(([name, lang], i) => (
        <span key={`${copy}-${i}`} className="contents">
          <span className={lang === 'te' ? 'font-telugu text-2xl leading-[1.5]' : 'font-serif text-[26px] font-light italic'}>
            {name}
          </span>
          <span aria-hidden="true" className="text-sm text-gold-light">✦</span>
        </span>
      ))}
    </>
  );
}

export default function HeroSection() {
  return (
    <section id="top">
      <div className="px-page grid items-end gap-[clamp(40px,5vw,64px)] pt-[clamp(24px,3vw,32px)] lg:grid-cols-[6fr_5fr]">
        <div className="flex flex-col gap-[clamp(20px,2.4vw,28px)] pb-[clamp(40px,6vw,72px)]">
          <div className="flex items-baseline gap-[18px]">
            <span lang="te" className="font-telugu text-[clamp(88px,11vw,140px)] leading-[1.3] text-gold">ఇల్లు</span>
            <span className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[.08em] text-moss">
              <span>illu</span>
              <span>(n.) home</span>
            </span>
          </div>
          <h1 className="font-serif font-light">
            <span className="mb-4 block font-mono text-xs font-normal uppercase tracking-[.1em] text-moss">
              Interior Design in Hyderabad · Telangana &amp; Andhra Pradesh
            </span>
            <span className="block text-[clamp(46px,6.6vw,84px)] leading-[.98] tracking-[-.02em]">
              Redefining Spaces.
              <br />
              <span className="italic">Elevating Lives.</span>
            </span>
          </h1>
          <p className="max-w-[480px] text-[clamp(17px,1.5vw,19px)] font-light leading-[1.55]">
            We create timeless, functional and inspiring interiors tailored to your lifestyle and personality — from
            design to turnkey delivery, with factory-finished modular kitchens and wardrobes.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="flex-auto rounded-full bg-ink px-7 py-[18px] text-center text-[13px] font-medium uppercase tracking-[.06em] text-paper"
            >
              Book a Free Consultation →
            </a>
            <a
              href="#portfolio"
              className="flex-auto rounded-full border border-ink px-7 py-[17px] text-center text-[13px] font-medium uppercase tracking-[.06em] hover:bg-ink hover:text-paper"
            >
              Explore Our Work
            </a>
          </div>
          <div className="flex flex-col gap-0.5 pl-1">
            <span lang="te" className="font-telugu text-lg leading-[1.6]">రండి, ఒక కప్పు చాయ్ తో మాట్లాడుకుందాం.</span>
            <span className="font-serif text-[15px] italic text-moss">
              Randi, oka cup chai tho maatladukundaam. Come, let's talk over a cup of chai.
            </span>
          </div>
        </div>

        <div className="flex w-full max-w-[560px] flex-col items-center justify-self-center">
          <div className="w-full rounded-t-full bg-sand-dark px-3.5 pt-3.5">
            <img
              src={images.hero}
              srcSet={images.heroSrcSet}
              sizes="(min-width: 1080px) 45vw, 100vw"
              width={1200}
              height={1500}
              alt="Living room interior designed by Livora Interiors, seen through an arched doorway"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block aspect-[4/5] max-h-[580px] w-full rounded-t-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="h-14 w-[112%] border-t-[3px] border-gold bg-[#ece3d2] bg-center"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--color-gold) 2px, transparent 2.5px)',
              backgroundSize: '22px 22px',
            }}
          />
        </div>
      </div>

      <div className="flex items-center overflow-hidden bg-ink text-sand">
        <div className="relative z-[1] hidden flex-none flex-col gap-0.5 bg-ink py-5 pl-[clamp(20px,4.4vw,56px)] pr-7 shadow-[24px_0_24px_-8px_var(--color-ink)] md:flex">
          <span className="font-mono text-[11px] uppercase tracking-[.1em] text-sand/75">Homes we've shaped in</span>
          <span lang="te" className="font-telugu text-sm text-gold-light">మేము అలంకరించిన ఇళ్లు</span>
        </div>
        <div className="lv-marquee min-w-0 flex-1 overflow-hidden py-4">
          <div className="lv-track flex w-max items-center gap-7 whitespace-nowrap pr-7">
            <MarqueeRun copy="a" />
            <span aria-hidden="true" className="contents">
              <MarqueeRun copy="b" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
