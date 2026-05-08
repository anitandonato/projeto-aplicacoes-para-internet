# Barbearia Clássica — Landing Page

Projeto desenvolvido para a disciplina **Aplicações para Internet** (2ª Avaliação).

**Trio:** Gabriel Guilherme Gomes, Anita Alves e Maria Mariah Queiroga 

---

## Sobre o Projeto

Landing page de uma barbearia moderna com design escuro e acento dourado.
Apresenta os serviços (corte, barba e combo), seção sobre a barbearia e informações de contato.

## Como Executar

Abra o arquivo `index.html` diretamente no navegador, ou acesse o site publicado:

🔗 **[Ver projeto online](https://anitandonato.github.io/projeto-aplicacoes-para-internet/)**

## Screenshots

| Mobile (375px) | Tablet (768px) | Desktop (1280px) |
|:-:|:-:|:-:|
 <img width="250" alt="Mobile 375px" src="https://github.com/user-attachments/assets/4290eaaf-6214-4f29-9e0b-57c91e8ccfc7" /> | <img width="250" alt="Tablet 768px" src="https://github.com/user-attachments/assets/b8f8d593-ad41-46a4-9adb-87302bb6a3e2" /> | <img width="250" alt="Desktop 1280px" src="https://github.com/user-attachments/assets/16deaec0-54f8-4c2a-be9f-f90c352b47ad" /> |


## Tecnologias

- **HTML5** — estrutura semântica (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3** — Flexbox, CSS Grid, Media Queries Mobile-First, Variáveis CSS, `clamp()`
- **Google Fonts** — Poppins (headings) + Inter (corpo)
- Sem frameworks ou bibliotecas externas

---

## Etapa 2 — Planejamento da Interface

### Definição do Problema

**Contexto:** barbearias tradicionais dependem de ligações telefônicas para agendamentos e não têm presença digital que comunique seus diferenciais.

**Público-alvo:** homens de 18 a 40 anos, familiarizados com smartphones, que buscam um serviço de qualidade com praticidade para agendar.

**Dor principal:** sem um site, o cliente não consegue conhecer os serviços e preços antes de entrar em contato, gerando fricção no processo de agendamento.

**Critério de sucesso:** o usuário consegue visualizar todos os serviços, preços e formas de contato em menos de 10 segundos, em qualquer dispositivo.

---

### Wireframe (estrutura antes do estilo)

```
┌──────────────────────────────────────────────┐
│  HEADER — ✂ Barbearia Clássica    [Nav] 🍔  │
├──────────────────────────────────────────────┤
│              HERO SECTION                    │
│  [H1: Estilo, Tradição e Profissionalismo]   │
│  [Subtítulo — descrição da barbearia]        │
│  [ Ver Serviços ]  [ Agendar Horário ]       │
│                          [ Imagem / ✂ ]      │
├──────────────────────────────────────────────┤
│  SERVIÇOS  (Grid 1→2→3 colunas)              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ ✂ Corte  │  │ 🪒 Barba │  │💈 Combo  │   │
│  │ R$ 35    │  │ R$ 25   │  │ R$ 55   │   │
│  │[Agendar] │  │[Agendar] │  │[Agendar] │   │
│  └──────────┘  └──────────┘  └──────────┘   │
├──────────────────────────────────────────────┤
│  SOBRE  (Grid 1→2 colunas no tablet)         │
│  [ Imagem / 💈 ]   [H2: Sobre a Barbearia]  │
│                    [Texto + lista ✔]         │
├──────────────────────────────────────────────┤
│  FOOTER / CONTATO  (Grid 1→2→3 colunas)      │
│  📍 Endereço        Horários    Redes sociais │
│  📞 Telefone        Seg–Sex 9h  Instagram    │
│  ✉ E-mail          Sáb 9h–17h  Facebook     │
│                    Dom: Fechado WhatsApp     │
│  ─────────────────────────────────────────── │
│              © 2025 Barbearia Clássica        │
└──────────────────────────────────────────────┘
```

---

### Sistema de Cores

| Token | Valor | Uso |
|---|---|---|
| `--color-accent` | `#c9a84c` | Dourado — CTAs e destaques |
| `--color-bg` | `#111111` | Fundo da página |
| `--color-surface` | `#1e1e1e` | Header e footer |
| `--color-surface-alt` | `#252525` | Cards |
| `--color-text` | `#f0f0f0` | Texto principal |
| `--color-text-muted` | `#aaaaaa` | Texto secundário |
| `--color-border` | `#333333` | Bordas e divisores |

Contraste `#c9a84c` sobre `#111111` → razão **≥ 6:1** — aprovado no **WCAG AA e AAA**.

---

### Escala Tipográfica (Major Third — razão 1.250)

| Token | Tamanho | Uso |
|---|---|---|
| `--font-xs` | 0.640rem | Badges, labels |
| `--font-sm` | 0.800rem | Nav links, metadados |
| `--font-base` | 1.000rem | Corpo do texto |
| `--font-md` | 1.250rem | Subtítulos |
| `--font-lg` | 1.563rem | H3, títulos de cards |
| `--font-xl` | 1.953rem | H2, títulos de seção |
| `--font-2xl` | 2.441rem | H1 |
| `--font-3xl` | 3.052rem | Hero display |

**Famílias:** `Poppins` (headings) + `Inter` (corpo) via Google Fonts.

---

### Arquitetura CSS — ITCSS

```
css/
├── variables.css        ← Custom Properties (cores, tipografia, espaçamento)
├── reset.css            ← Modern CSS Reset (Andy Bell, 2024)
├── base.css             ← Elementos HTML sem classes (h1-h6, a, ul...)
├── layout.css           ← Container e wrappers de página
├── utilities.css        ← Botões, destaque, títulos de seção
└── components/
    ├── nav.css          ← Header, logo, nav, hamburger
    ├── hero.css         ← Seção hero
    ├── card.css         ← Grid de serviços e cards
    ├── sobre.css        ← Seção sobre
    └── footer.css       ← Footer, horário, redes sociais
```

---

## Critérios Atendidos (Etapa 1)

- Layout responsivo em 3 breakpoints: mobile `<480px`, tablet `≥768px`, desktop `≥1024px`
- Flexbox no header e componentes
- CSS Grid com `auto-fit/minmax` nos cards de serviços
- Tipografia fluida com `clamp()`
- Variáveis CSS para cores e espaçamentos
- Mobile-First com `min-width`
- Acessibilidade: contraste WCAG AA, `alt` em imagens, `:focus-visible`
- Hamburguer menu em CSS puro
- `prefers-reduced-motion` e `prefers-color-scheme`
- Sem `!important`, sem estilos inline, sem larguras fixas em px

## Critérios Atendidos (Etapa 2)

- Definição do Problema documentada (contexto, público-alvo, dor, critério de sucesso)
- Wireframe ASCII da estrutura completa da página
- Arquitetura de Informação — hierarquia de headings correta (H1→H2→H3)
- Escala tipográfica modular (Major Third 1.250) com variáveis CSS
- Sistema de cores semântico com paleta primitiva + roles (`--color-bg`, `--color-surface`...)
- Google Fonts: Poppins (headings) + Inter (corpo) com `font-weight` 400/500/700
- Modern CSS Reset (Andy Bell, 2024) em arquivo dedicado
- Organização ITCSS em 5 camadas + pasta `components/`
- Nomenclatura BEM consistente em todos os componentes
- `--leading-tight`, `--leading-normal`, `--leading-loose` para controle de entrelinhamento

---

## Etapa 3 — Componentes e Padronização

### Estrutura Semântica da Página

A aplicação foi reorganizada utilizando componentes reutilizáveis e estrutura semântica baseada em HTML5:

- `<header>` → Navbar principal e navegação
- `<main>` → Conteúdo central da landing page
- `<section>` → Agrupamento das áreas funcionais
- `<article>` → Cards de serviços
- `<footer>` → Informações de contato e redes sociais

A hierarquia visual e semântica foi mantida utilizando headings organizados em ordem lógica:

```html
<h1> → título principal da hero section
<h2> → títulos das seções
<h3> → títulos dos cards

### Navbar Responsiva

A navegação foi construída seguindo a metodologia BEM e comportamento Mobile-First.

Funcionalidades implementadas
Menu horizontal em desktop
Hamburger menu abaixo de 768px
Toggle via JavaScript
Fechamento automático ao pressionar Escape
Estados de hover e :focus-visible
Header com suporte a scroll (.header--scrolled)
Estrutura BEM
<header class="header">
  <nav class="nav">
    <a class="nav__logo">Barbearia Clássica</a>

    <button class="nav__toggle">
      ☰
    </button>

    <ul class="nav__menu">
      <li class="nav__item">
        <a class="nav__link">Serviços</a>
      </li>
    </ul>
  </nav>
</header>

### Sistema de Cards

Os serviços da barbearia foram organizados utilizando CSS Grid responsivo.

Características
Grid Mobile-First
1 coluna no mobile
2 colunas em tablets
3 colunas em desktop
Hover com elevação e sombra
Variante .card--featured
Estrutura BEM

<html>
<article class="card card--featured">
  <h3 class="card__title">Combo Completo</h3>

  <p class="card__description">
    Corte + barba + acabamento premium.
  </p>

  <a class="btn btn--primary">
    Agendar
  </a>
</article>

### Footer Responsivo

O footer foi construído utilizando CSS Grid com adaptação automática para diferentes larguras de tela.

Conteúdo
Endereço
Horários de funcionamento
Redes sociais
Telefone e e-mail
Recursos implementados
Grid responsivo 1 → 2 → 3 colunas
Fundo escuro com contraste AA
Links acessíveis
Copyright automático via JavaScript

### Padronização de Classes — BEM

Todo o projeto segue a convenção BEM (Block Element Modifier).

Estrutura utilizada
.block {}
.block__element {}
.block--modifier {}
Exemplos reais do projeto
.nav {}
.nav__menu {}
.nav__link {}
CSS
.card {}
.card__title {}
.card--featured {}

.footer {}
.footer__column {}

Benefícios obtidos:

Maior organização
Reutilização de componentes
Facilidade de manutenção
CSS escalável
Redução de conflitos entre estilos

### itcss

css/
├── variables.css
├── reset.css
├── base.cssSSSSS
├── utilities.css
└── components/
    ├── navbar.css
    ├── hero.css
    ├── card.css
    ├── btn.css
    ├── sobre.css
    └── footer.css

### JavaScript

O arquivo js/main.js centraliza os comportamentos interativos da interface.

Funcionalidades
Toggle do hamburger menu
Fechamento do menu com Escape
Atualização automática do ano no footer
Header dinâmico durante o scroll
Exemplo
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navMenu.classList.remove("active");
  }
});

### Critérios Atendidos (Etapa 3)
- Navbar responsiva com hamburger menu
- Toggle do menu via JavaScript
- Fechamento do menu com tecla Escape
- Header com efeito de scroll
- Cards reutilizáveis com variante .card--featured
- CSS Grid responsivo (1→2→3 colunas)
- Footer responsivo com grid adaptável
- Organização ITCSS completa
- Metodologia BEM aplicada em todos os componentes
- Componente de botões reutilizáveis (btn.css)
- Estados acessíveis com :focus-visible
- JavaScript separado em js/main.js
- Semântica HTML5 aplicada corretamente
- Mobile-First utilizando min-width
- Sem uso de frameworks externos