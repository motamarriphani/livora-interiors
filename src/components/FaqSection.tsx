import { useState } from 'react';
import { faqs } from '../content';
import SectionLabel from './SectionLabel';

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
  // Escape "<" so FAQ text can never close the <script> tag it is embedded in.
}).replace(/</g, '\\u003c');

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-page py-section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div className="mx-auto max-w-[880px]">
        <div className="mb-[clamp(40px,5vw,56px)] flex flex-col items-center gap-3.5 text-center">
          <SectionLabel telugu="ప్రశ్నలు" caption="Prashnalu · Got Questions" />
          <h2 className="font-serif text-[clamp(40px,5vw,60px)] font-light leading-[1.04]">
            Frequently Asked <span className="italic">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q} className="rounded-2xl bg-card px-[clamp(18px,3vw,28px)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center gap-4 py-[22px] text-left"
                >
                  <span className="flex-1 text-[clamp(16px,1.6vw,18px)] font-medium leading-[1.45]">{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full bg-sand text-[22px] leading-none transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-[22px] pr-[clamp(0px,5vw,52px)] text-base font-light leading-[1.65] text-body">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
