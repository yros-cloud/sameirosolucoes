import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import projectCamera from "@/assets/project-camera.jpg";
import projectLock from "@/assets/project-lock.jpg";
import projectGate from "@/assets/project-gate.jpg";
import heroHome from "@/assets/hero-home.jpg";
import automationLiving from "@/assets/automation-living.jpg";
import appCamera from "@/assets/app-camera.jpg";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Trabalhos entregues pela SAMEIRO" },
      { name: "description", content: "Galeria de projetos de automação residencial, instalação de câmeras e segurança eletrônica realizados em Florianópolis." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosPage,
});

const PROJECTS = [
  { img: projectCamera, t: "Monitoramento residencial", l: "Rio Vermelho" },
  { img: projectLock, t: "Fechadura biométrica", l: "Jurerê Internacional" },
  { img: projectGate, t: "Portão automatizado", l: "Ingleses" },
  { img: heroHome, t: "Sistema completo de segurança", l: "Lagoa da Conceição" },
  { img: automationLiving, t: "Automação de sala", l: "Centro" },
  { img: appCamera, t: "Configuração de app", l: "Canasvieiras" },
];

function ProjetosPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Projetos</div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Resultados que falam por si.</h1>
            <p className="mt-4 text-muted-foreground">Uma seleção de instalações e automações entregues pela nossa equipe em Florianópolis.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.t + i} delay={i * 0.04}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-card hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="p-5">
                  <h3 className="text-base font-semibold">{p.t}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.l}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
