type SectionLabelProps = {
  telugu: string;
  caption: string;
  dark?: boolean;
  teluguClassName?: string;
};

/** Telugu headline word over a mono transliteration / English caption. */
export default function SectionLabel({ telugu, caption, dark = false, teluguClassName = 'text-[28px]' }: SectionLabelProps) {
  return (
    <>
      <span className={`font-telugu leading-[1.5] ${teluguClassName} ${dark ? 'text-gold-light' : 'text-gold'}`}>{telugu}</span>
      <span className={`font-mono text-xs uppercase tracking-[.1em] ${dark ? 'text-sand/75' : 'text-moss'}`}>{caption}</span>
    </>
  );
}
