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

## Configurazione
- Contatti, social, recensioni Google e shop: `src/lib/siteConfig.ts`
- Testi IT/EN: `src/dictionaries/it.ts` e `src/dictionaries/en.ts`
- Immagini: `public/images/`
