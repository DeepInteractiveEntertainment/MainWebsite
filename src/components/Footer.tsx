"use client";

import Link from "next/link";
import Image from "next/image";
import { navLinks, socials, CONTACT_EMAIL } from "@/lib/content";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative hairline-t">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-light tracking-tight text-fog-50">
              Deep Interactive
              <span className="text-gold-400">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog-400">
              {t(ui.footer_tagline)}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block break-all text-sm text-fog-300 transition-colors hover:text-gold-300"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h3 className="overline text-fog-500">{t(ui.footer_nav)}</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-fog-300 transition-colors hover:text-gold-300"
                  >
                    {t(ui[l.key])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="overline text-fog-500">{t(ui.footer_connect)}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-fog-500/20 transition-all hover:-translate-y-0.5 hover:border-gold-400/60"
                >
                  {s.image && (
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] rounded object-cover opacity-80"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 hairline-t pt-7 text-xs text-fog-500 sm:flex-row">
          <span className="uppercase tracking-[0.24em]">
            Deep Interactive Entertainment
          </span>
          <span>
            © {year} · {t(ui.footer_rights)}
          </span>
        </div>
      </div>
    </footer>
  );
}
