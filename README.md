# Barbearia Clássica — Landing Page

Projeto desenvolvido para a disciplina **Aplicações para Internet** (2ª Avaliação).

**Trio:** Gabriel Guilherme Gomes, Anita Alves e Maria Mariah Queiroga 

---

## Sobre o Projeto

Landing page de uma barbearia moderna com design escuro e acento dourado.
Apresenta os serviços (corte, barba e combo), seção sobre a barbearia e informações de contato.

## Como Executar

Abra o arquivo `index.html` diretamente no navegador, ou acesse o site publicado:

🔗 **[Ver projeto online]([https://anitandonato/barbearia-classica/](https://anitandonato.github.io/projeto-aplicacoes-para-internet/))**

## Screenshots

| Mobile (375px) | Tablet (768px) | Desktop (1280px) |
|:-:|:-:|:-:|
 <img width="250" alt="Mobile 375px" src="https://github.com/user-attachments/assets/4290eaaf-6214-4f29-9e0b-57c91e8ccfc7" /> | <img width="250" alt="Tablet 768px" src="https://github.com/user-attachments/assets/b8f8d593-ad41-46a4-9adb-87302bb6a3e2" /> | <img width="250" alt="Desktop 1280px" src="https://github.com/user-attachments/assets/16deaec0-54f8-4c2a-be9f-f90c352b47ad" /> |


## Tecnologias

- **HTML5** — estrutura semântica (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3** — Flexbox, CSS Grid, Media Queries Mobile-First, Variáveis CSS, `clamp()`
- Sem frameworks ou bibliotecas externas

## Critérios Atendidos (Etapa 1)

- Layout responsivo em 3 breakpoints: mobile `<480px`, tablet `≥768px`, desktop `≥1024px`
- Flexbox no header e componentes
- CSS Grid com `auto-fit/minmax` nos cards de serviços
- Tipografia fluida com `clamp()`
-  Variáveis CSS para cores e espaçamentos
- Mobile-First com `min-width`
- Acessibilidade: contraste WCAG AA, `alt` em imagens, `:focus-visible`
- amburguer menu em CSS puro
- `prefers-reduced-motion` e `prefers-color-scheme`
- Sem `!important`, sem estilos inline, sem larguras fixas em px
