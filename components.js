// ── INJECT FAVICON ────────────────────────────────────────────
(function() {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = 'favicon.svg';
  document.head.appendChild(link);
})();

// ── NAV ───────────────────────────────────────────────────────
const NAV_HTML = `
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-mark">
        <svg viewBox="0 0 24 24" fill="none">
          <defs><style>
            .rl{animation:rocketLaunch 2s ease-in-out infinite;transform-origin:12px 12px}
            .rf{animation:rocketFlame .35s ease-in-out infinite alternate;transform-origin:12px 17px}
            @keyframes rocketLaunch{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
            @keyframes rocketFlame{0%{transform:scaleY(1)}100%{transform:scaleY(1.4) scaleX(.8)}}
          </style></defs>
          <g class="rl">
            <ellipse cx="12" cy="10" rx="3" ry="5.5" fill="white" opacity=".95"/>
            <path d="M12 3.5C10.5 6 9.5 7.5 9.5 9.5L14.5 9.5C14.5 7.5 13.5 6 12 3.5Z" fill="#ddd6fe"/>
            <path d="M9.5 12L6.5 16L9.5 15Z" fill="#c084fc"/>
            <path d="M14.5 12L17.5 16L14.5 15Z" fill="#c084fc"/>
            <circle cx="12" cy="9.5" r="1.5" fill="#7c3aed"/>
            <circle cx="12" cy="9.5" r=".8" fill="#ede9fe"/>
          </g>
          <g class="rf">
            <ellipse cx="12" cy="17" rx="2.2" ry="3" fill="#f59e0b" opacity=".9"/>
            <ellipse cx="12" cy="17" rx="1.2" ry="2" fill="#fef3c7"/>
          </g>
        </svg>
      </div>
      digit<span class="logo-up">UP</span>
    </a>
    <div class="nav-links">
      <a href="index.html" class="nav-link">Início</a>
      <a href="servicos.html" class="nav-link">Serviços</a>
      <a href="comecar.html" class="nav-link">Começar</a>
      <a href="planos.html" class="nav-link">Planos</a>
      <a href="vip.html" class="nav-link">VIP</a>
      <a href="sobre.html" class="nav-link">Sobre</a>
      <a href="contato.html" class="nav-link">Contato</a>
    </div>
    <div class="nav-ctas">
      <a href="planos.html" class="btn btn-primary btn-sm">Começar Agora</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html" class="nav-link" onclick="closeMobile()">Início</a>
  <a href="servicos.html" class="nav-link" onclick="closeMobile()">Serviços</a>
  <a href="comecar.html" class="nav-link" onclick="closeMobile()">Começar</a>
  <a href="planos.html" class="nav-link" onclick="closeMobile()">Planos</a>
  <a href="vip.html" class="nav-link" onclick="closeMobile()">VIP</a>
  <a href="sobre.html" class="nav-link" onclick="closeMobile()">Sobre</a>
  <a href="contato.html" class="nav-link" onclick="closeMobile()">Contato</a>
  <a href="planos.html" class="btn btn-primary" onclick="closeMobile()">Começar Agora</a>
</div>`;

// ── FOOTER ────────────────────────────────────────────────────
const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="footer-logo">
        <div class="nav-logo-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        digit<span class="logo-up">UP</span>
      </div>
      <p>Agência de marketing digital fundada em 2023, especializada em escalar negócios com estratégias comprovadas e resultados mensuráveis.</p>
      <div class="footer-social">
        <a class="social-btn" href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a class="social-btn" href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
        <a class="social-btn" href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
        <a class="social-btn" href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Produtos</h4>
      <a href="servicos.html">Método digitUP</a>
      <a href="servicos.html">Método Dominar</a>
      <a href="planos.html">Planos Empresariais</a>
      <a href="vip.html">Grupo VIP</a>
    </div>
    <div class="footer-col">
      <h4>Empresa</h4>
      <a href="sobre.html">Sobre Nós</a>
      <a href="comecar.html">Começar</a>
      <a href="contato.html">Contato</a>
    </div>
    <div class="footer-col">
      <h4>Suporte</h4>
      <a href="mailto:teamdigitup@gmail.com">teamdigitup@gmail.com</a>
      <a href="https://wa.me/5511993353331" target="_blank">(11) 99335-3331</a>
      <a href="#">Termos de Uso</a>
      <a href="#">Privacidade</a>
    </div>
  </div>
  <div class="divider"></div>
  <div class="footer-bottom container">
    <p>© 2025 digitUP Agency. Todos os direitos reservados.</p>
    <div class="footer-certifications">
      <span class="cert-badge">Fundada em 2023</span>
      <span class="cert-badge">R$3M+ Gerados</span>
      <span class="cert-badge">+500 Clientes</span>
    </div>
    <div class="footer-bottom-links">
      <a href="#">Termos</a>
      <a href="#">Privacidade</a>
    </div>
  </div>
