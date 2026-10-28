type LogoMarkProps = {
  className?: string;
  /** Colour of the roof chevron; the letters use currentColor. */
  roofColor?: string;
};

/** The "LI" monogram under a gold roofline. */
export function LogoMark({ className, roofColor = 'var(--color-gold)' }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <g fill="currentColor">
        {/* L */}
        <rect x="9" y="12" width="11" height="70" />
        <rect x="3" y="12" width="23" height="3" />
        <rect x="3" y="78" width="45" height="4" />
        <rect x="45" y="70" width="3" height="12" />
        {/* I, dropped below the L */}
        <rect x="50" y="38" width="11" height="58" />
        <rect x="44" y="38" width="23" height="3" />
        <rect x="44" y="94" width="23" height="3" />
      </g>
      <polygon points="27,23 55,2 98,37 89,37 55,11 27,31" fill={roofColor} />
    </svg>
  );
}

type LogoProps = {
  dark?: boolean;
  className?: string;
};

/** Full lockup: monogram, gold divider, and the stacked "The Livora Interiors" wordmark. */
export default function Logo({ dark = false, className = '' }: LogoProps) {
  const gold = dark ? 'text-gold-light' : 'text-gold';
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-12 w-12 flex-none" roofColor={dark ? 'var(--color-gold-light)' : 'var(--color-gold)'} />
      <span className={`h-10 w-px ${dark ? 'bg-gold-light/60' : 'bg-gold/70'}`} />
      <span className="flex flex-col items-center leading-none">
        <span className={`text-[9px] font-medium tracking-[.4em] ${gold}`}>THE</span>
        <span className="mt-0.5 font-serif text-[26px] font-normal tracking-[.08em]">LIVORA</span>
        <span className={`mt-1 flex items-center gap-1.5 text-[9px] font-medium tracking-[.34em] ${gold}`}>
          <span className="h-px w-2.5 bg-current" />
          INTERIORS
          <span className="h-px w-2.5 bg-current" />
        </span>
      </span>
    </span>
  );
}
