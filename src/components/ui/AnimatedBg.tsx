"use client";

import { useEffect, useState } from "react";

type Variant = "aurora" | "particles" | "beams" | "rings" | "grid";
const VARIANTS: Variant[] = ["aurora", "particles", "beams", "rings", "grid"];

type Dot = { l: number; s: number; d: number; delay: number };

/**
 * Code-driven modern background animation. Picks a random variant on mount
 * (unless `variant` is fixed). Monochrome + theme-aware, purely decorative.
 */
export default function AnimatedBg({
  className = "",
  variant: fixed,
}: {
  className?: string;
  variant?: Variant;
}) {
  const [mounted, setMounted] = useState(false);
  const [variant, setVariant] = useState<Variant>(fixed ?? "aurora");
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setMounted(true);
    const v = fixed ?? VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
    setVariant(v);
    if (v === "particles") {
      setDots(
        Array.from({ length: 28 }, () => ({
          l: Math.random() * 100,
          s: 2 + Math.random() * 4,
          d: 11 + Math.random() * 16,
          delay: -Math.random() * 24,
        })),
      );
    }
  }, [fixed]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {variant === "aurora" && (
        <>
          <span className="animate-drift-a absolute -left-20 -top-24 h-80 w-80 rounded-full bg-fog-400/15 blur-3xl" />
          <span className="animate-drift-b absolute right-0 top-1/4 h-96 w-96 rounded-full bg-fog-300/15 blur-3xl" />
          <span className="animate-float-slow absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-fog-400/12 blur-3xl" />
        </>
      )}

      {variant === "particles" &&
        dots.map((p, i) => (
          <span
            key={i}
            className="animate-rise absolute bottom-0 rounded-full bg-fog-400/40"
            style={{
              left: `${p.l}%`,
              width: p.s,
              height: p.s,
              animationDuration: `${p.d}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

      {variant === "beams" && (
        <>
          <span className="animate-sweep absolute -inset-y-16 left-0 w-48 bg-gradient-to-r from-transparent via-fog-300/15 to-transparent" />
          <span
            className="animate-sweep absolute -inset-y-16 left-0 w-28 bg-gradient-to-r from-transparent via-fog-400/12 to-transparent"
            style={{ animationDelay: "-4s", animationDuration: "11s" }}
          />
        </>
      )}

      {variant === "rings" && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="animate-spin-slow block h-[42rem] w-[42rem] rounded-full border border-fog-400/15" />
          <span
            className="animate-spin-slow absolute inset-10 rounded-full border border-fog-300/12"
            style={{ animationDirection: "reverse", animationDuration: "34s" }}
          />
          <span
            className="animate-spin-slow absolute inset-24 rounded-full border border-dashed border-fog-400/12"
            style={{ animationDuration: "44s" }}
          />
        </div>
      )}

      {variant === "grid" && (
        <div className="animate-grid-pan absolute inset-0 bg-grid opacity-70" />
      )}
    </div>
  );
}
