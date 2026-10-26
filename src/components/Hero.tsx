"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Gamepad2, Wrench } from "lucide-react";
import { ui } from "@/lib/dict";
import { useLang, type L } from "@/lib/i18n";

type Clip = { src: string; poster: string; name: string; tag: L; href: string };

const playlist: Clip[] = [
  {
    src: "/videos/crosslobby.mp4",
    poster: "/tools/media/crosslobby-signin.webp",
    name: "CrossLobby Pro",
    tag: { tr: "Çapraz platform lobiler", en: "Cross-platform lobbies" },
    href: "/tools/crosslobby-pro",
  },
  {
    src: "/videos/chaos-budz.mp4",
    poster: "/games/chaos-budz.jpg",
    name: "Chaos Budz",
    tag: { tr: "Steam'de yayında", en: "Live on Steam" },
    href: "/games/chaos-budz",
  },
  {
    src: "/tools/media/deepai-hero.mp4",
    poster: "/tools/media/deepai-demo.webp",
    name: "DeepAI Pro",
    tag: { tr: "Yapay zekâ araçlarına yakından bak", en: "Explore the AI toolkit" },
    href: "/tools/deepai-pro",
  },
  {
    src: "/tools/media/mobile-controls-hero.mp4",
    poster: "/tools/media/mobile-controls-demo.webp",
    name: "Mobile Controls Pro",
    tag: { tr: "Oyuncuya uygun dokunmatik kontroller", en: "Touch controls for your players" },
    href: "/tools/mobile-controls-pro",
  },
];

const MAX_CLIP_SECONDS = 14; // montage pacing

export default function Hero() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const videoEl = useRef<HTMLVideoElement | null>(null);

  const nextClip = useCallback(
    () => setIdx((i) => (i + 1) % playlist.length),
    [],
  );

  // Montage timer: advance even if a clip is long. Reset on every clip change.
  useEffect(() => {
    const timer = window.setTimeout(nextClip, MAX_CLIP_SECONDS * 1000);
    return () => window.clearTimeout(timer);
  }, [idx, nextClip]);

  // Callback ref: force muted (React's muted attr is unreliable) + play.
  const attachVideo = useCallback((el: HTMLVideoElement | null) => {
    videoEl.current = el;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    const p = el.play();
    if (p) p.catch(() => {});
  }, []);

  // Fallback: if the browser blocks autoplay, start on first interaction.
  useEffect(() => {
    const unlock = () => {
      const el = videoEl.current;
      if (!el) return;
      el.muted = true;
      const p = el.play();
      if (p) p.catch(() => {});
    };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("scroll", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  const clip = playlist[idx];

  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      {/* ===== Rotating video background ===== */}
      <div aria-hidden className="absolute inset-0 z-0 bg-ink-950">
        <video
          key={idx}
          ref={attachVideo}
          src={clip.src}
          poster={clip.poster}
          className="absolute inset-0 h-full w-full object-cover opacity-100"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={nextClip}
        />
        {/* Keep the headline readable over every clip. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink-950 via-ink-950/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
      </div>

      <div className="container-x relative z-10 w-full pb-16 pt-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-medium text-fog-100 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-gradient" />
            {t(ui.hero_badge)}
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.03] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] sm:text-6xl lg:text-[4.2rem]">
            {t(ui.hero_title_1)}{" "}
            <span className="text-gradient">{t(ui.hero_title_2)}</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog-100/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)]">
            {t(ui.hero_desc)}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/games"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Gamepad2 className="h-4 w-4" />
              {t(ui.hero_cta_games)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/40"
            >
              <Wrench className="h-4 w-4" />
              {t(ui.hero_cta_tools)}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Metric n="03" label={t(ui.hero_stat_games)} />
            <span className="h-8 w-px bg-white/20" />
            <Metric n="03" label={t(ui.hero_stat_tools)} />
            <span className="h-8 w-px bg-white/20" />
            <Metric n="PC" label={t(ui.hero_stat_platforms)} />
          </div>
        </div>
      </div>

      {/* ===== Now-playing label + progress dots ===== */}
      <div className="absolute bottom-6 right-5 z-10 flex flex-col items-end gap-3 sm:right-8">
        <Link
          href={clip.href}
          className="group inline-flex items-center gap-3 rounded-lg border border-white/15 bg-black/50 px-4 py-2.5 backdrop-blur transition-colors hover:border-white/35"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-left leading-tight">
            <span className="block font-display text-sm font-semibold text-white">
              {clip.name}
            </span>
            <span className="block text-[0.7rem] text-fog-300">{t(clip.tag)}</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {playlist.map((entry, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`${entry.name} — ${t({ tr: "Videoyu göster", en: "Show video" })}`}
              aria-pressed={i === idx}
              title={entry.name}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx ? "w-7 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ n, label }: { n: string; label: string }) {
  return (
    <span className="inline-flex flex-col">
      <span className="font-display text-2xl font-semibold text-white">{n}</span>
      <span className="text-xs uppercase tracking-wider text-fog-300">{label}</span>
    </span>
  );
}
