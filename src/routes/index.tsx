import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Sparkles, MessageCircle, CheckCircle2, Star, Plus, Minus,
  Award, HeartHandshake, ShieldHalf, Wrench, Headphones, BadgeCheck, UserCheck,
} from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/components/site/WhatsAppFab";
import { SERVICES, PRODUCT_CATEGORIES } from "@/lib/site-data";
import heroHome from "@/assets/hero-home.jpg";
import appCamera from "@/assets/app-camera.jpg";
import automationLiving from "@/assets/automation-living.jpg";
import projectLock from "@/assets/project-lock.jpg";
import projectCamera from "@/assets/project-camera.jpg";
import projectGate from "@/assets/project-gate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAMEIRO — Sua casa inteligente começa aqui" },
      {
        name: "description",
        content:
          "Instalação de câmeras, automação residencial, fechaduras eletrônicas e portões em Florianópolis. Tecnologia que protege quem você ama.",
      },
      { property: "og:title", content: "SAMEIRO — Tecnologia que protege" },
      { property: "og:description", content: "Segurança e automação inteligente para residências e empresas em Florianópolis." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <ProductsSection />
      <PartnerDiscountSection />
      <HowItWorksSection />
      <WhyUsSection />
      <AutomationSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative isolate -mt-20 overflow-hidden surface-hero pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.16 240 / 0.6), transparent 70%)" }}
        aria-hidden
      />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Especialistas em casa inteligente em Florianópolis
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[4.25rem]"
          >
            Sua casa inteligente <span className="block bg-gradient-to-r from-white via-[oklch(0.85_0.08_240)] to-[oklch(0.7_0.16_240)] bg-clip-text text-transparent">começa aqui.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Segurança, automação e soluções inteligentes para residências e empresas.
            Projeto, instalação e suporte sob medida.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contato"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[oklch(0.2_0.04_235)] shadow-glow transition-all hover:-translate-y-0.5"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 text-white">
            {[
              { k: "+500", v: "projetos entregues" },
              { k: "5★", v: "atendimento" },
              { k: "24/7", v: "suporte" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-semibold">{s.k}</div>
                <div className="mt-1 text-xs text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img src={heroHome} alt="Casa inteligente moderna" className="aspect-[4/3] w-full object-cover" width={1600} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.03_235)]/40 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-10 -left-6 hidden w-56 overflow-hidden rounded-2xl border border-white/10 shadow-glow md:block"
          >
            <img src={appCamera} alt="Aplicativo de câmeras" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -right-3 top-6 hidden rounded-2xl glass-dark px-4 py-3 text-white shadow-glow md:flex items-center gap-2"
          >
            <ShieldCheck className="h-5 w-5 text-[oklch(0.72_0.17_162)]" />
            <div className="text-xs">
              <div className="font-semibold">Sistema armado</div>
              <div className="text-white/60">Tudo seguro</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============ Trust Strip ============ */
function TrustStrip() {
  const brands = ["Intelbras", "Hikvision", "Philips Hue", "Amazon Alexa", "Google Nest", "PPA", "Garen", "Yale"];
  return (
    <section className="border-y border-border bg-card">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-7 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {brands.map((b) => <span key={b}>{b}</span>)}
      </div>
    </section>
  );
}

/* ============ Section heading ============ */
function SectionHead({ eyebrow, title, desc, center = false }: { eyebrow?: string; title: string; desc?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</div>}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

/* ============ Services ============ */
function ServicesSection() {
  const featured = SERVICES.slice(0, 9);
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHead eyebrow="Serviços" title="Tudo que sua casa precisa, em um só lugar." desc="Do projeto à instalação, com equipe própria treinada e equipamentos recomendados pelos maiores fabricantes." />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.42_0.17_265)] text-white shadow-card">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Ver todos os serviços <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============ Products ============ */
function ProductsSection() {
  return (
    <section id="produtos" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHead eyebrow="Produtos" title="Equipamentos recomendados pela nossa equipe." desc="Selecionamos as melhores marcas do mercado. Compre conosco ou através dos nossos links parceiros." />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 hover-lift">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">{c.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
                </div>
                <div className="mt-6 flex gap-2">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-primary px-3 py-2 text-center text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5">
                    Comprar
                  </a>
                  <Link to="/contato" className="flex-1 rounded-full border border-border px-3 py-2 text-center text-xs font-semibold transition-colors hover:bg-secondary">
                    Instalar
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Partner Discount ============ */
function PartnerDiscountSection() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.2_0.05_240)] to-[oklch(0.12_0.03_235)] p-10 text-white shadow-elegant md:p-16">
            <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" /> Vantagem exclusiva
                </div>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Compre conosco e economize.</h2>
                <p className="mt-4 max-w-lg text-white/70">
                  Quem compra os equipamentos através dos nossos links parceiros recebe <span className="font-semibold text-white">desconto especial na instalação</span>.
                  Você economiza no equipamento e na mão de obra.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.2_0.04_235)] transition-all hover:-translate-y-0.5">
                    Ver indicações
                  </a>
                  <Link to="/contato" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10">
                    Falar com especialista
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {["Desconto na instalação", "Equipamentos certos", "Sem surpresas", "Garantia mantida"].map((b) => (
                  <div key={b} className="flex items-center gap-2 rounded-xl bg-white/5 p-4 backdrop-blur">
                    <CheckCircle2 className="h-4 w-4 text-[oklch(0.72_0.17_162)]" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ How it works ============ */
function HowItWorksSection() {
  const steps = [
    { n: "01", t: "Solicite orçamento", d: "Conte sua necessidade pelo WhatsApp ou formulário." },
    { n: "02", t: "Indicação dos equipamentos", d: "Recomendamos o melhor para seu cenário." },
    { n: "03", t: "Compre", d: "Pelos nossos links parceiros ou onde preferir." },
    { n: "04", t: "Agende a instalação", d: "Horário que cabe na sua rotina." },
    { n: "05", t: "Acompanhamos tudo", d: "Suporte e ajustes após a entrega." },
  ];
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal>
          <SectionHead center eyebrow="Como funciona" title="Cinco passos. Zero dor de cabeça." />
        </Reveal>
        <div className="relative mt-14 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="font-display text-3xl font-semibold text-gradient-brand">{s.n}</div>
                <h3 className="mt-3 text-base font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Why us ============ */
function WhyUsSection() {
  const items = [
    { i: Award, t: "Especialistas", d: "Equipe formada em automação e segurança eletrônica." },
    { i: HeartHandshake, t: "Atendimento humanizado", d: "Explicamos tudo em português, sem termos complicados." },
    { i: ShieldHalf, t: "Garantia", d: "Mão de obra e equipamentos com garantia escrita." },
    { i: Wrench, t: "Instalação limpa", d: "Cabos ocultos, acabamento impecável." },
    { i: Headphones, t: "Suporte", d: "Estamos junto após a entrega, sempre." },
    { i: BadgeCheck, t: "Equipamentos recomendados", d: "Trabalhamos com as melhores marcas." },
    { i: UserCheck, t: "Profissionais capacitados", d: "Time uniformizado e identificado." },
    { i: Sparkles, t: "Projeto sob medida", d: "Cada casa é única — nossa solução também." },
  ];
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHead eyebrow="Por que a SAMEIRO" title="Confiança construída em cada instalação." />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.03}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <it.i className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Automation ============ */
function AutomationSection() {
  const items = ["Alexa", "Google Home", "Iluminação", "Cortinas", "Fechaduras", "Portões", "Sensores"];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={automationLiving} alt="Sala com automação residencial" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHead eyebrow="Automação Residencial" title="Comandos por voz, rotinas inteligentes, conforto total." desc="Integramos iluminação, climatização, segurança e entretenimento em um só ecossistema." />
          <div className="mt-7 flex flex-wrap gap-2">
            {items.map((i) => (
              <span key={i} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium">
                {i}
              </span>
            ))}
          </div>
          <Link to="/automacao" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5">
            Conhecer automação <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ Projects ============ */
function ProjectsSection() {
  const projects = [
    { img: projectCamera, t: "Monitoramento residencial", d: "Casa em Rio Vermelho — 6 câmeras + alarme." },
    { img: projectLock, t: "Fechadura biométrica", d: "Apartamento em Jurerê — Yale + automação." },
    { img: projectGate, t: "Portão automatizado", d: "Sobrado em Ingleses — motor PPA + app." },
  ];
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHead eyebrow="Projetos" title="Trabalhos reais, entregues por nós." />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Testimonials ============ */
function TestimonialsSection() {
  const items = [
    { n: "Mariana Souza", l: "Florianópolis · Rio Vermelho", t: "Equipe pontual, atendimento incrível. Configuraram tudo e ainda nos ensinaram a usar." },
    { n: "Ricardo Lima", l: "Florianópolis · Ingleses", t: "Instalação limpa, sem furos à vista. Recomendo de olhos fechados." },
    { n: "Patrícia Mendes", l: "Florianópolis · Jurerê", t: "Vieram fazer manutenção do portão e acabaram fazendo toda a automação da casa. Top demais." },
  ];
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal>
          <SectionHead eyebrow="Depoimentos" title="O que nossos clientes dizem." />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="flex gap-0.5 text-[oklch(0.78_0.17_85)]">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{it.t}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.42_0.17_265)] font-display text-sm font-semibold text-white">
                    {it.n.split(" ").map(s => s[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{it.n}</div>
                    <div className="text-xs text-muted-foreground">{it.l}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FaqSection() {
  const faqs = [
    { q: "Vocês atendem toda Florianópolis?", a: "Sim. Atendemos toda a Grande Florianópolis, com foco em Rio Vermelho, Ingleses, Jurerê, Canasvieiras e Centro." },
    { q: "Posso comprar o equipamento por conta?", a: "Pode sim. Recomendamos os modelos certos para sua necessidade e realizamos a instalação completa." },
    { q: "Qual a garantia da instalação?", a: "Mão de obra com garantia de 12 meses. Equipamentos seguem a garantia do fabricante." },
    { q: "Quanto tempo demora uma instalação?", a: "Depende do escopo. Sistemas residenciais simples ficam prontos em algumas horas." },
    { q: "Vocês emitem nota fiscal?", a: "Sempre. Emitimos NF para todos os serviços." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-secondary/40 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <SectionHead eyebrow="Perguntas frequentes" title="Tudo que você precisa saber antes de contratar." desc="Não achou sua resposta? Fale com a gente no WhatsApp." />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5">
            <MessageCircle className="h-4 w-4" /> Conversar agora
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between border-b border-border px-6 py-5 text-left last:border-b-0"
              >
                <div className="flex-1">
                  <div className="font-semibold">{f.q}</div>
                  {open === i && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
                </div>
                <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ Contact ============ */
function ContactSection() {
  return (
    <section id="contato" className="py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.42_0.17_265)] p-10 text-white shadow-elegant md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">Pronto para deixar sua casa mais segura?</h2>
                <p className="mt-4 max-w-lg text-white/80">
                  Receba um orçamento personalizado em até 24 horas. Atendemos Florianópolis e região.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-[oklch(0.2_0.04_235)] transition-all hover:-translate-y-0.5">
                  WhatsApp · (48) 9 9999-9999
                </a>
                <Link to="/contato" className="rounded-full border border-white/30 px-6 py-4 text-center text-sm font-semibold hover:bg-white/10">
                  Formulário de orçamento
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
