export const CONSENT_STORAGE_KEY = "loire-cookie-consent";

export type ConsentValue = "accepted" | "declined";

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener("loire-consent-change", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("loire-consent-change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted";
}

export function needsConsentBanner(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_STORAGE_KEY) === null;
}

export function setConsent(value: ConsentValue): void {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new Event("loire-consent-change"));
}

export { subscribeToConsent };
