# SAMEIRO — Plano de Entrega

Escopo enorme. Vou entregar em fases para garantir qualidade premium em cada peça, em vez de tudo raso de uma vez.

## Fase 1 — Identidade Visual + Site (esta rodada)

**Design System (src/styles.css)**
- Paleta: Azul petróleo `#0E3A47`, Azul royal `#1E3A8A` (refinado), Branco, Cinza grafite `#1F2937`, Verde sucesso `#10B981` (apenas estados)
- Tipografia: display grotesque premium (ex: Space Grotesk) + body neutra (Inter) — carregadas via `<link>` no `__root.tsx`
- Tokens oklch, gradientes sutis, sombras elegantes, glassmorphism leve
- Suporte light/dark já no design system

**Logo SAMEIRO (gerado como SVG/PNG)**
- Símbolo abstrato: forma geométrica combinando casa + escudo + nó de conexão (sem câmera literal)
- Wordmark "SAMEIRO" em display, letter-spacing largo
- Versões: horizontal, vertical, monocromática, ícone solto (favicon)
- Subtítulo institucional opcional: "Soluções Inteligentes"

**Site — rotas TanStack**
- `/` Home com todas as seções listadas (hero, serviços, produtos, como funciona, por que escolher, automação, projetos, depoimentos, FAQ, contato)
- `/servicos`, `/produtos`, `/automacao`, `/projetos`, `/quem-somos`, `/blog`, `/contato`
- Rotas individuais por serviço: `/servicos/cameras`, `/servicos/fechaduras`, etc. (stubs SEO-otimizados)
- Header sticky com glass, menu responsivo
- Footer institucional
- Botão flutuante WhatsApp com mensagem pré-preenchida
- Animações: framer-motion para hero, hover scale em cards, scroll reveal

**SEO**
- `head()` por rota com title/description/og focados em Florianópolis e Rio Vermelho
- JSON-LD LocalBusiness no root
- sitemap.xml + robots.txt
- Favicon do símbolo

## Fase 2 (próxima rodada, se aprovar)
- Conteúdo expandido das páginas internas de serviço
- Posts de blog com conteúdo real
- Galeria de projetos com antes/depois
- Sistema de produtos com links de afiliado Mercado Livre

## Fase 3 (rodada de material gráfico)
- Cartão de visita, uniforme, boné, adesivo veículo, pasta, papel timbrado, assinatura e-mail, perfil/capa Instagram/Facebook/LinkedIn, panfleto A5, QR Code
- Cada um gerado como imagem premium e disponibilizado em `/mnt/documents`

## Confirmações necessárias antes de começar Fase 1
1. **WhatsApp / contato**: qual número usar? Sem isso o botão flutuante e bloco de contato ficam com placeholder.
2. **Localização**: confirmar Florianópolis/Rio Vermelho (vi no SEO) — endereço completo para Google Maps?
3. **Logo**: posso gerar o símbolo via IA ou prefere construído em SVG puro (mais limpo, escalável, ideal para marca)? Recomendo SVG puro.

Se quiser, posso começar a Fase 1 já assumindo placeholders nos contatos e você ajusta depois. Confirma?
