// Módulo centralizado de rastreamento de conversões Google Ads e contatos — ProLav Litoral
export const WHATSAPP_NUMBER = "5513992095947";
export const DISPLAY_PHONE = "(13) 99209-5947";
export const TEL_LINK = "tel:13992095947";

export const GOOGLE_ADS_ID = "AW-18439155671";
export const GOOGLE_ADS_WHATSAPP_CONVERSION = "AW-18439155671/2_aeCKmL2fEcENffvNhE";
export const GOOGLE_ADS_PHONE_CONVERSION = "AW-18439155671/ENbgCNuQ2fEcENffvNhE";

/**
 * URL do endpoint no CRM / backend para registro do clique do Google Ads.
 */
export const ENDPOINT_REGISTRO_CLIQUE = "https://hrobytuiaxoflsezgpce.supabase.co/functions/v1/registrar-clique-ads";

// Alfabeto Base32 sem ambiguidade (31 caracteres: 8 dígitos + 23 letras, sem 0/O, 1/I/L)
const CHARSET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

export const DEFAULT_WHATSAPP_MESSAGE = "Olá! Vim pelo site, gostaria de um atendimento.";

export const WHATSAPP_MESSAGES = {
  home: "Olá! Vim pelo site, gostaria de um atendimento.",
  conserto: "Olá! Vim pelo site, gostaria de um atendimento para conserto de Lava e Seca.",
  higienizacao: "Olá! Vim pelo site, gostaria de um atendimento para higienização de Lava e Seca.",
  instalacao: "Olá! Vim pelo site, gostaria de um atendimento para instalação de Lava e Seca.",
} as const;

export type ServiceType = keyof typeof WHATSAPP_MESSAGES;

export interface TrafficAttribution {
  codigo: string;
  gclid: string | null;
  wbraid: string | null;
  gbraid: string | null;
  timestamp: string;
}

/**
 * Lê um cookie específico pelo nome
 */
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Grava um cookie com tempo de expiração em dias
 */
function setCookie(name: string, value: string, days = 30): void {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

/**
 * Extrai o GCLID do cookie nativo do Google Ads (_gcl_aw) se presente
 * Formato padrão: GCL.1712345678.EAIaIQob...
 */
function getGclAwCookie(): string | null {
  const raw = getCookie("_gcl_aw");
  if (!raw) return null;
  const parts = raw.split(".");
  return parts.length >= 3 ? parts.slice(2).join(".") : raw;
}

/**
 * Gera o código alfanumérico no padrão "#PL-XXXX" com alfabeto sem caracteres ambíguos
 */
export function generateProtocolCode(): string {
  let randomPart = "";
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * CHARSET.length);
    randomPart += CHARSET[index];
  }
  return `#PL-${randomPart}`;
}

const STORAGE_KEY = "prolav_traffic_attr";

/**
 * Obtém ou inicializa a atribuição de tráfego (GCLID, WBRAID, GBRAID e Código #PL-XXXX).
 * Persiste em sessionStorage e cookies (30 dias) para retenção entre navegações pelas páginas do site.
 */
export function getTrafficAttribution(): TrafficAttribution | null {
  if (typeof window === "undefined") return null;

  // 1. Verificar se já temos armazenado na sessão atual
  let storedJson = sessionStorage.getItem(STORAGE_KEY);
  if (!storedJson) {
    storedJson = getCookie(STORAGE_KEY);
  }

  let stored: TrafficAttribution | null = null;
  if (storedJson) {
    try {
      stored = JSON.parse(storedJson) as TrafficAttribution;
    } catch {
      stored = null;
    }
  }

  // 2. Checar parâmetros da URL atual
  const searchParams = new URLSearchParams(window.location.search);
  const urlGclid = searchParams.get("gclid");
  const urlWbraid = searchParams.get("wbraid");
  const urlGbraid = searchParams.get("gbraid");
  const cookieGclid = getGclAwCookie();

  const gclid = urlGclid || (stored?.gclid ?? null) || cookieGclid;
  const wbraid = urlWbraid || (stored?.wbraid ?? null);
  const gbraid = urlGbraid || (stored?.gbraid ?? null);

  const hasPaidTraffic = Boolean(gclid || wbraid || gbraid);

  if (!hasPaidTraffic) {
    return null;
  }

  // Reutiliza o código existente da sessão para manter idempotência, ou gera um novo
  const codigo = stored?.codigo || generateProtocolCode();

  const attribution: TrafficAttribution = {
    codigo,
    gclid: gclid || null,
    wbraid: wbraid || null,
    gbraid: gbraid || null,
    timestamp: stored?.timestamp || new Date().toISOString(),
  };

  // Salvar no sessionStorage e cookie
  try {
    const serialized = JSON.stringify(attribution);
    sessionStorage.setItem(STORAGE_KEY, serialized);
    setCookie(STORAGE_KEY, serialized, 30);
  } catch {
    // Silently ignore storage quota errors
  }

  return attribution;
}

