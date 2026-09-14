// lib/i18n/client.ts
// Helpers solo de navegador.
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE, type Lang } from "./config"

/** Fija la cookie NEXT_LOCALE (1 año) que el proxy respeta siempre. */
export function persistLocale(lang: Lang) {
  if (typeof document === "undefined") return
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${LOCALE_COOKIE}=${lang}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax${secure}`
}
