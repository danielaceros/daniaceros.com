// proxy.ts (Next 16: antes middleware.ts)
// Routing i18n:
//   1. /es y /es/...  → 301 a la URL sin prefijo (el español no lleva prefijo).
//   2. /en/...        → pasa tal cual (app/[lang] con lang="en").
//   3. Sin prefijo    → rewrite interno a /es/... (la URL visible no cambia).
//      Detección automática SOLO si no hay cookie NEXT_LOCALE, la petición es
//      una navegación de documento (no RSC/prefetch), no es un bot y trae
//      Accept-Language: si el idioma preferido no es es/ca/gl/eu → 307 a /en/...
//      fijando la cookie. Con cookie, se respeta siempre.
import { NextResponse, type NextRequest } from "next/server"
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  SPANISH_FAMILY_LANGUAGES,
  isLang,
  localizedHref,
  type Lang,
} from "@/lib/i18n/config"

const BOT_UA =
  /bot\b|bot\/|bot;|crawl|spider|slurp|googlebot|google-inspectiontool|googleother|google-extended|adsbot|mediapartners|storebot|apis-google|feedfetcher|bingbot|bingpreview|msnbot|duckduck|baiduspider|yandex|sogou|exabot|facebookexternalhit|facebot|meta-externalagent|twitterbot|linkedinbot|whatsapp|telegrambot|slackbot|discordbot|applebot|pinterest|redditbot|semrush|ahrefs|mj12bot|dotbot|petalbot|seznam|gptbot|chatgpt|oai-searchbot|claudebot|claude-user|claude-searchbot|anthropic|perplexity|ccbot|bytespider|amazonbot|youbot|cohere|diffbot|mistralai|meta-externalfetcher|duckassist|iaskspider|kagi-fetcher|firecrawl|jina|timpibot|ai2bot|lighthouse|pagespeed|headlesschrome|vercel|uptime|monitor|preview|scrapy|curl-bot|python-requests|go-http-client|axios|node-fetch/i

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return true
  return BOT_UA.test(userAgent)
}

/** Idioma preferido (mayor q; a igualdad, el primero). null si no hay preferencia útil. */
function preferredLanguage(acceptLanguage: string): string | null {
  let best: { tag: string; q: number } | null = null
  for (const part of acceptLanguage.split(",")) {
    const [rawTag, ...params] = part.trim().split(";")
    const tag = rawTag?.trim().toLowerCase()
    if (!tag) continue
    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="))
    const q = qParam ? Number.parseFloat(qParam.slice(2)) : 1
    if (!Number.isFinite(q) || q <= 0) continue
    if (!best || q > best.q) best = { tag, q }
  }
  if (!best || best.tag === "*") return null
  return best.tag.split("-")[0] ?? null
}

function detectLocale(request: NextRequest): Lang | null {
  const acceptLanguage = request.headers.get("accept-language")
  if (!acceptLanguage) return null
  const primary = preferredLanguage(acceptLanguage)
  if (!primary) return null
  return SPANISH_FAMILY_LANGUAGES.includes(primary) ? "es" : "en"
}

// Next quita las cabeceras RSC (rsc, next-router-*) y el ?_rsc antes de llegar
// al proxy, así que las navegaciones/prefetch del router se detectan por las
// cabeceras estándar del navegador: fetch() manda Accept: text/x-component y
// Sec-Fetch-Dest: empty; una carga de documento manda Sec-Fetch-Dest: document.
function isDocumentNavigation(request: NextRequest): boolean {
  if (request.method !== "GET" && request.method !== "HEAD") return false
  const h = request.headers
  if (h.get("rsc") || h.get("next-router-prefetch") || h.get("next-router-state-tree")) return false
  if (h.get("accept")?.includes("text/x-component")) return false
  if (h.get("purpose") === "prefetch" || h.get("sec-purpose")?.includes("prefetch")) return false
  const dest = h.get("sec-fetch-dest")
  if (dest && dest !== "document") return false
  return true
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split("/")[1]

  // 1) /es/... → 301 sin prefijo
  if (firstSegment === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/"
    return NextResponse.redirect(url, 301)
  }

  // 2) /en/... → tal cual
  if (isLang(firstSegment)) return NextResponse.next()

  // 3) Sin prefijo → detección (solo primera visita) o rewrite a ES
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value
  if (
    !isLang(cookieLocale) &&
    // Landings de anuncios (/eventos/...): solo existen en ES. Sin detección, un móvil en inglés acabaría en un 404 en /en.
    !pathname.startsWith("/eventos/") &&
    isDocumentNavigation(request) &&
    !isBot(request.headers.get("user-agent"))
  ) {
    const detected = detectLocale(request)
    if (detected && detected !== DEFAULT_LOCALE) {
      const url = request.nextUrl.clone()
      url.pathname = localizedHref(detected, pathname)
      const response = NextResponse.redirect(url, 307)
      response.cookies.set(LOCALE_COOKIE, detected, {
        path: "/",
        maxAge: LOCALE_COOKIE_MAX_AGE,
        sameSite: "lax",
      })
      response.headers.set("Cache-Control", "private, no-store")
      response.headers.set("Vary", "Accept-Language, Cookie")
      return response
    }
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    // Todo salvo: internals de Next, API, y cualquier ruta con extensión
    // (sitemap.xml, robots.txt, favicon.ico, llms.txt, imágenes de public/…).
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
}
