import Image from "next/image";
import type { CatalogItem } from "@/lib/catalog";

/**
 * Renders an item's cover image, or a cinematic placeholder when no artwork
 * exists yet (Hurda-G → retro red, others → noir + serif nameplate).
 */
export default function CoverArt({
  item,
  className = "",
  priority = false,
}: {
  item: CatalogItem;
  className?: string;
  priority?: boolean;
}) {
  if (item.cover) {
    return (
      <Image
        src={item.cover}
        alt={item.name}
        width={1400}
        height={933}
        priority={priority}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  const retro = item.theme === "retro-red";
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
      style={{
        background: retro
          ? "radial-gradient(120% 120% at 50% 10%, #2a0606 0%, #140303 55%, #0a0202 100%)"
          : "radial-gradient(120% 120% at 50% 10%, #1a1a20 0%, #101013 55%, #0a0a0c 100%)",
      }}
    >
      {retro && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,60,60,0.12) 0 2px, transparent 2px 6px)",
          }}
        />
      )}
      <div
        aria-hidden
        className="absolute -top-1/3 h-2/3 w-2/3 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: retro ? "rgba(244,63,94,0.30)" : "rgba(255,255,255,0.14)" }}
      />
      <div className="relative px-6 text-center">
        <span
          className="mx-auto mb-3 block h-1 w-10 rounded-full"
          style={{ background: retro ? "#f43f5e" : "linear-gradient(90deg,#ffffff,#8a8a8a)" }}
        />
        <span
          className={`font-display block text-3xl font-bold tracking-tight sm:text-4xl ${retro ? "animate-flicker" : ""}`}
          style={{
            color: retro ? "#fb5b6d" : "#f7f8fc",
            textShadow: retro ? "0 0 22px rgba(244,63,94,0.6)" : "0 2px 30px rgba(0,0,0,0.5)",
          }}
        >
          {item.name}
        </span>
      </div>
    </div>
  );
}
