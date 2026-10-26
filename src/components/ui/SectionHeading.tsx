import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

/** Editorial section header: gold overline + serif title + muted description. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: Props) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span
          className={`overline inline-flex items-center gap-3 ${center ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-gold-400/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-fog-50 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-fog-400">{description}</p>
      )}
    </Reveal>
  );
}
