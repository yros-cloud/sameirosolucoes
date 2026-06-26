import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — SAMEIRO Soluções Inteligentes" },
      { name: "description", content: "Conheça a SAMEIRO: especialistas em segurança eletrônica e automação residencial em Florianópolis." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomosPage,
});

function QuemSomosPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x grid gap-16 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Quem Somos</div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Tecnologia que protege quem você ama.</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Somos especialistas em soluções inteligentes para residências e pequenos negócios em Florianópolis.
            Nossa missão é facilitar a vida das pessoas através da tecnologia, com instalações limpas, suporte humano e equipamentos recomendados pelas melhores marcas do mercado.
          </p>
          <p className="mt-5 text-muted-foreground">
            Combinamos segurança eletrônica, automação residencial e serviços de instalação em um único atendimento — para que você não precise contratar várias empresas.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4">
            {[
              { i: ShieldCheck, t: "Missão", d: "Tornar a tecnologia acessível e útil para qualquer família." },
              { i: Sparkles, t: "Visão", d: "Ser referência em automação residencial em Santa Catarina." },
              { i: Users, t: "Valores", d: "Atendimento humano, transparência, qualidade e suporte contínuo." },
            ].map(it => (
              <div key={it.t} className="rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <it.i className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
