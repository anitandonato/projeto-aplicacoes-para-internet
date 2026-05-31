/* === SCROLL REVEAL === */
(function () {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
})();

/* === LINK ATIVO NA NAVEGAÇÃO === */
(function () {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      const isCta = link.classList.contains('nav__link--cta');
      link.classList.toggle('nav__link--ativo', isActive && !isCta);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => observer.observe(section));
})();

/* === STATUS DE FUNCIONAMENTO === */
(function () {
  const el = document.getElementById('status-funcionamento');
  if (!el) return;

  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();

  // null = fechado o dia todo; [abertura, fechamento] em minutos desde meia-noite
  const schedules = [
    null,               // Dom
    [9 * 60, 19 * 60], // Seg
    [9 * 60, 19 * 60], // Ter
    [9 * 60, 19 * 60], // Qua
    [9 * 60, 19 * 60], // Qui
    [9 * 60, 19 * 60], // Sex
    [9 * 60, 17 * 60], // Sáb
  ];

  const schedule = schedules[day];
  const isOpen = schedule !== null && mins >= schedule[0] && mins < schedule[1];

  el.textContent = isOpen ? 'Aberto agora' : 'Fechado agora';
  el.className = `status-badge status-badge--${isOpen ? 'aberto' : 'fechado'}`;
  el.setAttribute('aria-label', isOpen ? 'Aberto agora' : 'Fechado agora');
})();

/* === ANO NO RODAPÉ === */
(function () {
  const el = document.querySelector('.footer__ano');
  if (el) el.textContent = new Date().getFullYear();
})();

/* === FORMULÁRIO DE AGENDAMENTO === */
(function () {
  const form = document.querySelector('.agendamento__form');
  const dataInput = document.getElementById('data');

  // Bloqueia datas passadas no campo de data
  if (dataInput) {
    dataInput.setAttribute('min', new Date().toISOString().split('T')[0]);
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const nome = (document.getElementById('nome').value.trim().split(' ')[0]) || 'cliente';

    form.innerHTML = `
      <div class="form__sucesso" role="status" aria-live="polite">
        <span class="form__sucesso-icone" aria-hidden="true">✅</span>
        <h3 class="form__sucesso-titulo">Pedido recebido, ${nome}!</h3>
        <p>Entraremos em contato pelo telefone informado para confirmar seu agendamento.</p>
      </div>
    `;
  });
})();
