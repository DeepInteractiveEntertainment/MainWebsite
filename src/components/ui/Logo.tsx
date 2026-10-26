import Image from "next/image";

type LogoProps = { className?: string };

/** Elegant serif wordmark lockup. */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Deep Interactive Entertainment logo"
        width={38}
        height={38}
        priority
        className="h-8 w-8 object-contain opacity-95"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-medium tracking-tight text-fog-50">
          Deep Interactive
        </span>
        <span className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.4em] text-gold-400">
          Entertainment
        </span>
      </span>
    </span>
  );
}
