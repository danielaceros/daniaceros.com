#!/bin/zsh
# Smoke test de las landings de anuncios (/lp/<slug>) contra un `next start` local.
# Uso: PORT=3100 scripts/lp-smoke.sh   (slugs leídos de lib/landings.ts)
PORT=${PORT:-3100}
B="http://localhost:$PORT"
UA="Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Instagram"
cd "${0:A:h}/.."
SLUGS=($(grep -oE '^    slug: "[^"]+"' lib/landings.ts | cut -d'"' -f2))
fail=0
ko() { printf "  ✗ %s\n" "$1"; fail=1; }

echo "== ${#SLUGS} landings"
sitemap=$(curl -s "$B/sitemap.xml")
for s in $SLUGS; do
  p="/lp/$s"
  code=$(curl -s -A "$UA" -H 'Accept-Language: es-ES' -o /tmp/lp.html -w '%{http_code}' "$B$p")
  robots=$(grep -o '<meta name="robots" content="[^"]*"' /tmp/lp.html | head -1 | sed 's/.*content="//;s/"//')
  h1=$(grep -o '<h1[^>]*>[^<]*</h1>' /tmp/lp.html | sed 's/<[^>]*>//g' | head -1)
  title=$(grep -o '<title>[^<]*</title>' /tmp/lp.html | sed 's/<[^>]*>//g')
  vsl=$(grep -c 'vsl-es-dani-acero-poster' /tmp/lp.html)
  form=$(grep -c 'id="contacto"' /tmp/lp.html)
  nav=$(grep -oE 'href="/(portfolio|servicios|sobre-mi|precios|blog|contacto)"' /tmp/lp.html | wc -l | tr -d ' ')
  exits=$(grep -oE 'href="(mailto:|tel:|https://wa\.me)[^"]*"' /tmp/lp.html | wc -l | tr -d ' ')
  en=$(curl -s -A "$UA" -H 'Accept-Language: en-US,en;q=0.9' -o /dev/null -w '%{http_code}' "$B$p")
  enp=$(curl -s -A "$UA" -o /dev/null -w '%{http_code}' "$B/en$p")
  printf "%-44s %s robots=%-26s vsl=%s form=%s nav=%s en-US=%s /en=%s | %s\n" "$p" "$code" "$robots" "$vsl" "$form" "$nav" "$en" "$enp" "$title"
  [ "$code" = 200 ] || ko "$p no da 200"
  [[ "$robots" == noindex* ]] || ko "$p sin noindex"
  [ -n "$h1" ] || ko "$p sin H1"
  [[ "$title" != *"| Daniel Acero"* ]] || ko "$p con sufijo de plantilla duplicado"
  [ "$vsl" -gt 0 ] || ko "$p sin VSL"
  [ "$form" -gt 0 ] || ko "$p sin #contacto"
  [ "$nav" = 0 ] || ko "$p con enlaces de navegación ($nav)"
  [ "$exits" = 0 ] || ko "$p con enlaces de email/WhatsApp/teléfono ($exits): solo debe haber formulario"
  [ "$en" = 200 ] || ko "$p con Accept-Language en-US no da 200 ($en)"
  [ "$enp" = 404 ] || ko "/en$p debería dar 404 ($enp)"
  echo "$sitemap" | grep -q "/lp/" && ko "sitemap contiene /lp/"
done
r=$(curl -s -o /dev/null -w '%{http_code}' "$B/lp/no-existe"); [ "$r" = 404 ] || ko "/lp/no-existe debería dar 404 ($r)"
r=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "$B/es/lp/${SLUGS[1]}"); [[ "$r" == 301*"/lp/${SLUGS[1]}" ]] || ko "/es/lp → 301 ($r)"
grep -q "/lp/" public/llms.txt && ko "llms.txt contiene /lp/"
grep -q '"/lp' lib/i18n/routes.ts && ko "routes.ts contiene /lp"
[ $fail = 0 ] && echo "== OK" || { echo "== FALLOS"; exit 1; }
