import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "vertical" | "icon" | "mono";
  showTagline?: boolean;
  tone?: "default" | "light";
}

/**
 * SAMEIRO — symbol concept:
 * Casa estilizada formada por dois traços que se conectam em um nó central
 * (proteção + conexão), criando um escudo abstrato. Funciona como favicon.
 */
export function BrandMark({ className, tone = "gradient" }: { className?: string; tone?: "gradient" | "mono" | "white" }) {
  const stroke =
    tone === "white" ? "currentColor" : tone === "mono" ? "var(--graphite)" : "url(#sameiro-grad)";
  const accent =
    tone === "white" ? "currentColor" : tone === "mono" ? "var(--graphite)" : "url(#sameiro-grad-2)";
  return (
    <svg viewBox="0 0 64 64" className={cn("h-9 w-9", className)} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="sameiro-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.42 0.17 265)" />
          <stop offset="100%" stopColor="oklch(0.62 0.16 240)" />
        </linearGradient>
        <linearGradient id="sameiro-grad-2" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.62 0.16 240)" />
          <stop offset="100%" stopColor="oklch(0.42 0.17 265)" />
        </linearGradient>
      </defs>
      {/* shield/house outline */}
      <path
        d="M32 4 L58 18 V36 C58 49 46 58 32 60 C18 58 6 49 6 36 V18 Z"
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* roof/connection apex */}
      <path
        d="M16 30 L32 18 L48 30"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* central node — connection / smart hub */}
      <circle cx="32" cy="38" r="4.5" fill={stroke} />
      {/* signal arcs */}
      <path
        d="M24 42 C26 45 30 47 32 47 C34 47 38 45 40 42"
        stroke={accent}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M20 46 C24 51 28 53 32 53 C36 53 40 51 44 46"
        stroke={accent}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({ className, variant = "horizontal", showTagline = false, tone: toneProp }: LogoProps) {
  const markTone = variant === "mono" ? "mono" : toneProp === "light" ? "white" : "gradient";
  const wordClass = toneProp === "light" ? "text-white" : "text-foreground";
  const tagClass = toneProp === "light" ? "text-white/70" : "text-muted-foreground";

  if (variant === "icon") {
    return <BrandMark className={className} tone={markTone} />;
  }

  if (variant === "vertical") {
    return (
      <div className={cn("flex flex-col items-center gap-2", className)}>
        <BrandMark className={cn("h-12 w-12", toneProp === "light" && "text-white")} tone={markTone} />
        <div className="flex flex-col items-center leading-none">
          <span className={cn("font-display text-2xl font-semibold tracking-[0.22em]", wordClass)}>SAMEIRO</span>
          {showTagline && (
            <span className={cn("mt-1.5 text-[10px] uppercase tracking-[0.32em]", tagClass)}>
              Soluções Inteligentes
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark className={cn("h-8 w-8", toneProp === "light" && "text-white")} tone={markTone} />
      <div className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.15rem] font-semibold tracking-[0.22em]", wordClass)}>SAMEIRO</span>
        {showTagline && (
          <span className={cn("mt-1 text-[9px] uppercase tracking-[0.3em]", tagClass)}>
            Soluções Inteligentes
          </span>
        )}
      </div>
    </div>
  );
}
