import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.14_0.03_235)] text-white/80">
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo showTagline />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Especialistas em segurança eletrônica e automação residencial.
            Tecnologia que protege quem você ama.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/servicos" className="hover:text-white">Serviços</Link></li>
            <li><Link to="/produtos" className="hover:text-white">Produtos</Link></li>
            <li><Link to="/automacao" className="hover:text-white">Automação</Link></li>
            <li><Link to="/projetos" className="hover:text-white">Projetos</Link></li>
            <li><Link to="/quem-somos" className="hover:text-white">Quem Somos</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Contato
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4" /> (48) 98426-0224</li>
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4" /> contato@sameirosolucoes.com.br</li>
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4" /> Rod. José Carlos Daux, 1000 · Florianópolis/SC</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a aria-label="Instagram" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
            <a aria-label="Facebook" href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-white/10"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Especialidades
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Instalação de câmeras em Florianópolis</li>
            <li>Automação Alexa & Google Home</li>
            <li>Fechaduras e portões eletrônicos</li>
            <li>Vídeo porteiro e controle de acesso</li>
          </ul>
        </div>
      </div>

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SAMEIRO Soluções Inteligentes. Todos os direitos reservados.</p>
          <p>sameirosolucoes.com.br · Política de Privacidade</p>
        </div>
      </div>
    </footer>
  );
}
