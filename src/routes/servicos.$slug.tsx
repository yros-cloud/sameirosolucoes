import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site-data";
import { WHATSAPP_URL } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} em Florianópolis | SAMEIRO` : "Serviço";
    const desc = s?.short ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/servicos/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/servicos/${params.slug}` }],
    };
  },
  component: ServicoDetalhe,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-semibold">Serviço não encontrado</h1>
      <Link to="/servicos" className="mt-6 inline-block text-primary underline">Voltar para serviços</Link>
    </div>
  ),
});

function ServicoDetalhe() {
  const { service } = Route.useLoaderData();
  return (
    <article className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <Link to="/servicos" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary">
            ← Serviços
          </Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{service.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{service.long}</p>

          <div className="mt-10 space-y-3">
            {["Visita técnica gratuita", "Projeto sob medida", "Instalação limpa e profissional", "Garantia escrita de 12 meses", "Suporte contínuo"].map(b => (
              <div key={b} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.69_0.16_162)]" />
                <span className="text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all">
              <MessageCircle className="h-4 w-4" /> Pedir orçamento
            </a>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary">
              Formulário <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="sticky top-28 rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.42_0.17_265)] text-white shadow-card">
              <service.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-xl font-semibold">Atendimento em Florianópolis</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Atendemos Rio Vermelho, Ingleses, Jurerê, Canasvieiras, Centro e demais regiões.
            </p>
            <div className="mt-6 border-t border-border pt-5 text-xs uppercase tracking-widest text-muted-foreground">Palavras-chave</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {service.keywords.map((k: string) => (
                <span key={k} className="rounded-full bg-secondary px-3 py-1 text-xs">{k}</span>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </article>
  );
}
