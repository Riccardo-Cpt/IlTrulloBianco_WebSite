# IlTrulloBianco_WebSite
Sito per azienda olivicola Il Trullo Bianco

Sito realizzato con Next.js (App Router, TypeScript), in italiano e inglese.

## Requisiti
- Node.js 20.9 o superiore (testato con Node 24)
- npm
- Connessione a internet al primo avvio/build (i font Google vengono scaricati)

## Avvio in locale

1. Clona il repository ed entra nella cartella:
   ```bash
   git clone <url-del-repository>
   cd IlTrulloBianco_WebSite
   ```
2. Installa le dipendenze (solo la prima volta):
   ```bash
   npm install
   ```
3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```
4. Apri http://localhost:3000 nel browser: verrai reindirizzato a `/it`. La versione inglese è su `/en`.

Il server si aggiorna automaticamente quando modifichi i file. Per fermarlo premi `Ctrl+C`.

Se la porta 3000 è occupata, usa un'altra porta:
```bash
npm run dev -- -p 3001
```

## Build di produzione in locale
```bash
npm run build
npm start
```
Il sito sarà disponibile su http://localhost:3000.

## Pubblicazione su Cloudflare (Pages)

Il sito è interamente statico: si pubblica su Cloudflare Pages come esportazione statica (`npm run export`, cartella `out/`). Il file `public/_redirects` porta `/` a `/it`.

Prima di pubblicare, compila i dati in `src/lib/siteConfig.ts` (dominio, contatti) e fai il push del codice su GitHub.

### Opzione A – Collegamento a GitHub (consigliata, deploy automatici)
1. Accedi a https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autorizza GitHub e seleziona il repository del sito.
3. Imposta la build:
   - **Framework preset:** None
   - **Build command:** `npm run export`
   - **Build output directory:** `out`
   - **Variabile d'ambiente:** `NODE_VERSION` = `22`
4. Premi **Save and Deploy**. Ogni push sul branch `main` pubblica una nuova versione; gli altri branch generano anteprime.

### Opzione B – Upload manuale con Wrangler
```bash
npm run export
npx wrangler pages deploy out --project-name il-trullo-bianco
```
Al primo utilizzo `wrangler` chiede di fare il login a Cloudflare nel browser.

### Dominio personalizzato
Nel progetto Pages: **Custom domains** → **Set up a custom domain** e segui le istruzioni DNS. Se il dominio è gestito da Cloudflare, il record viene creato automaticamente. Aggiorna poi `url` in `src/lib/siteConfig.ts`.

## Configurazione
- Contatti, social, recensioni Google e shop: `src/lib/siteConfig.ts`
- Testi IT/EN: `src/dictionaries/it.ts` e `src/dictionaries/en.ts`
- Immagini: `public/images/`
