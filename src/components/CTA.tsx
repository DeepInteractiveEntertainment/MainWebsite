"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import { DISCORD_URL } from "@/lib/content";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

export default function CTA() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="overline inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold-400/60" />
            {t(ui.publish_cta_eyebrow)}
          </span>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-fog-50 sm:text-5xl">
            {t(ui.publish_cta_title)}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fog-400">
            {t(ui.publish_cta_desc)}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-x-10 gap-y-4 sm:flex-row">
            <Link
              href="/publishing#pitch"
              className="group inline-flex items-center gap-3 border-b border-gold-400/50 pb-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-fog-50 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {t(ui.publish_cta_btn)}
              <ArrowRight className="h-4 w-4 text-gold-400 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-fog-400 transition-colors hover:text-fog-100"
            >
              {t(ui.contact_join_discord)}
              <ArrowUpRight className="h-4 w-4 text-gold-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
