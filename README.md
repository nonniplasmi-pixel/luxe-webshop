# Luxe Webshop (ISK) – Full Fix

- Allar myndir eru **staðbundnar** í `assets/` (engin hotlink)
- **Cache-bust** með `%VERSION%` → GitHub Actions setur stutta commit-hash
- „Um Luxe“ með portretti, quote, Blondie, korti & CTA
- ISK verð, frí sending yfir 7.500 kr., myndaföll til varasýningar

## Uppsetning
1) Hladdu **innihaldi** ZIP í rót repo-sins (`luxe-webshop`) og `Commit changes`.
2) Fylgstu með **Actions** → “Pages build and deployment”.
3) Opna: `https://<user>.github.io/luxe-webshop/?v=fullfix`.

## Breyta frísendingarmörkum
`app.js` → `FREE_SHIPPING_THRESHOLD`.

## Bæta við raunverulegum vörumyndum
Settu JPG/PNG í `assets/` og uppfærðu `image` slóðir í `products.json`.