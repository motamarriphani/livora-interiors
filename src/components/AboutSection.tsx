import { founder, images } from '../content';
import { siteConfig } from '../siteConfig';
import SectionLabel from './SectionLabel';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-page py-section grid items-center gap-[clamp(56px,7vw,96px)] bg-paper lg:grid-cols-[5fr_7fr]"
    >
      <div className="relative w-full max-w-[480px] justify-self-center pb-6 pr-6">
        {founder.portrait ? (
          <img
            src={founder.portrait}
            alt={`${founder.name}, ${founder.role} of Livora Interiors`}
            loading="lazy"
            width={640}
            height={640}
            className="block aspect-[4/5] w-full rounded-t-full object-cover object-[50%_20%]"
          />
        ) : (
          <div className="flex aspect-[4/5] items-end rounded-t-full bg-[repeating-linear-gradient(135deg,#ece6da_0_10px,#e4dccd_10px_20px)] p-5">
            <span className="font-mono text-xs text-moss">founder portrait · at home, warm light</span>
          </div>
        )}
        <img
          src={images.about}
          alt="Dining room interior"
          loading="lazy"
          width={700}
          height={700}
          className="absolute -bottom-4 -right-2 aspect-square w-[42%] rounded-full border-[10px] border-paper object-cover"
        />
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
          <SectionLabel telugu="మా గురించి" caption="Maa gurinchi · About Us" teluguClassName="text-[22px]" />
        </div>
        <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-light leading-[1.04] tracking-[-.015em]">
          Designing Beautiful Spaces, <span className="italic">Crafted Around You.</span>
        </h2>
        <div className="flex flex-col gap-[18px] rounded bg-sand px-[clamp(22px,3vw,40px)] py-[clamp(24px,3vw,36px)]">
          <span className="font-serif text-2xl italic">Namaskaram,</span>
          <p className="font-serif text-[clamp(19px,1.8vw,21px)] font-light leading-[1.55]">
            At Livora Interiors, we believe your space should reflect who you are and how you live. Our team combines
            creativity, functionality and attention to detail to deliver interiors that inspire every day.
          </p>
          <p className="font-serif text-[clamp(19px,1.8vw,21px)] font-light leading-[1.55]">
            From our studio in Kukatpally, Hyderabad, we take on turnkey projects across Telangana and Andhra Pradesh,
            backed by modular factory support and our own on-site carpenters.
          </p>
          <div className="flex flex-wrap items-end justify-between gap-4 pt-2">
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-[26px] italic">{founder.name}</span>
              <span className="text-sm text-moss">
                {founder.role} · {founder.experience}
              </span>
            </div>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-ink pb-1.5 text-[13px] font-medium uppercase tracking-[.06em]"
            >
              Visit our studio →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
