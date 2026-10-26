"use client";

import { useEffect, useRef } from "react";

/**
 * Muted, looping, autoplaying background video with a bulletproof play path:
 * forces the muted PROPERTY (React only sets the attribute, which browsers
 * treat as unmuted and then block autoplay), retries on canplay/loadeddata,
 * and unlocks on the first user gesture if the browser still refuses.
 */
export default function BgVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => {
      v.muted = true;
      const p = v.play();
      if (p) p.catch(() => {});
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay);
    v.addEventListener("loadeddata", tryPlay);
    const unlock = () => tryPlay();
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("scroll", unlock, { once: true, passive: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("scroll", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
