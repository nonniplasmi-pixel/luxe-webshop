# Luxe Webshop (ISK) – með frísendingarborða & SEO

- Verð í ISK, falleg birting (`Intl.NumberFormat('is-IS')`)
- Toppborði: **Frí sending yfir 7.500 kr.**
- Karfa: sýnir hversu mikið vantar upp á fría sendingu
- SEO/OG/Twitter meta + favicon.svg
- GitHub Pages workflow (deploy á push)

## Uppsetning
Hladdu upp **innihaldi** þessarar ZIP í rót repo-sins (`luxe-webshop`) og commit-aðu.  
Farðu í **Settings → Pages → Build and deployment → GitHub Actions** ef það er ekki þegar virkt.

## Breyta frísendingarmörkum
Opna `app.js` og breyta `FREE_SHIPPING_THRESHOLD` (í krónum).

## Keyra staðbundið
```bash
python -m http.server 8080
# Svo: http://localhost:8080
```