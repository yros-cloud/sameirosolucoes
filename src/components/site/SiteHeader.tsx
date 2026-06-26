import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/produtos", label: "Produtos" },
  { to: "/automacao", label: "Automação" },
  { to: "/projetos", label: "Projetos" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light = transparent header over dark hero (use white text)
  const light = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-3",
      )}
    >
      <div className="container-x">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-4",
            scrolled || open
              ? "glass shadow-card"
              : "bg-[oklch(0.18_0.04_235)]/30 backdrop-blur-md ring-1 ring-white/10",
          )}
        >
          <Link to="/" className="flex items-center" aria-label="SAMEIRO — início">
            <Logo tone={light ? "light" : "default"} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  light ? "text-white/85 hover:text-white" : "text-foreground/70 hover:text-foreground",
                )}
                activeProps={{
                  className: cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-semibold",
                    light
                      ? "!text-[oklch(0.2_0.04_235)] bg-white shadow-sm"
                      : "!text-primary bg-secondary",
                  ),
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contato"
              className={cn(
                "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant",
                light
                  ? "bg-white text-[oklch(0.2_0.04_235)] hover:bg-white/90"
                  : "bg-primary text-primary-foreground",
              )}
            >
              Orçamento
            </Link>
          </div>

          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              light ? "bg-white/10 text-white ring-1 ring-white/20" : "glass text-foreground",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass p-3 shadow-card lg:hidden">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/contato"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Solicitar orçamento
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
