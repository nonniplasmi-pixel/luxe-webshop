# Luxe Webshop (ISK)

Static vefverslun á íslensku með verðum í **ISK**.

## Uppsetning
- Hlaða skrám inn í GitHub repo (rót): `index.html`, `styles.css`, `app.js`, `products.json`, `assets/`
- GitHub Pages: virkja **Settings → Pages → GitHub Actions** (workflow fylgir).

## Keyra
Opna `index.html` beint eða keyra:
```bash
python -m http.server 8080
```
Svo: http://localhost:8080

## Greiðslur
Þessi útgáfa opnar vöru á tryluxe.com í checkout. Hægt að bæta við Stripe Checkout síðar.