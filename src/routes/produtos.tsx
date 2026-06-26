import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/components/site/WhatsAppFab";
import { PRODUCT_CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Câmeras, fechaduras, automação | SAMEIRO" },
      { name: "description", content: "Equipamentos recomendados pela SAMEIRO: câmeras, fechaduras, portões, sensores e automação. Compre conosco e tenha desconto na instalação." },
      { property: "og:url", content: "/produtos" },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Produtos</div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Equipamentos certos para sua casa.</h1>
            <p className="mt-4 text-muted-foreground">
              Trabalhamos com as melhores marcas. Comprando através dos nossos links parceiros você ganha desconto na instalação.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 hover-lift">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">{c.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
                </div>
                <div className="mt-6 flex gap-2">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all">Comprar</a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-border px-3 py-2 text-center text-xs font-semibold hover:bg-secondary">Contratar Instalação</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
