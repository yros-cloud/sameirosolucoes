import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mic, Lightbulb, Sun, Lock, DoorOpen, Radar, Home } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import automationImg from "@/assets/automation-living.jpg";

export const Route = createFileRoute("/automacao")({
  head: () => ({
    meta: [
      { title: "Automação Residencial em Florianópolis | SAMEIRO" },
      { name: "description", content: "Automação residencial com Alexa, Google Home, iluminação inteligente, cortinas, fechaduras e sensores. Projeto e instalação em Florianópolis." },
      { property: "og:url", content: "/automacao" },
    ],
    links: [{ rel: "canonical", href: "/automacao" }],
  }),
  component: AutomacaoPage,
});

const ITEMS = [
  { i: Mic, t: "Alexa" }, { i: Home, t: "Google Home" },
  { i: Lightbulb, t: "Iluminação" }, { i: Sun, t: "Cortinas" },
  { i: Lock, t: "Fechaduras" }, { i: DoorOpen, t: "Portões" },
  { i: Radar, t: "Sensores" },
];

function AutomacaoPage() {
  return (
    <>
      <section className="surface-hero -mt-20 pb-20 pt-36 md:pt-44 text-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Automação</div>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Sua casa, sob seu comando.</h1>
            <p className="mt-5 max-w-lg text-white/70">
              Integramos iluminação, climatização, áudio, segurança e acessos em um só ecossistema, com rotinas inteligentes e comando por voz.
            </p>
            <Link to="/contato" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.2_0.04_235)] hover:-translate-y-0.5 transition-all">
              Falar com especialista <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={automationImg} alt="Sala com automação" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-4xl">O que integramos</h2>
              <p className="mt-3 text-muted-foreground">Soluções modulares — comece pequeno e expanda quando quiser.</p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((it, i) => (
              <Reveal key={it.t} delay={i * 0.04}>
                <div className="rounded-2xl border border-border bg-card p-6 hover-lift">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <it.i className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{it.t}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
