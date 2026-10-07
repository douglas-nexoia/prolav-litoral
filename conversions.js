/**
 * conversions.js â€” Motor de Rastreamento Google Ads & OCT (Offline Conversion Tracking)
 * ProLav Litoral AssistÃªncia TÃ©cnica Â· PadrÃ£o AgÃªncia 2026
 *
 * - Google Ads Direct Tag (gtag.js) com Zero TBT
 * - Captura e persistÃªncia de trÃ¡fego pago (gclid, wbraid, gbraid, _gcl_aw) por 30 dias
 * - GeraÃ§Ã£o e idempotÃªncia de protocolo #PL-XXXX (Base32 sem ambiguidade)
 * - Disparo sÃ­ncrono para Supabase Edge Function via navigator.sendBeacon
 * - Conformidade com Webhook CRM Iara (frase Ã¢ncora literal obrigatÃ³ria)
 * - Rastreamento de chamadas telefÃ´nicas (data-track="phone")
 */

(function () {
  'use strict';

  // 1. IDENTIFICADORES OFICIAIS (Briefing Oficial ProLav Litoral)
  const GOOGLE_ADS_ID = 'AW-18439155671';
  const GOOGLE_ADS_WHATSAPP_CONVERSION = 'AW-18439155671/2_aeCKmL2fEcENffvNhE';
  const GOOGLE_ADS_PHONE_CONVERSION = 'AW-18439155671/ENbgCNuQ2fEcENffvNhE';
  const WHATSAPP_NUMBER = '5513992095947';
  const EMPRESA_PREFIX = 'PL';
  const ENDPOINT_REGISTRO_CLIQUE = 'https://hrobytuiaxoflsezgpce.supabase.co/functions/v1/registrar-clique-ads';

  // Alfabeto Base32 de 31 caracteres sem ambiguidade (sem 0/O e sem 1/I/L)
  const CHARSET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';

  // Mensagens contextuais com a frase âncora mandatória da agência e CRM Iara:
  // "vim pelo site, gostaria de um atendimento"
  const MESSAGES = {
    home: 'Olá! Vim pelo site, gostaria de um atendimento para Lava e Seca na Baixada Santista.',
    conserto: 'Olá! Vim pelo site, gostaria de um atendimento para conserto de Lava e Seca.',
    instalacao: 'Olá! Vim pelo site, gostaria de um atendimento para instalação de Lava e Seca.',
    higienizacao: 'Olá! Vim pelo site, gostaria de um atendimento para higienização de Lava e Seca.'
  };

  // 2. UTILITÃRIOS DE COOKIES & STORAGE (RetenÃ§Ã£o de 30 dias)
  function setCookie(name, val, days = 30) {
    try {
      const exp = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${name}=${encodeURIComponent(val)};expires=${exp};path=/;SameSite=Lax`;
    } catch (e) {}
  }

  function getCookie(name) {
    try {
      const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
      return match ? decodeURIComponent(match[1]) : null;
    } catch (e) {
      return null;
    }
  }

  // Fallback nativo do Google Ads (_gcl_aw)
  function getGclAw() {
    const raw = getCookie('_gcl_aw');
    if (!raw) return null;
    const parts = raw.split('.');
    if (parts.length >= 3) {
      return parts.slice(2).join('.');
    }
    return null;
  }

  // 3. CAPTURA E PERSISTÃŠNCIA DOS PARÃ‚METROS DE ATRIBUIÃ‡ÃƒO
  const params = new URLSearchParams(window.location.search);
  const queryGclid = params.get('gclid');
  const queryWbraid = params.get('wbraid');
  const queryGbraid = params.get('gbraid');

  if (queryGclid) setCookie('_gclid', queryGclid);
  if (queryWbraid) setCookie('_wbraid', queryWbraid);
  if (queryGbraid) setCookie('_gbraid', queryGbraid);

  const activeGclid = queryGclid || getCookie('_gclid') || getGclAw() || null;
  const activeWbraid = queryWbraid || getCookie('_wbraid') || null;
  const activeGbraid = queryGbraid || getCookie('_gbraid') || null;

  const hasAdsTraffic = Boolean(activeGclid || activeWbraid || activeGbraid);

  // 4. PROTOCOLO IDEMPOTENTE (#PL-XXXX)
  function getOrGenerateProtocol() {
    if (!hasAdsTraffic) {
      return null;
    }

    try {
      const sessionSaved = sessionStorage.getItem('oct_protocol');
      if (sessionSaved && sessionSaved.startsWith(`#${EMPRESA_PREFIX}-`)) {
        return sessionSaved;
      }
    } catch (e) {}

    const cookieSaved = getCookie('_oct_code');
    if (cookieSaved && cookieSaved.startsWith(`#${EMPRESA_PREFIX}-`)) {
      try {
        sessionStorage.setItem('oct_protocol', cookieSaved);
      } catch (e) {}
      return cookieSaved;
    }

    let code = '';
    for (let i = 0; i < 4; i++) {
      code += CHARSET.charAt(Math.floor(Math.random() * CHARSET.length));
    }
    const newProtocol = `#${EMPRESA_PREFIX}-${code}`;

    try {
      sessionStorage.setItem('oct_protocol', newProtocol);
    } catch (e) {}
    setCookie('_oct_code', newProtocol, 30);

    return newProtocol;
  }

  // 5. DETECTAR ROTA PADRÃƒO
  function detectDefaultService() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('conserto') || path.includes('reparo')) return 'conserto';
    if (path.includes('instalacao')) return 'instalacao';
    if (path.includes('higienizacao') || path.includes('limpeza')) return 'higienizacao';
    return 'home';
  }

  // 6. MANIPULADOR DE CLIQUE DO WHATSAPP (SÃ­ncrono + sendBeacon)
  function handleWhatsAppClick(serviceType, customText) {
    const sType = serviceType || detectDefaultService();
    const baseText = customText || MESSAGES[sType] || MESSAGES.home;
    const protocol = getOrGenerateProtocol();

    const fullMessage = protocol ? `${baseText} ${protocol}` : baseText;

    if (hasAdsTraffic && protocol) {
      const nav = typeof window !== 'undefined' && window.navigator ? window.navigator : (typeof navigator !== 'undefined' ? navigator : null);
      const userAgent = nav ? nav.userAgent : '';
      const payload = JSON.stringify({
        empresa: EMPRESA_PREFIX,
        codigo: protocol,
        gclid: activeGclid,
        wbraid: activeWbraid,
        gbraid: activeGbraid,
        url_origem: window.location.href,
        user_agent: userAgent,
        criado_em: new Date().toISOString()
      });

      let sent = false;
      if (nav && typeof nav.sendBeacon === 'function') {
        try {
          const blob = new Blob([payload], { type: 'application/json' });
          sent = nav.sendBeacon(ENDPOINT_REGISTRO_CLIQUE, blob);
        } catch (e) {
          sent = false;
        }
      }

      if (!sent && typeof fetch === 'function') {
        try {
          fetch(ENDPOINT_REGISTRO_CLIQUE, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
            keepalive: true
          }).catch(() => {});
        } catch (e) {}
      }
    }

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'conversion', {
          send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
          value: 1.0,
          currency: 'BRL',
          transaction_id: protocol || undefined
        });
      } catch (err) {
        console.error('Erro ao reportar conversao Google Ads WhatsApp:', err);
      }
    }

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  // 7. MANIPULADOR DE CLIQUE DO TELEFONE
  function handlePhoneClick() {
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'conversion', {
          send_to: GOOGLE_ADS_PHONE_CONVERSION
        });
      } catch (err) {
        console.error('Erro ao reportar conversao Google Ads Telefone:', err);
      }
    }
  }

  // 8. BINDINGS DE EVENTOS NO DOM
  function initTracking() {
    document.querySelectorAll('[data-track="whatsapp"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const service = el.getAttribute('data-service') || detectDefaultService();
        handleWhatsAppClick(service);
      });
    });

    document.querySelectorAll('[data-track="phone"], a[href^="tel:"]').forEach((el) => {
      el.addEventListener('click', () => {
        handlePhoneClick();
      });
    });

    const quickForm = document.getElementById('quick-form');
    if (quickForm) {
      quickForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('form-name');
        const neighInput = document.getElementById('form-neighborhood');
        const name = nameInput ? nameInput.value.trim() : '';
        const neighborhood = neighInput ? neighInput.value.trim() : '';
        const deviceSelected =
          document.querySelector('input[name="device"]:checked')?.value || 'Lava e Seca';

        const msg = `Olá! Vim pelo site, gostaria de um atendimento. Meu nome é ${name}, moro em ${neighborhood} e preciso de atendimento para ${deviceSelected}.`;
        handleWhatsAppClick(detectDefaultService(), msg);
      });
    }

    document.querySelectorAll('.faq-item').forEach((item) => {
      item.addEventListener('click', () => {
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracking);
  } else {
    initTracking();
  }

  window.ProLavTracking = {
    GOOGLE_ADS_ID,
    GOOGLE_ADS_WHATSAPP_CONVERSION,
    GOOGLE_ADS_PHONE_CONVERSION,
    WHATSAPP_NUMBER,
    EMPRESA_PREFIX,
    ENDPOINT_REGISTRO_CLIQUE,
    handleWhatsAppClick,
    handlePhoneClick,
    getOrGenerateProtocol
  };
})();
