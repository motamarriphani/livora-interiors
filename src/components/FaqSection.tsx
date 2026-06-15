import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const faqs = [
  {
    question: "How long does a typical interior design project take?",
    answer: "Most residential projects take 6–12 weeks depending on scope. We provide a detailed timeline after the initial consultation."
  },
  {
    question: "Which areas in Hyderabad do you serve?",
    answer: "We serve all major areas including Banjara Hills, Jubilee Hills, Gachibowli, Kondapur, Madhapur, Kukatpally, and surrounding localities."
  },
  {
    question: "Do you provide 3D visualizations before starting work?",
    answer: "Yes — every project includes photorealistic 3D renders so you can visualize your space before a single nail is hammered."
  },
  {
    question: "What is the starting budget for a project?",
    answer: "Residential projects typically start from ₹8–10 lakhs. We offer solutions across a range of budgets without compromising quality."
  },
  {
    question: "Can I supply my own furniture or materials?",
    answer: "Absolutely. We are happy to incorporate pieces you already own or source yourself into the overall design."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes — we have dedicated teams for residential homes, villas, offices, retail spaces, and hospitality interiors."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useFadeInOnScroll();

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease'
      }}
      className="bg-white py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-olive-900">Got Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="border-t border-olive-900/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-olive-900/10 last:border-b-0">
                <button
                  className="w-full text-left py-6 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleOpen(index)}
                >
                  <h3 className="text-lg font-medium text-olive-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full border border-olive-900/20 flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-olive-900 text-white' : 'text-olive-900'}`}>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-6 text-olive-900/70 font-light pr-8 md:pr-16">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
