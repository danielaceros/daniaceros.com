// lib/i18n/routes.ts
// Registro de rutas YA traducidas al inglés. Es la única fuente de verdad para:
//   - buildMetadata (lib/seo.ts): hreflang + index en EN solo si está aquí;
//     si no, la versión /en/... sale con robots noindex y sin hreflang.
//   - app/sitemap.ts: solo incluye /en/... de las rutas registradas.
// Cuando traduzcas una página, añade su ruta ESPAÑOLA (sin prefijo) aquí.
// El blog tiene su propio registro: lib/blog-translations.ts.

/** Rutas exactas traducidas. */
export const TRANSLATED_PATHS: readonly string[] = [
  "/",
  "/portfolio",
]

/** Prefijos traducidos (todas las rutas hijas): p. ej. fichas de portfolio. */
export const TRANSLATED_PREFIXES: readonly string[] = [
  "/portfolio/",
]

export function isTranslatedPath(path: string): boolean {
  const clean = path.replace(/[?#].*$/, "") || "/"
  return (
    TRANSLATED_PATHS.includes(clean) ||
    TRANSLATED_PREFIXES.some((prefix) => clean.startsWith(prefix))
  )
}
