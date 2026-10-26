"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./ui/Logo";
import LangToggle from "./ui/LangToggle";
import ThemeToggle from "./ui/ThemeToggle";
import { navLinks, DISCORD_URL } from "@/lib/content";
import { ui } from "@/lib/dict";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-fog-500/15 bg-ink-950/85 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink-950/60 to-transparent"
        }`}
      >
        <nav className="container-x flex h-[4.75rem] items-center justify-between">
          <Link href="/" aria-label="Deep Interactive Entertainment">
            <Logo />
          </Link>

          {/* Desktop pill tabs */}
          <ul className="hidden items-center gap-1 rounded-full border border-ink-700/70 bg-ink-850/60 p-1 backdrop-blur lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-brand-gradient text-ink-950 shadow-glow"
                        : "text-fog-400 hover:bg-ink-700/60 hover:text-fog-100"
                    }`}
                  >
                    {t(ui[link.key])}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <LangToggle />
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-ink-600 bg-ink-850 px-4 py-2 text-sm font-semibold text-fog-100 transition-colors hover:border-gold-400/50 hover:text-gold-300"
            >
              {t(ui.nav_cta)}
              <ArrowUpRight className="h-4 w-4 text-gold-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <LangToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-600 bg-ink-850/70 text-fog-200"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[4.5rem] bg-ink-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 top-[4.5rem] origin-top border-b border-ink-700 bg-ink-900 px-5 pb-7 pt-3 shadow-card transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-2 py-3.5 font-display text-2xl transition-colors hairline-b ${
                    isActive(link.href) ? "text-gold-300" : "text-fog-200 hover:text-fog-50"
                  }`}
                >
                  {t(ui[link.key])}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-fog-100"
          >
            {t(ui.nav_cta)}
            <ArrowUpRight className="h-4 w-4 text-gold-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
