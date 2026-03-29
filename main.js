// ═══════════════════════════════════════════════════════════════
// digitUP — main.js
// ═══════════════════════════════════════════════════════════════

// ── NAV SCROLL ────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── ACTIVE NAV LINK ───────────────────────────────────────────
(function() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// closeMobile used by nav links onclick
window.closeMobile = function() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if (menu) menu.classList.remove('open');
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  }
};

// ── SMOOTH SCROLL ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); closeMobile(); }
  });
});

// ── REVEAL ON SCROLL ──────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── COUNTER ANIMATION ─────────────────────────────────────────
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.stat-num[data-target]').forEach(el => {
      const raw = el.dataset.target;
      const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
      const prefix = raw.match(/^[^0-9]*/)?.[0] || '';
      const suffix = raw.match(/[^0-9.]+$/)?.[0] || '';
      let start = 0;
      const step = num / 60;
      const tick = () => {
        start = Math.min(start + step, num);
        el.textContent = prefix + (Number.isInteger(num) ? Math.floor(start) : start.toFixed(1)) + suffix;
        if (start < num) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    counterObs.unobserve(entry.target);
  });
}, { threshold: 0.3 });
document.querySelectorAll('.stats-grid').forEach(el => counterObs.observe(el));

// ── MODAL ─────────────────────────────────────────────────────
function openModal(type, planName, planPrice) {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  document.querySelectorAll('.modal-panel').forEach(p => p.style.display = 'none');
  const panel = document.getElementById('panel-' + (type === 'login' ? 'register' : type));
  if (panel) panel.style.display = 'block';
  if (type === 'checkout' && planName) {
    const el = document.getElementById('selectedPlan');
    if (el) el.innerHTML =
      '<div style="display:flex;align-items:center;gap:8px">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple2)" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' +
        '<span>Plano selecionado: <strong style="color:var(--purple2)">' + planName + '</strong> — <strong style="color:var(--purple2)">' + planPrice + '</strong></span>' +
      '</div>';
    // Store for WhatsApp redirect
    window._selectedPlanName = planName;
    window._selectedPlanPrice = planPrice;
    // Update WhatsApp button message
    const btn = document.getElementById('whatsappPayBtn');
    if (btn) btn.onclick = () => goToWhatsApp(planName, planPrice);
  }
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}
window.openModal = openModal;
window.closeModal = closeModal;

document.addEventListener('click', e => {
  const overlay = document.getElementById('modalOverlay');
  if (overlay && e.target === overlay) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── WHATSAPP PIX REDIRECT ─────────────────────────────────────
function goToWhatsApp(planName, planPrice) {
  const name = planName || window._selectedPlanName || 'Plano';
  const price = planPrice || window._selectedPlanPrice || '';
  const msg = encodeURIComponent(
    'Olá! Tenho interesse em contratar o ' + name + (price ? ' (' + price + ')' : '') + ' da digitUP.\n\n' +
    'Gostaria de confirmar os detalhes e realizar o pagamento via PIX. Pode me ajudar?'
  );
  window.open('https://wa.me/5511993353331?text=' + msg, '_blank');
  closeModal();
}
window.goToWhatsApp = goToWhatsApp;


function handleForm(e, msg) {
  e.preventDefault();
  closeModal();
  showToast(msg);
}
window.handleForm = handleForm;

function handleDiagnostico(e) {
  e.preventDefault();
  const nome = ((document.getElementById('diag-nome')?.value || '') + ' ' + (document.getElementById('diag-sob')?.value || '')).trim();
  const email = document.getElementById('diag-email')?.value || '';
  const tel = document.getElementById('diag-tel')?.value || '';
  const seg = document.getElementById('diag-seg')?.value || '';
  const texto = [
    'Olá! Quero um diagnóstico gratuito da digitUP.',
    '',
    nome ? 'Nome: ' + nome : '',
    email ? 'E-mail: ' + email : '',
    tel ? 'WhatsApp: ' + tel : '',
    seg ? 'Segmento: ' + seg : '',
  ].filter(Boolean).join('\n');
  window.open('https://wa.me/5511993353331?text=' + encodeURIComponent(texto), '_blank');
  closeModal();
}
window.handleDiagnostico = handleDiagnostico;

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}
window.showToast = showToast;

// ── HERO LIVE COUNTER ─────────────────────────────────────────
const heroMetric = document.getElementById('heroMetric');
if (heroMetric) {
  let val = 84320;
  setInterval(() => {
    val += Math.floor(Math.random() * 400 + 100);
    heroMetric.textContent = 'R$ ' + val.toLocaleString('pt-BR');
  }, 3000);
}
