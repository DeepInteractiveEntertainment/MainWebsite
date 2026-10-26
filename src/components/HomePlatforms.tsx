"use client";

import Image from "next/image";
import Reveal from "./ui/Reveal";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

const items: { name: string; image: string | null }[] = [
  { name: "PC", image: "/platform/pc.jpg" },
  { name: "Steam", image: "/platform/steam.png" },
  { name: "PlayStation", image: "/platform/ps.jpg" },
  { name: "Xbox", image: "/platform/xbox.jpg" },
  { name: "Unity Asset Store", image: null },
];

export default function HomePlatforms() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-16">
      <div className="container-x relative z-10">
        <Reveal className="flex flex-col items-center">
          <span className="overline">{t(ui.platforms_strip_eyebrow)}</span>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {items.map((it) => (
              <span
                key={it.name}
                className="inline-flex items-center gap-2.5 rounded-full border border-ink-700 bg-ink-850/60 px-4 py-2.5 text-sm font-semibold text-fog-200 backdrop-blur transition-colors hover:border-gold-400/40"
              >
                {it.image ? (
                  <Image
                    src={it.image}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded object-cover"
                  />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-brand-gradient" />
                )}
                {it.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
