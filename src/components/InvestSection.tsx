"use client";

import Link from "next/link";
import { Rocket, Gamepad2, Globe2, Cpu, ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import { ui } from "@/lib/dict";
import { useLang, type L } from "@/lib/i18n";

const cards: { icon: typeof Rocket; title: L; text: L }[] = [
  {
    icon: Rocket,
    title: { en: "High growth potential", tr: "Yüksek büyüme potansiyeli" },
    text: {
      en: "The indie market is booming. With a debut title on Steam, a game about to launch and a passionate community, we're positioned for growth across PC and console.",
      tr: "Bağımsız pazar hızla büyüyor. Steam'de ilk oyunumuz, çıkmak üzere yeni bir oyunumuz ve tutkulu bir topluluğumuzla PC ve konsolda büyümeye hazırız.",
    },
  },
  {
    icon: Gamepad2,
    title: { en: "Two revenue engines", tr: "İki gelir motoru" },
    text: {
      en: "Games and developer tools. Chaos Budz, Hurda-G and Project X drive player revenue, while our Unity Asset Store tools generate recurring income from other studios.",
      tr: "Oyunlar ve geliştirici araçları. Chaos Budz, Hurda-G ve Project X oyuncu gelirini sürerken, Unity Asset Store araçlarımız diğer stüdyolardan tekrarlayan gelir üretir.",
    },
  },
  {
    icon: Globe2,
    title: { en: "Global reach, lean cost", tr: "Küresel erişim, düşük maliyet" },
    text: {
      en: "Based in Istanbul with a distributed team, we operate at lower cost while targeting worldwide audiences — a competitive edge in emerging markets.",
      tr: "İstanbul merkezli, dağıtık bir ekiple daha düşük maliyetle çalışırken dünya çapında kitleyi hedefliyoruz — gelişen pazarlarda rekabet avantajı.",
    },
  },
  {
    icon: Cpu,
    title: { en: "Production-grade tech", tr: "Üretim seviyesinde teknoloji" },
    text: {
      en: "We build the same AAA-grade frameworks we sell — AI, multiplayer and mobile input — delivering high-quality experiences at indie budgets.",
      tr: "Sattığımız AAA seviyesindeki çatıların aynısını kendimiz kullanıyoruz — yapay zekâ, çok oyunculu ve mobil girdi — indie bütçelerle yüksek kalite sunuyoruz.",
    },
  },
];

export default function InvestSection() {
  const { t } = useLang();
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title.en} delay={(i % 2) * 90}>
                <div className="group h-full rounded-2xl border border-ink-700 bg-ink-850/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-ink-950 shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3
                    className="mt-4 text-xl font-bold text-fog-50"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(c.title)}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-fog-400">{t(c.text)}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <div className="scanlines relative overflow-hidden rounded-3xl border border-white/10 bg-ink-850 p-10 text-center shadow-card sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl animate-pulse-glow"
            />
            <h3
              className="relative text-2xl font-bold text-fog-50 sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t(ui.invest_cta_title)}
            </h3>
            <p className="relative mx-auto mt-3 max-w-xl text-base leading-relaxed text-fog-400">
              {t(ui.invest_cta_desc)}
            </p>
            <Link
              href="/contact"
              className="group relative mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
            >
              {t(ui.invest_cta_btn)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
