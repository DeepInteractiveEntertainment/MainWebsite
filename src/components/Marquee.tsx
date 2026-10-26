const WORDS = [
  "Chaos Budz",
  "Hurda-G",
  "Project X",
  "CrossLobby Pro",
  "DeepAI Pro",
  "Mobile Controls Pro",
  "PC & Console",
  "Unity Asset Store",
  "Istanbul · Türkiye",
];

/** Subtle serif credits strip. */
export default function Marquee() {
  const line = WORDS.join("      •      ");
  return (
    <div className="relative overflow-hidden hairline-t hairline-b py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="text-sm font-semibold uppercase tracking-[0.18em] text-fog-500"
          >
            {line}      •&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
