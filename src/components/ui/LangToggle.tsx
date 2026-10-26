"use client";

import { useLang } from "@/lib/i18n";

/** Compact EN / TR pill switch. */
export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink-600 bg-ink-850/80 p-0.5 text-[0.7rem] font-semibold ${className}`}
      role="group"
      aria-label="Language"
    >
      {(["en", "tr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${
            lang === code
              ? "bg-brand-gradient text-ink-950 shadow-glow"
              : "text-fog-400 hover:text-fog-100"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
