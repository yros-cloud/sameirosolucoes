import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Instalação de câmeras, automação e mais | SAMEIRO" },
      { name: "description", content: "Instalação de câmeras, automação residencial, fechaduras eletrônicas, portões e mais em Florianópolis." },
      { property: "og:title", content: "Serviços SAMEIRO" },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Serviços</div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Soluções inteligentes para residências e empresas.</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Conheça todos os serviços oferecidos pela SAMEIRO em Florianópolis. Cada solução com projeto sob medida, instalação limpa e suporte contínuo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover-lift"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.42_0.17_265)] text-white shadow-card">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
