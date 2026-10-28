import React, { useState } from 'react';
import { contactItems, projectTypes } from '../content';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import SectionLabel from './SectionLabel';

type ContactSectionProps = {
  projectType: string;
  onProjectTypeChange: (type: string) => void;
};

type Field = 'name' | 'phone' | 'email' | 'locality' | 'message';
type ErrorKey = 'name' | 'phone' | 'email' | 'type';

const EMPTY: Record<Field, string> = { name: '', phone: '', email: '', locality: '', message: '' };

const inputBase = 'min-w-0 rounded-xl border bg-paper px-4 py-3.5 text-base text-ink outline-none focus:border-ink';
const borderFor = (bad: boolean) => (bad ? 'border-error' : 'border-ink/25');
const errorText = 'text-[13px] text-error';

function validate(form: Record<Field, string>, projectType: string) {
  const errors: Partial<Record<ErrorKey, true>> = {};
  if (!form.name.trim()) errors.name = true;
  if (form.phone.replace(/\D/g, '').replace(/^91/, '').length !== 10) errors.phone = true;
  if (!projectType) errors.type = true;
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errors.email = true;
  return errors;
}

export default function ContactSection({ projectType, onProjectTypeChange }: ContactSectionProps) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<ErrorKey, true>>>({});
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const clearError = (key: ErrorKey) =>
    setErrors(({ [key]: _, ...rest }) => rest);

  const setField = (key: Field) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: event.target.value }));
    if (key !== 'locality' && key !== 'message') clearError(key);
  };

  const pickType = (type: string) => {
    onProjectTypeChange(type);
    clearError('type');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(form, projectType);
    setErrors(found);
    if (Object.keys(found).length) return;
    setWhatsappUrl(
      buildWhatsAppUrl({
        firstName: form.name,
        lastName: '',
        email: form.email,
        phone: form.phone,
        projectType,
        locality: form.locality,
        message: form.message,
      }),
    );
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    onProjectTypeChange('');
    setWhatsappUrl('');
  };

  const firstName = form.name.trim().split(' ')[0];

  return (
    <section
      id="contact"
      className="px-page py-section grid items-start gap-[clamp(40px,6vw,80px)] bg-sand lg:grid-cols-2"
    >
      <div className="flex flex-col gap-6">
        <SectionLabel telugu="రండి, మాట్లాడుకుందాం" caption="Randi, maatladukundaam · Come, let's talk" teluguClassName="text-[30px]" />
        <h2 className="font-serif text-[clamp(42px,5.6vw,72px)] font-light leading-none">
          Let's Create Your <span className="italic">Dream Space</span>
        </h2>
        <p className="max-w-[460px] font-serif text-[21px] font-light leading-[1.5]">
          Reach out for a free consultation. We'd love to hear about your project.
        </p>
        <div className="flex flex-col gap-2">
          {contactItems.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="-mx-3 flex min-w-0 items-start gap-4 rounded-xl p-3 hover:bg-sand-dark"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-card">
                <Icon size={18} />
              </span>
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="font-mono text-[11px] uppercase tracking-[.1em] text-moss">{label}</span>
                <span className="whitespace-pre-line text-base leading-[1.5] [overflow-wrap:anywhere]">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-card p-[clamp(24px,4vw,48px)] shadow-[0_30px_60px_-30px_rgba(44,52,38,.3)]">
        {whatsappUrl ? (
          <div role="status" className="flex flex-col items-center gap-3.5 py-8 text-center">
            <span lang="te" className="font-telugu text-[30px] leading-[1.5] text-gold">ధన్యవాదాలు</span>
            <h3 className="font-serif text-[40px] font-light leading-[1.05]">
              Thank you, <span className="italic">{firstName}</span>.
            </h3>
            <p className="max-w-[360px] text-[17px] font-light leading-[1.6]">
              Your enquiry is ready. Send it to us on WhatsApp and we'll call you back on {form.phone}. Nothing is sent
              until you tap Send there.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-ink px-6 py-4 text-[13px] font-medium uppercase tracking-[.08em] text-paper"
            >
              Send on WhatsApp →
            </a>
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-ink px-[22px] py-3.5 text-[13px] uppercase tracking-[.06em]"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[22px]">
            <h3 className="font-serif text-[30px] font-normal leading-[1.1]">Book a free consultation</h3>

            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium">Your name *</span>
              <input
                value={form.name}
                onChange={setField('name')}
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                className={`${inputBase} ${borderFor(!!errors.name)}`}
              />
              {errors.name && <span className={errorText}>Please enter your name</span>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium">Phone *</span>
              <input
                type="tel"
                inputMode="tel"
                value={form.phone}
                onChange={setField('phone')}
                autoComplete="tel"
                placeholder="+91 98765 43210"
                aria-invalid={!!errors.phone}
                className={`${inputBase} ${borderFor(!!errors.phone)}`}
              />
              {errors.phone && <span className={errorText}>Enter a valid 10-digit mobile number</span>}
            </label>

            <div className="flex flex-col gap-2.5">
              <span id="project-type-label" className="text-[13px] font-medium">Project type *</span>
              <div role="radiogroup" aria-labelledby="project-type-label" className="flex flex-wrap gap-2">
                {projectTypes.map((type) => {
                  const on = projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => pickType(type)}
                      className={`min-h-[42px] rounded-full border px-4 text-sm ${
                        on ? 'border-ink bg-ink text-paper' : `${errors.type ? 'border-error' : 'border-ink/30'} text-ink hover:border-ink`
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
              {errors.type && <span className={errorText}>Choose a project type</span>}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex min-w-0 flex-col gap-2">
                <span className="text-[13px] font-medium">
                  Email <span className="font-light text-moss">(optional)</span>
                </span>
                <input
                  type="email"
                  value={form.email}
                  onChange={setField('email')}
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  className={`${inputBase} ${borderFor(!!errors.email)}`}
                />
                {errors.email && <span className={errorText}>Enter a valid email address</span>}
              </label>
              <label className="flex min-w-0 flex-col gap-2">
                <span className="text-[13px] font-medium">
                  Locality <span className="font-light text-moss">(optional)</span>
                </span>
                <input
                  value={form.locality}
                  onChange={setField('locality')}
                  autoComplete="address-level2"
                  placeholder="e.g. Gachibowli"
                  className={`${inputBase} border-ink/25`}
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium">
                About your home <span className="font-light text-moss">(optional)</span>
              </span>
              <textarea
                value={form.message}
                onChange={setField('message')}
                placeholder="Rooms, timeline, budget range…"
                className={`${inputBase} h-24 resize-y border-ink/25`}
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-ink p-[18px] text-[13px] font-medium uppercase tracking-[.08em] text-paper"
            >
              Request Free Consultation →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
