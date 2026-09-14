# I18N_GUIDE — daniaceros.com (ES + EN)

Guía del patrón de internacionalización. **Léela entera antes de traducir una página.**

> Regla nº 1: **la versión española no cambia.** Mismos textos, URLs, metadatos y JSON-LD.
> El SEO manda en esta web. Traducir = añadir EN, nunca retocar ES.

---

## 1. Arquitectura

| Pieza | Archivo | Qué hace |
| --- | --- | --- |
| Rutas | `app/[lang]/…` | Todas las páginas cuelgan de `[lang]` (`es` \| `en`). `generateStaticParams` + `dynamicParams = false` en `app/[lang]/layout.tsx` (otro valor → 404). |
| Layout raíz | `app/[lang]/layout.tsx` → `components/RootDocument.tsx` | `RootDocument` = documento HTML completo (`<html lang>`, head, tracking, JSON-LD `ProfessionalService`, `<Header lang>`, `PageTransition`) + `buildRootMetadata(lang)`. El layout solo lo envuelve. |
| 404 | `app/global-not-found.tsx` (+ `experimental.globalNotFound` en `next.config.ts`), `app/[lang]/not-found.tsx` | URLs inexistentes → documento ES + UI 404 por defecto de Next (idéntico al 404 de antes). `notFound()` dentro de páginas → `[lang]/not-found.tsx`. Las fichas `[slug]` de portfolio y blog reactivan `dynamicParams = true` (el layout lo pone a `false` para `[lang]`). |
| Proxy | `proxy.ts` (Next 16, antes `middleware.ts`) | Ver §2. |
| Config de locale | `lib/i18n/config.ts` | `LOCALES`, `Lang`, `localizedHref`, `stripLocale`, `switchLocalePath`, `HREFLANG`, `OG_LOCALE`, `SCHEMA_LANGUAGE`, cookie. Sin dependencias (lo importa el proxy). |
| Diccionarios | `lib/i18n/es.ts`, `lib/i18n/en.ts` | Textos de UI compartida. `Dictionary = typeof es`; `en: Dictionary` → **clave que falte o sobre = error de TypeScript**. |
| Entrada única | `lib/i18n/index.ts` | `getDictionary(lang)`, `format(template, vars)` + re-export de config y registro. Sirve en Server y Client Components. |
| Registro de traducidas | `lib/i18n/routes.ts` | `TRANSLATED_PATHS` / `TRANSLATED_PREFIXES`. Decide index/noindex, hreflang y sitemap de EN. |
| Cookie (cliente) | `lib/i18n/client.ts` | `persistLocale(lang)` → `NEXT_LOCALE`, 1 año. |
| SEO | `lib/seo.ts` | `buildMetadata({ lang, path, … })`, `localizedMetadata(...)`, `buildLanguageAlternates(path)`. |
| Sitemap | `app/sitemap.ts` | ES siempre; EN solo rutas registradas; `xhtml:link` alternates en las traducidas. |
| Portfolio | `data/projects.ts` + `data/projects.en.ts` | `getProjects(lang)` / `getProject(slug, lang)`. |
| Blog | `lib/blog.ts` + `lib/blog-translations.ts` | `getLocalizedPost(slug, lang)`, `hasPostTranslation`. |
| VSL | `lib/media.ts` (`VSL`) + `components/VslSection.tsx` | Vídeo de la home por idioma; `null` = no se renderiza. |

**URLs:** español sin prefijo (`/`, `/servicios`); inglés con `/en` y **los mismos slugs** (`/en`, `/en/servicios`).

## 2. Proxy (`proxy.ts`)

Matcher: todo excepto `_next`, `_vercel`, `api` y cualquier ruta con extensión
(`sitemap.xml`, `robots.txt`, `favicon.ico`, `llms.txt`, ficheros de `public/`).

1. `/es` y `/es/...` → **301** a la URL sin prefijo (query conservada).
2. `/en/...` → pasa tal cual.
3. Sin prefijo → **rewrite interno** a `/es/...` (la URL visible no cambia).
   Antes, detección automática **solo si**:
   - no hay cookie `NEXT_LOCALE` válida (si la hay, se respeta siempre),
   - es una carga de documento GET (no fetch del router: `Accept: text/x-component` o `Sec-Fetch-Dest ≠ document`),
   - el User-Agent no es un bot/crawler/preview (regex `BOT_UA`; sin UA = bot),
   - hay `Accept-Language`.
   Si el idioma preferido (mayor `q`) **no** es `es`, `ca`, `gl` ni `eu` → **307** a `/en/...` + cookie `NEXT_LOCALE=en`.

