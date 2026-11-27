# Trullo Bianco – sito vetrina (olio EVO, Modugno BA)

Next.js 16 App Router + TypeScript, CSS puro (`src/app/globals.css`), nessuna libreria UI. Sito statico, IT/EN.

## Comandi
- `npm run dev` · `npm run build` · `npm run export` (statico → `out/`, per Cloudflare Pages)

## Mappa
- Pagine: `src/app/[locale]/{page,storia,uliveto,prodotti,contatti}/page.tsx`; layout in `[locale]/layout.tsx`
- Testi: `src/dictionaries/it.ts` (fonte, definisce il tipo) e `en.ts` (deve avere la stessa forma). Modifica sempre entrambi.
- Config unica (contatti, social, reviews, shop): `src/lib/siteConfig.ts`
- i18n: `src/lib/i18n.ts` (nessuna libreria). Componenti: `src/components/` (Header, NavMenu client, Footer, GoogleReviews)
- Immagini: `public/images/` (originali in `pictures/`, non toccare)
- `next.config.ts`: con `EXPORT=1` output statico; altrimenti redirect `/`→`/it`. In export il redirect è `public/_redirects`.

## Convenzioni
- Next 16: `params` è una Promise (`await params`). Stesse slug in IT e EN (storia, uliveto, prodotti, contatti).
- Colori: verde `#43463a`, oro `#b28d43`, crema `#faf6ee`; titoli Cormorant Garamond, testo Inter.
- Testi storia: dal docx del cliente, non riscrivere; le frasi sulle cultivar sono aggiunte da Claude (da far validare).

## Decisioni del cliente
- Niente prezzi, niente pulsanti di acquisto per ora (punto di aggancio: commento in `prodotti/page.tsx`, `siteConfig.shop`).
- Recensioni Google: predisposte ma disattivate (`siteConfig.reviews.enabled=false`).
- Prodotti: bottiglie 500/250 ml, box 5 L. Stile elegante e minimale.

## TODO aperti
- Compilare `siteConfig` (dominio, indirizzo, email, telefono, social, placeId).
- Foto `trullo_bianco.jpeg` bassa risoluzione (640px) nella hero: chiedere l'originale.
- Revisione traduzione EN e frase introduttiva citazione ("Con un principio semplice…") non inclusa.
- Non c'è un deploy fatto né test automatici; verificare con `npm run build`.
