import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — SAMEIRO" },
      { name: "description", content: "Dicas, guias e novidades sobre segurança eletrônica e automação residencial." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  { t: "Como escolher uma câmera de segurança", d: "Guia prático para quem está começando." },
  { t: "Vale a pena investir em automação residencial?", d: "Custos, benefícios e cenários reais." },
  { t: "Como funciona uma fechadura eletrônica", d: "Tipos, vantagens e o que considerar antes de comprar." },
  { t: "Quanto custa instalar câmeras em Florianópolis", d: "Faixa de preço, fatores e dicas para economizar." },
];

function BlogPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Blog</div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Conteúdo para quem quer entender de verdade.</h1>
            <p className="mt-4 text-muted-foreground">Artigos sobre segurança eletrônica, automação residencial e tecnologia para o lar.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <article className="group rounded-2xl border border-border bg-card p-7 hover-lift">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Em breve</div>
                <h2 className="mt-3 text-xl font-semibold">{p.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <Link to="/contato" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Quero ser avisado <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