`usePathname()` devuelve `/es/...` en el HTML prerenderizado y `/...` en el cliente:
**usa siempre `stripLocale(pathname).path`** para comparar rutas (ver `Header.tsx`, `PageTransition.tsx`).

## 3. Cómo traducir una página (receta)

Ejemplo: `/servicios`.

### 3.1 Textos
- **Textos propios de la página** (títulos, párrafos, FAQs…): crea un objeto por idioma junto a la página
  (p. ej. `app/[lang]/servicios/content.ts` con `const es = {...}` y `const en: typeof es = {...}`)
  o añade una sección al diccionario si es UI reutilizable.
  El ES se copia **literal** del JSX actual (incluidas tildes, comillas tipográficas y saltos → un espacio).
- **Textos de UI compartida**: `lib/i18n/es.ts` primero, luego `en.ts` (TypeScript te obliga).
- Placeholders: `"Ver proyecto {title}"` + `format(t.viewProject, { title })`.

### 3.2 Página (Server Component)
```tsx
import { localizedMetadata, type LangParams } from "@/lib/seo"
import { getDictionary, localizedHref, toLang } from "@/lib/i18n"

export const generateMetadata = localizedMetadata((lang) => ({
  title: content[lang].metaTitle,
  description: content[lang].metaDescription,
  path: "/servicios",            // SIEMPRE la ruta española sin prefijo
  keywords: content[lang].keywords,
}))

export default async function Page({ params }: LangParams) {
  const lang = toLang((await params).lang)
  const t = content[lang]
  return (
    <main>
      …
      <Link href={localizedHref(lang, "/contacto")}>…</Link>
      <ContactCTA lang={lang} />
    </main>
  )
}
```
- Páginas con otros params: `params: Promise<{ lang: string; slug: string }>`.
- **Client Components** (`*Client.tsx`): pásales `lang` como prop desde la página y dentro usa `getDictionary(lang)` / tu objeto de contenido.

### 3.3 Enlaces internos
- Siempre `localizedHref(lang, "/ruta-es")`. Nunca `"/en/..."` a mano.
- Anclas: `localizedHref(lang, "/#contacto")` → `/en#contacto`.
- Externos (`https:`, `mailto:`, `wa.me`) no se tocan.

### 3.4 Componentes compartidos
Todos aceptan `lang?: Lang` (por defecto `"es"`, para no romper páginas pendientes):
`Hero`, `About`, `ContactCTA`, `LazyContactForm`, `Portfolio`, `PortfolioCard`, `PortfolioMarquee`
(`basePath` ya localizado), `PortfolioHero`, `ProjectHero`, `ViewMoreOnTV`, `ContactPortfolioMarquee`,
`ContactHeroSlider`, `VslSection` (`lang` obligatorio). **En una página traducida pasa `lang` a TODOS.**
`Header` recibe `lang` del layout; `PageTransition`, `ProjectContent`, `WhatsAppButton` (recibe `label`/`message` por props) y `SectionTitle` no tienen texto propio.

### 3.5 JSON-LD
- `BreadcrumbList`: `name` traducido (`getDictionary(lang).breadcrumbs.home`) y `path: localizedHref(lang, …)`.
- `inLanguage`: `SCHEMA_LANGUAGE[lang]`. **Si el bloque ES original no tenía `inLanguage`, añádelo solo en EN** (`...(lang === "es" ? {} : { inLanguage: … })`) para no alterar el ES.
- `@id` de entidades nuevas en EN: sufijo con la URL EN (`${SITE_URL}/en#website`).
- `PERSON_ID` / `BUSINESS_ID` son entidades únicas: no se duplican por idioma.

### 3.6 Registrar la traducción (obligatorio)
Añade la ruta ES a `lib/i18n/routes.ts` (`TRANSLATED_PATHS` o `TRANSLATED_PREFIXES`). Con eso:
- ES y EN pasan a llevar `hreflang` (`es-ES`, `en`, `x-default` → ES),
- EN pasa de `noindex, follow` a `index, follow`,
- el sitemap incluye la URL EN con alternates.

**No registres una ruta a medio traducir.**

### 3.7 Verificación
```bash
npm run lint && npm run build && npm run start
curl -s -H 'Accept-Language: es-ES' localhost:3000/servicios > es.html   # comparar con main: solo cambian hreflang y selector
curl -s localhost:3000/en/servicios | grep -o '<html lang="[^"]*"\|<meta name="robots"[^>]*>\|hrefLang="[^"]*"'
curl -s localhost:3000/sitemap.xml | grep '/en/servicios'
```

## 4. Páginas sin traducir (comportamiento actual)

