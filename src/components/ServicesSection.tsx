import { services } from '../content';
import SectionLabel from './SectionLabel';

type ServicesSectionProps = {
  onPickType: (type: string) => void;
};

export default function ServicesSection({ onPickType }: ServicesSectionProps) {
  return (
    <section id="services" className="px-page py-section">
      <div className="mb-[clamp(40px,5vw,64px)] flex flex-col items-center gap-3.5 text-center">
        <SectionLabel telugu="మా సేవలు" caption="Maa sevalu · Our Services" />
        <h2 className="max-w-[820px] font-serif text-[clamp(40px,5vw,60px)] font-light leading-[1.04]">
          Comprehensive Interior Design <span className="italic">Solutions</span>
        </h2>
      </div>

      <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <a
            key={service.title}
            href="#contact"
            onClick={() => onPickType(service.type)}
            className="group flex flex-col gap-4"
          >
            <div className="overflow-hidden rounded-t-full">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="block aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <h3 className="font-serif text-[26px] font-normal">{service.title}</h3>
            <p className="flex-1 text-[15px] font-light leading-[1.55] text-body">{service.desc}</p>
            <span className="self-start rounded-full border border-ink px-[18px] py-2.5 text-[13px] font-medium uppercase tracking-[.06em] group-hover:bg-ink group-hover:text-paper">
              Enquire →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
