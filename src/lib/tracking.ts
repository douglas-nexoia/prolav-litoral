// Tracking modular para Google Ads e Google Analytics da ProLav Litoral
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GOOGLE_ADS_ID = "AW-18439155671";
export const GOOGLE_ADS_WHATSAPP_CONVERSION = "AW-18439155671/2_aeCKmL2fEcENffvNhE";
export const GOOGLE_ADS_PHONE_CONVERSION = "AW-18439155671/ENbgCNuQ2fEcENffvNhE";

export const trackWhatsAppConversion = (callback?: () => void) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
        value: 1.0,
        currency: "BRL",
      });
    }
  } catch (err) {
    console.error("Erro ao reportar conversão de WhatsApp:", err);
  }

  if (callback && typeof callback === "function") {
    setTimeout(callback, 200);
  }
};

export const trackPhoneConversion = (callback?: () => void) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_PHONE_CONVERSION,
      });
    }
  } catch (err) {
    console.error("Erro ao reportar conversão de Telefone:", err);
  }

  if (callback && typeof callback === "function") {
    setTimeout(callback, 200);
  }
};
