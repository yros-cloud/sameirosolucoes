import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/components/site/WhatsAppFab";
import { Mail, MapPin, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — SAMEIRO Florianópolis" },
      { name: "description", content: "Fale com a SAMEIRO. Atendimento por WhatsApp, telefone e e-mail. Florianópolis e região." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contato</div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Vamos conversar?</h1>
          <p className="mt-4 text-muted-foreground">Solicite um orçamento sem compromisso. Respondemos em até 24 horas.</p>

          <div className="mt-10 space-y-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[oklch(0.69_0.16_162)]/15 text-[oklch(0.55_0.16_162)]"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm text-muted-foreground">(48) 9 9999-9999</div>
              </div>
            </a>
            <a href="tel:+554899999999" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="font-semibold">Telefone</div>
                <div className="text-sm text-muted-foreground">(48) 9 9999-9999</div>
              </div>
            </a>
            <a href="mailto:contato@sameirosolucoes.com.br" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="font-semibold">E-mail</div>
                <div className="text-sm text-muted-foreground">contato@sameirosolucoes.com.br</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="font-semibold">Atendimento</div>
                <div className="text-sm text-muted-foreground">Florianópolis · Rio Vermelho e região</div>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <a href="#" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-secondary hover:bg-accent"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-secondary hover:bg-accent"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(WHATSAPP_URL, "_blank");
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-card"
          >
            <h2 className="text-xl font-semibold">Pedido de orçamento</h2>
            <p className="mt-1 text-sm text-muted-foreground">Preencha que retornamos pelo WhatsApp.</p>
            <div className="mt-6 space-y-4">
              <Field label="Nome" type="text" placeholder="Seu nome" />
              <Field label="WhatsApp" type="tel" placeholder="(48) 9 9999-9999" />
              <Field label="Bairro / Cidade" type="text" placeholder="Rio Vermelho, Florianópolis" />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">O que você precisa?</label>
                <textarea
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  rows={4}
                  placeholder="Descreva brevemente seu projeto"
                />
              </div>
              <button type="submit" className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-all">
                Enviar pedido
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...rest} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
    </div>
  );
}