</footer>`;

// ── MODAL ─────────────────────────────────────────────────────
const MODAL_HTML = `
<div class="modal-overlay" id="modalOverlay">
  <div class="modal-box">
    <button class="modal-x" onclick="closeModal()">✕</button>

    <div class="modal-panel" id="panel-register">
      <div class="modal-logo">
        <div class="nav-logo-mark" style="width:28px;height:28px">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        digit<span class="logo-up">UP</span>
      </div>
      <div class="modal-title">Diagnóstico Gratuito</div>
      <div class="modal-sub">Fale com um especialista hoje</div>
      <form onsubmit="handleDiagnostico(event)">
        <div class="field-row">
          <div class="field"><label>Nome</label><input type="text" id="diag-nome" placeholder="João" required/></div>
          <div class="field"><label>Sobrenome</label><input type="text" id="diag-sob" placeholder="Silva" required/></div>
        </div>
        <div class="field"><label>E-mail</label><input type="email" id="diag-email" placeholder="seu@email.com" required/></div>
        <div class="field"><label>WhatsApp</label><input type="tel" id="diag-tel" placeholder="+55 (11) 99999-9999" required/></div>
        <div class="field"><label>Segmento</label>
          <select id="diag-seg"><option value="">Selecione...</option><option>E-commerce</option><option>Serviços</option><option>Saúde</option><option>Educação</option><option>Imóveis</option><option>Outro</option></select>
        </div>
        <button type="submit" class="submit-btn" style="background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;gap:8px">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          Enviar pelo WhatsApp
        </button>
      </form>
    </div>

    <div class="modal-panel" id="panel-checkout" style="display:none">
      <div class="modal-logo">
        <div class="nav-logo-mark" style="width:28px;height:28px">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        digit<span class="logo-up">UP</span>
      </div>
      <div class="modal-title">Contratar via PIX</div>
      <div class="modal-sub">Pagamento seguro pelo WhatsApp</div>
      <div id="selectedPlan" style="background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.2);border-radius:9px;padding:12px 14px;margin-bottom:18px;font-size:.85rem;color:var(--text)"></div>
      <div style="background:rgba(74,222,128,.05);border:1px solid rgba(74,222,128,.15);border-radius:10px;padding:16px;margin-bottom:18px">
        <div style="font-size:.78rem;font-weight:700;color:#4ade80;margin-bottom:10px">Como funciona</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;gap:8px;font-size:.78rem;color:var(--muted)"><span style="width:18px;height:18px;background:var(--purple);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:800;color:#fff;flex-shrink:0">1</span>Clique em "Falar no WhatsApp" abaixo</div>
          <div style="display:flex;gap:8px;font-size:.78rem;color:var(--muted)"><span style="width:18px;height:18px;background:var(--purple);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:800;color:#fff;flex-shrink:0">2</span>Nossa equipe confirma os detalhes</div>
          <div style="display:flex;gap:8px;font-size:.78rem;color:var(--muted)"><span style="width:18px;height:18px;background:var(--purple);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:800;color:#fff;flex-shrink:0">3</span>Enviamos a chave PIX com segurança</div>
          <div style="display:flex;gap:8px;font-size:.78rem;color:var(--muted)"><span style="width:18px;height:18px;background:var(--purple);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:800;color:#fff;flex-shrink:0">4</span>Confirmamos e iniciamos o serviço</div>
        </div>
      </div>
      <button class="submit-btn" id="whatsappPayBtn" onclick="goToWhatsApp()" style="background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;gap:10px">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
        Falar no WhatsApp e Pagar via PIX
      </button>
      <p style="text-align:center;font-size:.7rem;color:var(--muted);margin-top:10px">Somente PIX · Sem cartão</p>
    </div>
  </div>
</div>
<div id="toast"></div>`;

// ── INJECT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const navSlot = document.getElementById('nav-slot');
  if (navSlot) navSlot.outerHTML = NAV_HTML;
  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
  const modalSlot = document.getElementById('modal-slot');
  if (modalSlot) modalSlot.outerHTML = MODAL_HTML;

  // Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Hamburger — init AFTER nav is injected
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.innerHTML = isOpen
        ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