`/en/<ruta>` funciona con el mismo layout (Header y ContactCTA/Hero/About… en inglés si la página les pasa `lang`;
si no, en español), **contenido español**, `robots: noindex, follow`, canonical a sí misma, sin hreflang y fuera del sitemap.
Lo hace `localizedMetadata({...})` + el registro: no hay que tocar nada más hasta traducirla.

## 5. Pendientes de traducir (para repartir)

| Grupo | Rutas (`app/[lang]/…`) | Notas |
| --- | --- | --- |
| A. Servicios | `/servicios`, `/servicios/corporativo`, `/servicios/institucional` (`/servicios/instituciones` es alias que re-exporta institucional) | |
| B. Landings SEO Madrid | `/filmmaker-madrid`, `/videografo-madrid`, `/video-corporativo-madrid`, `/video-eventos-madrid` | Tienen `*Client.tsx`; keywords EN a decidir por Dani (búsquedas en inglés). |
| C. Conversión | `/contacto`, `/hablemos`, `/precios`, `/proceso`, `/contratar`, `/faq`, `/gracias` | `/hablemos` tiene WhatsApp propio en la página y cabecera especial sin selector. FAQ tiene JSON-LD `FAQPage`. |
| D. Marca / prueba social | `/sobre-mi` (+ `SobreMiClient.tsx`, JSON-LD `Person`), `/clientes` (+ `ClientesClient.tsx`), `/casos-de-exito` | |
| E. Productos | `/contenido-mensual`, `/marca-personal`, `/the-rooftop-content-studio` | Páginas largas. |
| F. TV | `/tv` (+ `data/tv-reels.ts`, `components/tv/ReelPhone.tsx`) | |
| G. Legales | `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies` | Revisión legal recomendada; quizá mejor mantener ES + noindex EN. |
| H. Blog | `/blog` (índice), `/blog/[slug]` (93 artículos), `app/[lang]/blog/not-found.tsx` | Ver §6. |

Ya traducidas: `/`, `/portfolio`, `/portfolio/[slug]` (7 proyectos), Header, ContactCTA (+ footer), Hero, About, VSL.

## 6. Blog

- Original: `lib/blog.ts` (no se toca).
- Traducción de un artículo: entrada en `lib/blog-translations.ts` → `blogTranslations.en["<slug-es>"] = { title, description, readingTime, category, tags, keyword, excerpt, seoTitle, metaDescription, heroKicker, body }`.
  `seoTitle` debe terminar en `| Daniel Acero` (se recorta para `<title>`).
- Automático al añadirla: `/en/blog/<slug>` usa la traducción (`getLocalizedPost`), pasa a `index` + hreflang (`hasPostTranslation`) y entra en el sitemap.
- Pendiente en esa fase: textos fijos de las plantillas `app/[lang]/blog/page.tsx`, `[slug]/page.tsx` y `not-found.tsx` (kicker, "Leer artículo", "Ver perfil"…), registrar `/blog` en `routes.ts` cuando el índice esté traducido, y enlaces internos dentro de `body` (hoy apuntan a rutas ES).
- Slugs EN = slugs ES por ahora. Si algún día se localizan, habrá que añadir un mapa slug-es ↔ slug-en y usarlo en `localizedHref`/sitemap.

## 7. Portfolio

`data/projects.en.ts`: `projectTranslations.en[slug] = { title, sections }` con el mismo orden y marcadores (`✓ Título — desc`, `• item`).
Proyecto nuevo en `projects.ts` sin traducción → EN muestra el ES (pero sigue indexado por el prefijo `/portfolio/`): **traduce siempre al añadir proyectos**.

## 8. VSL (`components/VslSection.tsx`)

`lib/media.ts` → `VSL: Record<Lang, { video4k, video, poster } | null>`. `null` = sin sección.
Sin `src` hasta pulsar play (`preload="none"`). Calidad: 4K por defecto; 1080p si `saveData`, red 2g/3g o
`screen.width × devicePixelRatio < 1600`; si el 4K da error, cae a 1080p. El `<video>` expone `data-quality`.
Título corto: `vsl.title` del diccionario (`hideTitle` para ocultarlo).

## 9. Selector de idioma

`Header.tsx` → `LanguageSwitcher` (escritorio tras "Cuéntame tu proyecto" y al final del menú móvil).
`<a>` normal (recarga completa para que cambie `<html lang>`), `hrefLang`, `lang`, `aria-label` con el nombre del idioma,
`aria-current` en el activo; fija `NEXT_LOCALE` antes de navegar. Mantiene la ruta (`switchLocalePath`); la query y el hash no se conservan.
