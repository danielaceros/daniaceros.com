#!/bin/zsh
# Smoke test i18n (ES/EN) contra un `next start` local. Uso: PORT=3100 scripts/i18n-smoke.sh
PORT=${PORT:-3100}
B="http://localhost:$PORT"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36"
fail=0
check() { # desc, condition-result
  if [ "$2" = "ok" ]; then printf "  ✓ %s\n" "$1"; else printf "  ✗ %s  (%s)\n" "$1" "$2"; fail=1; fi
}
PAGES=(/ /portfolio /servicios /servicios/corporativo /servicios/institucional /filmmaker-madrid /videografo-madrid /video-corporativo-madrid /video-eventos-madrid /contacto /hablemos /precios /proceso /contratar /faq /sobre-mi /clientes /casos-de-exito /contenido-mensual /marca-personal /a0studios /tv /aviso-legal /politica-de-privacidad /politica-de-cookies /blog)
echo "== Páginas ES y EN"
for p in $PAGES; do
  es=$(curl -s -A "$UA" -H 'Accept-Language: es-ES' -o /tmp/i18n_es.html -w '%{http_code}' "$B$p")
  enp="/en${p%/}"; [ "$p" = "/" ] && enp="/en"
  en=$(curl -s -A "$UA" -H 'Accept-Language: en-US' -o /tmp/i18n_en.html -w '%{http_code}' "$B$enp")
  esl=$(grep -o '<html lang="[a-z]*"' /tmp/i18n_es.html | head -1)
  enl=$(grep -o '<html lang="[a-z]*"' /tmp/i18n_en.html | head -1)
  robots=$(grep -o '<meta name="robots" content="[^"]*"' /tmp/i18n_en.html | head -1 | sed 's/.*content="//;s/"//')
  hre=$(grep -o 'hrefLang="en"' /tmp/i18n_en.html | head -1)
  # palabras muy españolas en el texto visible EN (heurística de fugas)
  leak=$(sed -e 's/<script[^>]*>.*<\/script>//g' -e 's/<[^>]*>/ /g' /tmp/i18n_en.html | grep -oiE '\b(también|después|nuestro|presupuesto|empresas|cuéntame|vídeo|grabación|contacto|servicios)\b' | wc -l | tr -d ' ')
  printf "%-30s ES %s %-12s | EN %s %-12s robots=%-14s hreflang=%s fugasES=%s\n" "$p" "$es" "${esl#<html }" "$en" "${enl#<html }" "${robots:-index}" "${hre:+sí}" "$leak"
done
echo "== Proxy"
r=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' -A "$UA" "$B/es/servicios"); [[ "$r" == 301*"/servicios" ]] && check "/es/servicios → 301 /servicios" ok || check "/es/servicios → 301" "$r"
r=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' -A "$UA" -H 'Accept-Language: en-US,en;q=0.9' "$B/servicios"); [[ "$r" == 307*"/en/servicios" ]] && check "en-US primera visita → 307 /en/servicios" ok || check "en-US → 307" "$r"
r=$(curl -s -o /dev/null -w '%{http_code}' -A "$UA" -H 'Accept-Language: es-ES' "$B/servicios"); [ "$r" = 200 ] && check "es-ES sin redirección" ok || check "es-ES" "$r"
r=$(curl -s -o /dev/null -w '%{http_code}' -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" -H 'Accept-Language: en-US' "$B/servicios"); [ "$r" = 200 ] && check "Googlebot sin redirección" ok || check "Googlebot" "$r"
r=$(curl -s -o /dev/null -w '%{http_code}' -A "$UA" -H 'Accept-Language: en-US' -b 'NEXT_LOCALE=es' "$B/servicios"); [ "$r" = 200 ] && check "cookie es respetada" ok || check "cookie" "$r"
echo "== Sitemap"
n_es=$(curl -s "$B/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | grep -vc '/en')
n_en=$(curl -s "$B/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | grep -c '/en')
echo "  URLs ES: $n_es · URLs EN: $n_en"
echo "== VSL (HLS adaptativo)"
curl -s -A "$UA" "$B/en" | grep -q 'vsl-en-dani-acero-poster' && check "VSL EN presente en /en" ok || check "VSL EN en /en" "no"
curl -s -A "$UA" -H 'Accept-Language: es-ES' "$B/" | grep -q 'vsl-es-dani-acero-poster' && check "VSL ES presente en /" ok || check "VSL ES en /" "no"
for L in es en; do
  m=$(curl -s "https://kgtz1gujr7extokb.public.blob.vercel-storage.com/vsl/hls/$L/master.m3u8")
  echo "$m" | grep -q '2160p\|3840x2160' && check "master HLS $L con 4K" ok || check "master HLS $L" "sin 4K o no accesible"
done
exit $fail
