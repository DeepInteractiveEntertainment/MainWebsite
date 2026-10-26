"use client";

import { useLang, type L } from "@/lib/i18n";

/** Editorial page hero used at the top of interior pages. */
export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: L;
  title: L;
  description?: L;
}) {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden pt-36 pb-16 hairline-b sm:pt-44 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="container-x">
        <span className="overline inline-flex items-center gap-3">
          <span className="h-px w-8 bg-gold-400/60" />
          {t(eyebrow)}
        </span>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-tight text-fog-50 sm:text-6xl">
          {t(title)}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog-400">
            {t(description)}
          </p>
        )}
      </div>
    </section>
  );
}
