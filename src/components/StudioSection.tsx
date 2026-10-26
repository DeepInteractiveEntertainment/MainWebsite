"use client";

import Image from "next/image";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import SectionHeading from "./ui/SectionHeading";
import { platforms, studioStats } from "@/lib/content";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

export default function StudioSection() {
  const { t } = useLang();
  return (
    <>
      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-neon-cyan">
                <span className="h-px w-6 bg-neon-cyan/60" />
                {t(ui.studio_eyebrow)}
              </span>
              <h2
                className="mt-4 text-3xl font-bold tracking-tight text-fog-50 sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t(ui.studio_title)}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-fog-400">{t(ui.studio_p1)}</p>
              <p className="mt-4 text-base leading-relaxed text-fog-400">{t(ui.studio_p2)}</p>
            </Reveal>

            <Reveal delay={100}>
              <div className="scanlines relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-850/60 p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gradient opacity-20 blur-3xl animate-pulse-glow"
                />
                <div className="grid grid-cols-3 gap-4">
                  {studioStats.map((s) => (
                    <div key={s.label.en} className="text-center">
                      <div
                        className="text-3xl font-black text-fog-50"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <Counter value={s.value} />
                      </div>
                      <div className="mt-1.5 text-[0.7rem] leading-tight text-fog-500">
                        {t(s.label)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-700 pt-6">
                  {["STEAM", "PC", "PS5", "XBOX", "UNITY ASSET STORE"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-ink-600 bg-ink-900 px-3 py-1 text-[0.7rem] font-semibold tracking-wider text-fog-300"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow={t(ui.nav_studio)}
            title={t(ui.platforms_title)}
            description={t(ui.platforms_desc)}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {platforms.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div
                  className="group h-full rounded-2xl border border-ink-700 bg-ink-850/60 p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: undefined }}
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-xl border border-ink-600 bg-ink-900">
                      <Image src={p.image} alt={p.name} width={56} height={56} className="h-full w-full object-cover" />
                    </span>
                    <h3
                      className="text-lg font-bold text-fog-50"
                      style={{ fontFamily: "var(--font-display)", color: undefined }}
                    >
                      {p.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-fog-400">{t(p.desc)}</p>
                  <span
                    aria-hidden
                    className="mt-5 block h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