/**
 * Gera a URL do WhatsApp com a mensagem contextual por serviço.
 * Se o visitante veio via anúncio pago (Google Ads), anexa o protocolo "#PL-XXXX".
 * Se o visitante for tráfego orgânico, entrega a mensagem limpa.
 */
export function getWhatsAppUrl(service: ServiceType = "home", customText?: string): string {
  const baseText = customText || WHATSAPP_MESSAGES[service] || WHATSAPP_MESSAGES.home;
  const attribution = getTrafficAttribution();

  let finalText = baseText;
  if (attribution?.codigo) {
    finalText = `${baseText} Protocolo: ${attribution.codigo}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalText)}`;
}

/**
 * Registra o clique do Google Ads no backend de forma síncrona/fire-and-forget
 * utilizando sendBeacon (com fallback para fetch keepalive).
 */
export function registrarCliqueAds(): void {
  if (typeof window === "undefined") return;

  const attribution = getTrafficAttribution();
  if (!attribution || (!attribution.gclid && !attribution.wbraid && !attribution.gbraid)) {
    return;
  }

  const payload = {
    empresa: "PL",
    codigo: attribution.codigo,
    gclid: attribution.gclid,
    wbraid: attribution.wbraid,
    gbraid: attribution.gbraid,
    url_origem: window.location.href,
    user_agent: navigator.userAgent,
    criado_em: new Date().toISOString(),
  };

  if (ENDPOINT_REGISTRO_CLIQUE) {
    try {
      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT_REGISTRO_CLIQUE, blob);
      } else {
        fetch(ENDPOINT_REGISTRO_CLIQUE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Ignora erro de rede para nunca travar a navegação do usuário
    }
  }

  if (typeof process !== "undefined" && process.env?.NODE_ENV === "development") {
    console.log("[Google Ads Tracking - ProLav] Clique registrado:", payload);
  }
}

/**
 * Dispara evento de conversão do WhatsApp no Google Ads (gtag)
 */
export function reportarConversaoWhatsApp(url?: string): boolean {
  try {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "conversion", {
        send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
        value: 1.0,
        currency: "BRL",
      });
    }
  } catch (err) {
    console.error("Erro ao reportar conversão de WhatsApp:", err);
  }
  return true;
}

/**
 * Dispara evento de conversão de Ligação Telefônica no Google Ads (gtag)
 */
export function reportarConversaoTelefone(url?: string): boolean {
  try {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "conversion", {
        send_to: GOOGLE_ADS_PHONE_CONVERSION,
      });
    }
  } catch (err) {
    console.error("Erro ao reportar conversão de Telefone:", err);
  }
  return true;
}

/**
 * Manipulador global de clique para todos os botões e links de WhatsApp.
 * Dispara tanto a conversão do Google Ads no gtag quanto o registro do clique offline.
 */
export function handleWhatsAppClick(): void {
  reportarConversaoWhatsApp();
  registrarCliqueAds();
}

// Aliases para manter compatibilidade com implementações existentes
export const trackWhatsAppConversion = handleWhatsAppClick;
export const trackPhoneConversion = reportarConversaoTelefone;
