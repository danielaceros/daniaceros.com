// lib/i18n/index.ts
// Punto de entrada único: `import { getDictionary, localizedHref, type Lang } from "@/lib/i18n"`.
// Los diccionarios son objetos TS pequeños y síncronos, así que getDictionary
// sirve igual en Server Components que en Client Components.
import es, { type Dictionary } from "./es"
import en from "./en"
import type { Lang } from "./config"

export * from "./config"
export { isTranslatedPath, TRANSLATED_PATHS, TRANSLATED_PREFIXES } from "./routes"
export type { Dictionary }

const dictionaries: Record<Lang, Dictionary> = { es, en }

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] ?? es
}

/** format("Ver proyecto {title}", { title: "IFEMA" }) → "Ver proyecto IFEMA" */
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}
